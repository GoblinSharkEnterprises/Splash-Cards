const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const usersController = {};

// method for creating a new user
usersController.createUser = async (req, res, next) => {
  try {
    // get inputted username and password from req.body
    const { username, password } = req.body;
    // if either is not inputted error out
    if (!username || !password) {
      return next({
        log: `userssController.createUser ERROR: username or password not entered`,
        status: 400,
        message: { err: "Username and Password are required!" },
      });
    }
    // generate salt and encrypt with bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // create user giving it username and the new hashed password
    const user = await User.create({
      username: username,
      password: hashedPassword,
    });
    // grab the id of the newly created user and store on res.locals
    res.locals.userId = user._id;
    return next();
  } catch (err) {
    return next({
      log: `usersController.createUser ERROR: ${err}`,
      status: 500,
      message: { err: "Error occured creating user" },
    });
  }
};

usersController.verifyUser = async (req, res, next) => {
  try {
    // get username and password from post request body
    const { username, password } = req.body;
    // verify that a username and password were provided. If not return an error
    if (!username || !password) {
      return next({
        log: "Missing username or password in usersController.verifyUser",
        status: 400,
        message: { err: "Username and Password required" },
      });
    }
    // find and save the user in the database with a matching username
    const user = await User.findOne({ username });
    // if can't find user in the database return error message
    if (!user) {
      return next({
        log: "No matches to username found in usersController.verifyUser",
        status: 401,
        message: { err: "Invalid username or password" },
      });
    } else {
      try {
        // check if provided password matches stored hashed password
        const result = await bcrypt.compare(password, user.password);
        if (!result) {
          // password did not match
          return next({
            log: "Invalid password in usersController.varifyUser",
            status: 401,
            message: { err: "Invalid username or password" },
          });
        } else {
          // store userId
          res.locals.userId = user._id;
          return next();
        }
      } catch (err) {
        // pass error through to global error handler for errors in comparing passwords
        return next({
          log: `usersController.verifyUser bcrypt compare ERROR: ${err}`,
          status: 500,
          message: { err: "Error verifying user" },
        });
      }
    }
  } catch (err) {
    // pass error through to global error handler
    return next({
      log: `usersController.verifyUser ERROR: ${err}`,
      status: 500,
      message: { err: "Error verifying user" },
    });
  }
};

usersController.getMySetIds = async (req, res, next) => {
  try {
    // get user obj from DB
    const user = await User.findOne({ _id: req.params.id });
    // store array of set ids on res.locals
    res.locals.setIds = user.sets;
    return next();
  } catch (err) {
    // pass error through to global error handler
    return next({
      log: `usersController.getMySets ERROR: ${err}`,
      status: 500,
      message: { err: "Error getting users setIds" },
    });
  }
};

// method for adding a created set to user DB
usersController.addMySet = async (req, res, next) => {
  try {
    // update the cards array property of the logged in user with the new set
    await User.updateOne(
      { _id: req.body.setOwner },
      { $push: { sets: res.locals.createdSet._id } }
    );
    return next();
  } catch (err) {
    // pass error through to global error handler
    return next({
      log: `usersController.addMySet ERROR: ${err}`,
      status: 500,
      message: { err: "Error adding a new set to user DB" },
    });
  }
};

module.exports = usersController;

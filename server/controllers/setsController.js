// require set model
const { Set } = require("../models/setModels");

const setsController = {};

// define controller methods

// method for getting all sets from DB
setsController.getSets = async (req, res, next) => {
  try {
    // request all sets from DB and put on res.locals
    const sets = await Set.find({});
    res.locals.sets = sets;
    return next();
  } catch (err) {
    // pass error through to global error handler
    return next({
      log: `setsController.getSets ERROR: ${err}`,
      status: 500,
      message: { err: "Error getting sets" },
    });
  }
};

// method for refining sets into necessary display info
setsController.refineSets = (req, res, next) => {
  try {
    // refine sets down to only include _id, name, totalCards
    const refinedSets = res.locals.sets.map((set) => {
      return {
        _id: set._id,
        name: set.name,
        totalCards: set.totalCards,
      };
    });
    // store array of refined sets on res.locals
    res.locals.refinedSets = refinedSets;
    return next();
  } catch (err) {
    // pass error through to global error handler
    return next({
      log: `setsController.getSets ERROR: ${err}`,
      status: 500,
      message: { err: "Error getting sets" },
    });
  }
};
// method for getting a single set based on id
setsController.getSingleSet = async (req, res, next) => {
  try {
    // query database for set with matching id and save to res.locals
    const { id } = req.params;
    const set = await Set.findOne({ _id: id });
    res.locals.set = set;
    return next();
  } catch (err) {
    // pass error through to global error handler
    return next({
      log: `setsController.getSingleSet ERROR: ${err}`,
      status: 500,
      message: { err: "Error getting a specified set" },
    });
  }
};

// method for creating a new set
setsController.addSet = async (req, res, next) => {
  try {
    // create new set document in the db
    const createdSet = await Set.create({
      name: req.body.setName,
      public: true,
      totalCards: res.locals.createdCards.length,
      cards: res.locals.createdCards,
      setOwner: req.body.setOwner,
    });
    // save created set into locals for next middleware
    res.locals.createdSet = createdSet;
    return next();
  } catch (err) {
    // pass error through to global error handler
    return next({
      log: `setsController.addSet ERROR: ${err}`,
      status: 500,
      message: { err: "Error adding a set" },
    });
  }
};

setsController.getMySets = async (req, res, next) => {
  try {
    // for every setId, find it and append it to sets array
    const sets = [];
    for (let setId of res.locals.setIds) {
      const set = await Set.findOne({ _id: setId });
      sets.push(set);
    }
    // add sets to res.locals
    res.locals.sets = sets;
    return next();
  } catch (err) {
    // pass error through to global error handler
    return next({
      log: `setsController.getMySets ERROR: ${err}`,
      status: 500,
      message: { err: "Error getting users sets" },
    });
  }
};

module.exports = setsController;

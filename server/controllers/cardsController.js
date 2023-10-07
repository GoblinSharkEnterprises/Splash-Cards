const { Card } = require("../models/setModels");

const cardsController = {};

// define controller methods
cardsController.addCards = async (req, res, next) => {
  try {
    // create cards for every card passed in body and save to local
    const createdCards = await Card.create(req.body.cardList);
    res.locals.createdCards = createdCards;
    return next();
  } catch (err) {
    // pass error through to global error handler
    return next({
      log: `cardsController.addCards ERROR: ${err}`,
      status: 500,
      message: { err: "Error adding cards" },
    });
  }
};

module.exports = cardsController;

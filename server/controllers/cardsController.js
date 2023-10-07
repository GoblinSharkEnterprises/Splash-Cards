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

// takes a set and gets the card information for each card in the set
cardsController.getCardsInfo = async (req, res, next) => {
  try {
    // set.cards currently only has ids in it, make a new array containing the entire cardObj for each id
    const cardsInfo = [];
    for (let cardId of res.locals.set.cards) {
      const cardObj = await Card.findOne({ _id: cardId });
      cardsInfo.push(cardObj);
    }
    // build the return object for the full set with cards info array
    const setInfo = {
      setName: res.locals.set.name,
      totalCards: res.locals.set.totalCards,
      cards: cardsInfo,
    };
    // save setInfo to be sent back on the response
    res.locals.setInfo = setInfo;
    return next();
  } catch (err) {
    // pass error through to global error handler
    return next({
      log: `cardsController.getCardsInfo ERROR: ${err}`,
      status: 500,
      message: { err: "Error getting cards info" },
    });
  }
};

module.exports = cardsController;

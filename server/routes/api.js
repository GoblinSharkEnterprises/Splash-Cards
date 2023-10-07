// require express and create router
const express = require("express");
const router = express.Router();
// require in controllers
const setsController = require("../controllers/setsController");
const cardsController = require("../controllers/cardsController");

// define routes

// route for getting a single set and returning all set/card information
router.get(
  "/sets/set:id",
  setsController.getSingleSet,
  cardsController.getCardsInfo,
  (req, res) => {
    return res.status(200).json(res.locals.setInfo);
  }
);

// route for getting refined information about sets for main display
router.get(
  "/sets",
  setsController.getSets,
  setsController.refineSets,
  (req, res) => {
    return res.status(200).json(res.locals.refinedSets);
  }
);

// route for creating a new set
router.post(
  "/sets",
  cardsController.addCards,
  setsController.addSet,
  (req, res) => {
    res.status(200).json({});
  }
);

// export router
module.exports = router;

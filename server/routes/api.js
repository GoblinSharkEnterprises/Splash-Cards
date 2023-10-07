// require express and create router
const express = require("express");
const router = express.Router();
// require in controllers
const setsController = require("../controllers/setsController");

// define routes

// route for getting a single set

// route for getting refined information about sets for main display
router.get(
  "/sets",
  setsController.getSets,
  setsController.refineSets,
  (req, res) => {
    return res.status(200).json(res.locals.refineSets);
  }
);

// export router
module.exports = router;

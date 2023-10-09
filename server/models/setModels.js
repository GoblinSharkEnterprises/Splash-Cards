const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://gbyrne12:X9pFiXUCeF2cortx@scratch.dqmncpw.mongodb.net/?retryWrites=true&w=majority";
//make sure to create your own URI for this mongodb to work
mongoose
  .connect(MONGO_URI, {
    // options for the connect mothod to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that out collections are part of
    dbname: "scratch",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log("Error connecting to db: ", err));

const Schema = mongoose.Schema;

// Schema for card 'Set' collection
const setSchema = new Schema({
  name: { type: String, require: true },
  public: Boolean,
  totalCards: Number,
  cards: [
    {
      type: Schema.Types.ObjectId,
      ref: "card",
    },
  ],
  setOwner: { type: Schema.Types.ObjectId, ref: "user" },
});

// creates a model for the 'set' collection that will be part of the export
const Set = mongoose.model("set", setSchema);

const cardSchema = new Schema({
  front: String,
  back: String,
  accuracy: Number,
});

// creates a model for the 'card' collection that will be part of the export
const Card = mongoose.model("card", cardSchema);

// exports all the models in an object to be used in the server controller
module.exports = {
  Set,
  Card,
};

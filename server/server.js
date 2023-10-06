const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// parse all request bodies
app.use(express.json());

// if in production mode
if (process.env.NODE_ENV === "production") {
  //production mode
  console.log("//////// NODE_ENV", process.env.NODE_ENV);
  // handle requests for static files
  app.use("/build", express.static(path.resolve(__dirname, "../build")));

  // route handler to respond with main app
  app.get("/", (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, "../index.html"));
  });
} else {
  //development mode
  app.get("/", (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, "../index.html"));
  });
}
// Global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(3000, () => {
  console.log(`Server listening on port: 3000`);
});

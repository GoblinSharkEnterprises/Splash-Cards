const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
// require routers
const apiRouter = require("./routes/api");

const app = express();

// parse all request bodies
app.use(express.json());

// route handlers
// direct requests to /api to apiRouter
app.use("/api", apiRouter);

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
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log(`Server listening on port: 3000`);
});

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

let database = require("./database/db");
let noteRoute = require("../server/routes/note-route");

mongoose.Promise = global.Promise;
mongoose
  .connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(
    () => {
      console.log("Database connected sucessfully !");
    },
    (error) => {
      console.log("Database could not be connected : " + error);
    }
  );

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/notes", noteRoute);

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// Error Handling
// app.use((req, res, next) => {
//     next(createError(404));
// });

// app.use(function (err, req, res, next) {
//     console.error(err.message);
//     if (!err.statusCode) err.statusCode = 500;
//     res.status(err.statusCode).send(err.message);
// });

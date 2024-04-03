const fs = require("fs");
const cors = require("cors");

const express = require("express");
const app = express();
const methodOverride = require("method-override");
const mongoose = require("mongoose");


//For security
const helmet = require("helmet");
app.use(helmet());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "https:", "'unsafe-inline'"],
      baseUri: ["'self'"],
      fontSrc: ["'self'", "https:", "data:"],
      imgSrc: ["'self'", "https:"],
    },
  }),
);

// Dealing with CORS
app.use(cors());

//Declaring Middlewares
// const bookInventoryRoutes = require("./routes/book");
// const HttpError = require("./models/http-error");

//To parse any request that has a body
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());

//Adding Middlewares to app
// app.use("/api/inventory", bookInventoryRoutes);

//Maybe to remove
//Throws error if route doesn't exist
app.use(() => {
  throw new HttpError("Could not find this route", 404);
});

// This is a function that executes when there is an error somewhere in the middlewares above
app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }

  //To check if the headers have been sent
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured" });
});

//Connection to db
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.0mxtkv3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => {
    app.listen(process.env.PORT || 5007);
    console.log("started!!");
  })
  .catch((err) => {
    console.log(err);
  });

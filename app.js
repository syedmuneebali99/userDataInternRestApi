require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4000 || process.env.PORT;

const URI = `mongodb+srv://${process.env.USER_NAME}:${process.env.DB_PASSWORD}@cluster0.26gu3.mongodb.net/userData`;

const userRoute = require("./routes/route.js");

app.use(express.json());

app.use(userRoute);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to the database");
    app.listen(port, () => {
      console.log("server started at port : " + port);
    });
  })
  .catch((err) => console.log(err));

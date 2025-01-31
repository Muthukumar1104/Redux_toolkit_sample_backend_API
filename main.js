require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require('./dbconfig/dbconfig')

connectDB();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Success!");
});

const port = process.env.PORT || 5000;

app.use('/api',require('./routes/index-routes'))

app.listen(port, (req, res) => {
  console.log(`Application listening on ${port}`);
});

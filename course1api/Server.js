
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();  
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/course1", {
  useNewUrlParser: true,
})
  .then((result) => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log("Db not connected");
  });


app.use("/api", require("./src/routes/courseRoutes"));
app.use("/api", require("./src/routes/auth"))


app.listen(5000, () => {
  console.log("Server Started");
});

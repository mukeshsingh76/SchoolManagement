// importing modules
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();
const port = 3000;
const route = require("./routes/route");

mongoose.connect("mongodb://localhost:27017/studentmanagement");
mongoose.connection.on("connected", () => {
  console.log("Connected successfully");
});
mongoose.connection.on("error", err => {
  if (err) {
    console.log("Error in database connection : " + err);
  }
});

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", route);

app.get("/", (req, res) => {
  res.send("football");
});

app.listen(port, () => {
  console.log("Server started at port: " + port);
});

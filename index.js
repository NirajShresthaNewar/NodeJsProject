const express = require("express");
const {newFunc}= require("./evenNumbers");
const {testfunction}= require("./testController");
const app = express();
const db=require("./model/index")
// const { newFunc } = require("./controllers/even");

app.get("/", (req, res) => {
  res.json({
    message: "hello world from / route",
  });
});
db.sequelize.sync({force:false})
app.use("/about", newFunc);
app.get("/test", testfunction);

// app.get("/even", newFunc);
let PORT = 5000;

app.listen(PORT, () => {
  console.log(`project started at port ${PORT}`)}
);
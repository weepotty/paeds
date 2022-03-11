const express = require("express");

const app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/wetflags", (req, res) => {
  res.render("wetflags");
});

app.get("/fluids", (req, res) => {
  res.render("fluids");
});

app.get("/emergencies", (req, res) => {
  res.render("emergencies");
});

app.get("/airway", (req, res) => {
  res.render("airway");
});

app.get("/perioperative", (req, res) => {
  res.render("perioperative");
});
app.listen(3000, function () {
  console.log("server started on port 3000");
});

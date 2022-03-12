const express = require("express");
const PORT = process.env.PORT || 5000;

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



app.get("/pain", (req, res) => {
  res.render("pain");
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

app.listen(PORT, () => console.log(`Listening on ${PORT}`));


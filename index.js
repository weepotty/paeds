const express = require("express");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");

const app = express();

// const doses = {
//   midazbuccal: 0.3,
//   midazoral: 0.5,
//   dexmed: 3
//   }
  

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});


// app.post("/", function(req, res){
//   const weight = req.body.weight;
//   // const age = req.body.age;
   
//   for (let drug in doses) {
//     if (doses.hasOwnProperty(drug)) {
//       doses[drug] *= weight;
//     }
//   }
// console.log(doses.midazbuccal)

//  res.redirect("/");
//   });


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

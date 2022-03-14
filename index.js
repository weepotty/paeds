const express = require("express");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");

const app = express();

const child=[]
// const doses = {
//   midazb: 0.3,
//   midazo: 0.5,
//   dexmed: 3
//   }
  
const premeds = [
{name: "Midazolam (buccal)", dose: 0.3, units: "mg", max: 10},
{name: "Midazolam (oral)", dose: 0.5, units: "mg", max: 20},
{name: "Dexmedetomidine", dose: 2, units: "mcg"},
]

const inductionDrugs = [
{name: "Propofol 2%", dose: 3, units: "mg", concentration: 20},
{name: "Ketamine (IV)", dose: 2, units: "mg", concentration: 10},
{name: "Rocuronium (normal)", dose: 0.6, units: "mg", concentration: 10},
{name: "Rocuronium (RSI)", dose: 1, units: "mg", concentration: 10},
{name: "Neostig/Glyco", dose: 0.02, units: "ml", max: 1}
]

const emergencyDrugs = [
{name: "Suxamethonium (IV)", dose: 1, units: "mg", concentration: 100, max: 150},
{name: "Atropine", dose: 20, units: "mcg", concentration: 600, max:1200},
]

const antibiotics = [
{name: "Cefuroxime", dose: 50, units: "mg", max: 1500},
{name: "Co-amoxiclav", dose: 30, units: "mg", max: 1200},
{name: "Metronidazole", dose: 7.5, units: "mg", max: 500},
{name: "Gentamicin (3mg/kg)", dose: 3, units: "mg"},

]

const titles = {
  cheatsheet: "Cheatsheet",
  protocols: "Protocols",
  induction: "Induction"
}



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));



app.get("/", function (req, res) {
  res.render("home", {child, antibiotics, premeds, inductionDrugs, emergencyDrugs, title: titles.cheatsheet})
})


app.post("/", function(req, res){
  const {weight, age} = req.body;
  // const weight = req.body.weight;
  // age = req.body.age
  child.push({weight,age});
  let weightNum=parseFloat(weight);




// pdf links
  app.get("/pdfs/cardiac-arr.pdf", function(req, res){
    var tempFile="pdfs/cardiac-arr.pdf";
    fs.readFile(tempFile, function (err,data){
       res.contentType("application/pdf");
       res.send(data);
    });
  });

  app.get("/pdfs/ALSfull.pdf", function(req, res){
    var tempFile="pdfs/ALSfull.pdf";
    fs.readFile(tempFile, function (err,data){
       res.contentType("application/pdf");
       res.send(data);
    });
  });

  app.get("/pdfs/LA-tox.pdf", function(req, res){
    var tempFile="pdfs/LA-tox.pdf";
    fs.readFile(tempFile, function (err,data){
       res.contentType("application/pdf");
       res.send(data);
    });
  });

  app.get("/pdfs/premed-dex.pdf", function(req, res){
    var tempFile="pdfs/premed-dex.pdf";
    fs.readFile(tempFile, function (err,data){
       res.contentType("application/pdf");
       res.send(data);
    });
  });

  app.get("/pdfs/appendicectomy.pdf", function(req, res){
    var tempFile="appendicectomy.pdf";
    fs.readFile(tempFile, function (err,data){
       res.contentType("application/pdf");
       res.send(data);
    });
  });

  app.get("/pdfs/cortisol.pdf", function(req, res){
    var tempFile="cortisol.pdf";
    fs.readFile(tempFile, function (err,data){
       res.contentType("application/pdf");
       res.send(data);
    });
  });
  app.get("/pdfs/diabetes.pdf", function(req, res){
    var tempFile="diabetes.pdf";
    fs.readFile(tempFile, function (err,data){
       res.contentType("application/pdf");
       res.send(data);
    });
  });

  app.get("/pdfs/potassium.pdf", function(req, res){
    var tempFile="potassium.pdf";
    fs.readFile(tempFile, function (err,data){
       res.contentType("application/pdf");
       res.send(data);
    });
  });
  app.get("/pdfs/VTE.pdf", function(req, res){
    var tempFile="VTE.pdf";
    fs.readFile(tempFile, function (err,data){
       res.contentType("application/pdf");
       res.send(data);
    });
  });


//drug calculator code

  antibiotics.forEach(abx => {
    abx['amount'] = abx['dose'] * weightNum
  });
  
  premeds.forEach(premed => {
    premed['amount'] = premed['dose'] * weightNum
  });

  emergencyDrugs.forEach(edrug => {
    edrug['amount'] = edrug['dose'] * weightNum;
    edrug['volume'] = (edrug['amount'] / edrug['concentration']).toFixed(2);
    edrug['maxvolume'] = Math.floor(edrug['max']/edrug['concentration']);
  });

  inductionDrugs.forEach(idrug => {
    idrug['amount'] = idrug['dose'] * weightNum;
    idrug['volume'] = (idrug['amount'] / idrug['concentration']).toFixed(2);
    idrug['maxvolume'] = Math.floor(idrug['max']/idrug['concentration']);
})
 res.redirect("/");
  });



 
app.get("/wetflags", (req, res) => {
  res.render("wetflags", {title: titles.cheatsheet});
});

app.get("/fluids", (req, res) => {
  res.render("fluids", {title: titles.cheatsheet});
});


app.get("/pain", (req, res) => {
  res.render("pain", {title: titles.protocols});
});

app.get("/emergencies", (req, res) => {
  res.render("emergencies", {title: titles.protocols});
});

app.get("/airway", (req, res) => {
  res.render("airway", {title: titles.cheatsheet});
});

app.get("/perioperative", (req, res) => {
  res.render("perioperative", {title: titles.protocols});
});


app.listen(PORT, () => console.log(`Listening on ${PORT}`));

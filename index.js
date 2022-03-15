const express = require("express");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");

const app = express();

const child=[{weight: "?", age: "?"}]


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

const antiemetics = [
  {name: "Ondansetron", dose: 0.15, units: "mg", max: 8, concentration: 2},
  {name: "Dexamethasone", dose: 0.15, units: "mg", max: 10, concentration: 4},

  ]


const painkillers = [
  {name: "Paracetamol IV", dose: 15, units: "mg", max: 1000, concentration: 10, freq: "4-6 hrly, max QDS"},
  {name: "Ibuprofen PO", dose: 10, units: "mg", freq: "6 hrly, max TDS", max: 400},
  {name: "Diclofenac PO/PR", dose: 1, units: "mg", freq: "8 hrly", max: 50},

  ]

const titles = {
  cheatsheet: "Cheatsheet",
  protocols: "Protocols",
  induction: "Induction",
  contact: "Contact"
}




app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));




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

app.get("/pdfs/trainee-starter-pack.pdf", function(req, res){
  var tempFile="trainee-starter-pack.pdf";
  fs.readFile(tempFile, function (err,data){
     res.contentType("application/pdf");
     res.send(data);
  });
});

app.get("/pdfs/morphine.pdf", function(req, res){
  var tempFile="morphine.pdf";
  fs.readFile(tempFile, function (err,data){
     res.contentType("application/pdf");
     res.send(data);
  });
});

app.get("/pdfs/PCA-NCA.pdf", function(req, res){
  var tempFile="PCA-NCA.pdf";
  fs.readFile(tempFile, function (err,data){
     res.contentType("application/pdf");
     res.send(data);
  });
});

app.get("/pdfs/fractures.pdf", function(req, res){
  var tempFile="fractures.pdf";
  fs.readFile(tempFile, function (err,data){
     res.contentType("application/pdf");
     res.send(data);
  });
});

app.get("/pdfs/LA-infusion.pdf", function(req, res){
  var tempFile="LA-infusion.pdf";
  fs.readFile(tempFile, function (err,data){
     res.contentType("application/pdf");
     res.send(data);
  });
});

app.get("/pdfs/epidural.pdf", function(req, res){
  var tempFile="epidural.pdf";
  fs.readFile(tempFile, function (err,data){
     res.contentType("application/pdf");
     res.send(data);
  });
});

app.get("/pdfs/ppt-feb-22.pdf", function(req, res){
  var tempFile="ppt-feb-22.pdf";
  fs.readFile(tempFile, function (err,data){
     res.contentType("application/pdf");
     res.send(data);
  });
});

app.get("/pdfs/ppt-nov-21.pdf", function(req, res){
  var tempFile="ppt-nov-21.pdf";
  fs.readFile(tempFile, function (err,data){
     res.contentType("application/pdf");
     res.send(data);
  });
});


app.get("/", function (req, res) {
  let weight = (parseInt(child[child.length - 1].weight))
  let age = (parseInt(child[child.length-1].age))
 

  res.render("home", {child, antibiotics, premeds, inductionDrugs, emergencyDrugs, antiemetics, painkillers, title: titles.cheatsheet, weight, age})
})


app.post("/", function(req, res){
  const {weight, age} = req.body;
  // const weight = req.body.weight;
  // const age = req.body.age
  child.push({weight,age});
  let weightNum=parseFloat(weight);
  

//drug calculator code

  antibiotics.forEach(abx => {
    abx['amount'] = abx['dose'] * weightNum
    if (abx['amount'] > abx['max']) {
      abx['amount'] = abx['max']
    } else {
      abx['amount'] = abx['amount']
    }
  });
  
  premeds.forEach(premed => {
    premed['amount'] = (premed['dose'] * weightNum)

  
    if (premed['amount'] > premed['max']) {
      premed['amount'] = premed['max']
    } else {
      premed['amount'] = parseFloat(premed['amount'].toFixed(2));
    }
  });

  emergencyDrugs.forEach(edrug => {
    edrug['amount'] = parseFloat((edrug['dose'] * weightNum).toFixed(2));
    edrug['volume'] = parseFloat((edrug['amount'] / edrug['concentration']).toFixed(2));
    edrug['maxvolume'] = parseFloat(Math.floor(edrug['max']/edrug['concentration']));

    if (edrug['amount'] > edrug['max']) {
      edrug['amount'] = edrug['max']
      edrug['volume'] = edrug['maxvolume']
    } 
    
    else  {
      edrug['amount'] = edrug['dose'] * weightNum
      edrug['volume'] = edrug['volume']
    }
  });

  inductionDrugs.forEach(idrug => {
    idrug['amount'] = parseFloat((idrug['dose'] * weightNum).toFixed(2));
    idrug['volume'] = parseFloat((idrug['amount'] / idrug['concentration']).toFixed(2));
    idrug['maxvolume'] = Math.floor(idrug['max']/idrug['concentration']);

    if (isNaN(idrug['volume'])) {
      idrug['volume'] = idrug['amount']
    }

   else if (idrug['amount'] > idrug['max']) {
      idrug['amount'] = idrug['max']
      idrug['volume'] = idrug['maxvolume']
    } else {
      idrug['amount'] = idrug['amount']
      idrug['volume'] = idrug['volume'] 
    }
});

antiemetics.forEach(antiemetic => {
  antiemetic['amount'] = parseFloat((antiemetic['dose'] * weightNum).toFixed(2));
  antiemetic['volume'] = parseFloat((antiemetic['amount'] / antiemetic['concentration']).toFixed(2));
  antiemetic['maxvolume'] = Math.floor(antiemetic['max']/antiemetic['concentration']);


  if (antiemetic['amount'] > antiemetic['max']) {
    antiemetic['amount'] = antiemetic['max']
    antiemetic['volume'] = antiemetic['maxvolume']
  } else {
    antiemetic['amount'] = antiemetic['amount']
    antiemetic['volume'] = antiemetic['volume'];
  }
});

painkillers.forEach(painkiller => {
  painkiller['amount'] = parseFloat((painkiller['dose'] * weightNum).toFixed(2));
  painkiller['volume'] = parseFloat((painkiller['amount'] / painkiller['concentration']).toFixed(2));
  painkiller['maxvolume'] = Math.floor(painkiller['max']/painkiller['concentration']);
 

if (weightNum < 10) {
  painkiller['amount'] = painkiller['amount']/2;
}

else if (painkiller['amount'] > painkiller['max']) {
  painkiller['amount'] = painkiller['max']
  painkiller['volume'] = painkiller['maxvolume']

} else if (weightNum > 50) {
  painkiller['amount'] = painkiller['max'] 
  painkiller['volume']=painkiller['maxvolume']
}

   else {
    painkiller['amount'] = painkiller['amount']
    painkiller['volume'] = painkiller['volume']
  }

  if (isNaN(painkiller['volume'])) {
    painkiller['volume'] = " "
  }
  else {
    painkiller['volume'] = painkiller['volume']

  }
});


 res.redirect("/");
  });


app.get("/wetflag", (req, res) => {
let weight = (parseInt(child[child.length - 1].weight))
let age = (parseInt(child[child.length-1].age))
const parameters = [
  {name: "Weight", formula:(age+4)*2, units: "kg"},
  {name: "Energy", formula:weight * 4, units: "J"}, 
  {name: "Tube size (uncuffed)", formula: age/4+4, units: " "},
  {name: "Tube length (oral)", formula: age/2+12, units: "cm"},
  {name: "Tube length (nasal)", formula: age/2+15, units: "cm"},
  {name: "Fluid (medical)", formula: 20*weight,units: "ml"},
  {name: "Fluid (trauma)", formula: 10*weight, units: "ml"},
  {name: "Lorazepam", formula:0.1*weight, units: "mg"},
  {name: "Adrenaline 1:10 000 IV", formula:0.1*weight, units: "ml"},
  {name: "Glucose 10%", formula: 2*weight, units: "ml"}
]

parameters.forEach (parameter => {
  parameter['formula'] = parseFloat((parameter['formula']).toFixed(1))

  if (isNaN(parameter['formula'])) {
    parameter['formula']=" "
  
} else {
  parameter['formula']=parameter['formula']
}
} )



  res.render("wetflag", {child, title: titles.cheatsheet, age, weight, parameters});
});


app.get("/airway", (req, res) => {
  let weight = (parseInt(child[child.length - 1].weight))
  let age = (parseInt(child[child.length-1].age))
  
  const airwayDevices = [
    {name: "ETT microcuffed", formula: age/4+4, units:" "},
    {name: "Tube length, oral", formula: age/2+12, units:"cm"},
    {name: "Tube length, nasal", formula: age/2+15, units:"cm"},
    {name: "LMA size"}
  ]
  
  switch (true) {
    case (weight < 5): airwayDevices[3].formula = 1
    break
    case (5 <= weight &&  weight < 10): airwayDevices[3].formula = 1.5
    break;
    case (10 <= weight &&  weight < 20): airwayDevices[3].formula = 2
 break;
 case (20 <= weight &&  weight < 30): airwayDevices[3].formula = 2.5
 break;
 case (30 <= weight &&  weight < 40): airwayDevices[3].formula = 3
 break;
 case (40 <= weight &&  weight < 50): airwayDevices[3].formula = 4
 break;
 case (50 <= weight &&  weight <= 100): airwayDevices[3].formula = 5
 break;

default: airwayDevices[3].formula="cannot compute, please re-enter weight"
  }

  airwayDevices.forEach(device => {
    if (isNaN(device['formula'])) {
      device['formula']=" "
    
  } else {
    device['formula']=device['formula']
  }
})

let maintenanceFluid = 0
switch (true) {
  case (weight <= 10): maintenanceFluid = weight * 4
  break
  case (10 < weight &&  weight <= 20): maintenanceFluid = 40 + (weight-10) * 2
  break;
  case (20 < weight): maintenanceFluid = 60 + (weight-20)
break;

default: maintenanceFluid="please re-enter weight"
}


let twoThirds = parseFloat((maintenanceFluid/3*2).toFixed(1))
if (isNaN(twoThirds)) {
  twoThirds = "please re-enter weight"
} else {
  twoThirds=parseFloat(twoThirds.toFixed(1))
}
  res.render("airway", {airwayDevices, child, weight, maintenanceFluid, twoThirds, age, title: titles.cheatsheet});
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


app.get("/perioperative", (req, res) => {
  res.render("perioperative", {title: titles.protocols});
});

app.get("/starterpack", (req, res) => {
  res.render("starterpack", {title: titles.induction});
});

app.get("/powerpoints", (req, res) => {
  res.render("powerpoints", {title: titles.induction});
});

app.get("/contact", (req, res) => {

res.render("contact", {title:titles.contact})

})

app.post("/contact", function(req, res){
res.send("thank you, your form has been submitted")

  res.redirect("/")})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

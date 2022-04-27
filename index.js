// if (process.env.NODE_ENV == "production") {
//   require("dotenv").config()};

const express = require("express");
const PORT = process.env.PORT || 5000;
const nodemailer = require('nodemailer')
const bodyParser=require('body-parser')
const app = express();
// const User = require ('./models/user')
// const mongoose = require("mongoose");
const {google} = require('googleapis')
const OAuth2 = google.auth.OAuth2;
const config = require('./config.js')
const OAuth2_client = new OAuth2(config.clientId, config.clientSecret)
// const bcrypt = require("bcryptjs");
// const session = require ('express-session')
// const inductionPwd = process.env.PASSWORD


OAuth2_client.setCredentials({refresh_token:config.refreshToken})

const child = [{ weight: "?", age: "?", months: "?" }];

const premeds = [
  { name: "Midazolam (buccal)", dose: 0.3, units: "mg", max: 10 },
  { name: "Midazolam (oral)", dose: 0.5, units: "mg", max: 20 },
  { name: "Dexmedetomidine (intranasal)", dose: 2, units: "mcg *", max: 200 },
];

const inductionDrugs = [
  { name: "Propofol 1%", dose: 3, units: "mg", concentration: 10 },
  { name: "Ketamine 10mg/ml", dose: 2.5, units: "mg", concentration: 10 },
  { name: "Rocuronium (normal)", dose: 0.6, units: "mg", concentration: 10 },
  { name: "Rocuronium (RSI)", dose: 1, units: "mg", concentration: 10 },
  { name: "Neostig/Glyco", dose: 0.02, units: "ml", max: 1 },
];

const emergencyDrugs = [
  {
    name: "Suxamethonium (IV)",
    dose: 1,
    units: "mg",
    concentration: 50,
    max: 150,
  },
  { name: "Atropine", dose: 20, units: "mcg", concentration: 600, max: 600 },
];

const antibiotics = [
  { name: "Cefuroxime", dose: 50, units: "mg", max: 1500 },
  { name: "Co-amoxiclav", dose: 30, units: "mg", max: 1200 },
  { name: "Metronidazole", dose: 7.5, units: "mg", max: 500 },
  { name: "Gentamicin (3mg/kg)", dose: 3, units: "mg" },
];

const antiemetics = [
  { name: "Ondansetron", dose: 0.15, units: "mg", max: 4, concentration: 2 },
  { name: "Dexamethasone", dose: 0.15, units: "mg", max: 6.6, concentration: 3.3 },
];

const painkillers = [
  {
    name: "Paracetamol IV",
    dose: 15,
    units: "mg",
    max: 1000,
    concentration: 10,
    freq: "4-6 hrly, max QDS",
  },
  {
    name: "Ibuprofen PO",
    dose: 10,
    units: "mg",
    freq: "6-8hrly",
    max: 400,
  },
  { name: "Diclofenac PO/PR", dose: 1, units: "mg", freq: "8 hrly", max: 50 },
];

const titles = {
  cheatsheet: "Cheatsheet",
  guidelines: "Guidelines",
  induction: "Induction",
  contact: "Contact",
  formulae: "Formulae",
};


// async function main() {
//   // await mongoose.connect("mongodb://localhost:27017/authDemo");
//   await mongoose.connect(dbUrl)
// }

// main().catch((err) => console.log(err, "MONGOOSE ERROR"));

// main().then(() => {
//   console.log("MONGO CONNECTION OPEN");
// });



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(express.json())
// app.use(session({secret:'notagoodsecret',
// resave: false,
//     saveUninitialized: true
// }))

// const requireLogin = (req, res, next) => {

// if (!req.session.user_id) {
//   return res.redirect('/login')
// }
// next();
// }

const checkPassword = (req, res, next) => {
  const {password} = req.body;
if (password === 'paedspassword') {
next()
}
else {
  res.redirect('/login')
}

}
const checkPassword2 = (req, res, next) => {
  const {password} = req.body;
if (password === 'paedspassword') {
next()
}
else {
  res.redirect('/login2')
}

}

// pdf links
app.get("/pdfs/cardiac-arr.pdf", function (req, res) {
  var tempFile = "pdfs/cardiac-arr.pdf";
  fs.readFile(tempFile, function (err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});

app.get("/pdfs/ALSfull.pdf", function (req, res) {
  var tempFile = "pdfs/ALSfull.pdf";
  fs.readFile(tempFile, function (err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});

app.get("/pdfs/LA-tox.pdf", function (req, res) {
  var tempFile = "pdfs/LA-tox.pdf";
  fs.readFile(tempFile, function (err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});

app.get("/pdfs/premed-dex.pdf", function (req, res) {
  var tempFile = "pdfs/premed-dex.pdf";
  fs.readFile(tempFile, function (err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});

app.get("/pdfs/appendicectomy.pdf", function (req, res) {
  var tempFile = "appendicectomy.pdf";
  fs.readFile(tempFile, function (err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});

app.get("/pdfs/cortisol.pdf", function (req, res) {
  var tempFile = "cortisol.pdf";
  fs.readFile(tempFile, function (err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});
app.get("/pdfs/diabetes.pdf", function (req, res) {
  var tempFile = "diabetes.pdf";
  fs.readFile(tempFile, function (err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});

app.get("/pdfs/potassium.pdf", function (req, res) {
  var tempFile = "potassium.pdf";
  fs.readFile(tempFile, function (err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});
app.get("/pdfs/VTE.pdf", function (req, res) {
  var tempFile = "VTE.pdf";
  fs.readFile(tempFile, function (err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});

app.get("/pdfs/trainee-starter-pack.pdf", function (req, res) {
  var tempFile = "trainee-starter-pack.pdf";
  fs.readFile(tempFile, function (err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});

app.get("/pdfs/morphine.pdf", function (req, res) {
  var tempFile = "morphine.pdf";
  fs.readFile(tempFile, function (err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});

app.get("/pdfs/PCA-NCA.pdf", function (req, res) {
  var tempFile = "PCA-NCA.pdf";
  fs.readFile(tempFile, function (err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});

app.get("/pdfs/fractures.pdf", function (req, res) {
  var tempFile = "fractures.pdf";
  fs.readFile(tempFile, function (err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});

app.get("/pdfs/LA-infusion.pdf", function (req, res) {
  var tempFile = "LA-infusion.pdf";
  fs.readFile(tempFile, function (err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});

app.get("/pdfs/epidural.pdf", function (req, res) {
  var tempFile = "epidural.pdf";
  fs.readFile(tempFile, function (err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});

app.get("/pdfs/ppt-feb-22.pdf", function (req, res) {
  var tempFile = "ppt-feb-22.pdf";
  fs.readFile(tempFile, function (err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});

app.get("/pdfs/ppt-nov-21.pdf", function (req, res) {
  var tempFile = "ppt-nov-21.pdf";
  fs.readFile(tempFile, function (err, data) {
    res.contentType("application/pdf");
    res.send(data);
  });
});

// creating password


// app.get('/register', (req, res) => {
// res.render('register')
// })

// app.post("/register", async (req, res) => {

//   const {password} = req.body;
//   const hash = await bcrypt.hash(password, 12)
//   const user = new User({password:hash})
//   await user.save()
// req.session.user_id = user._id;
//   res.redirect('/')
// })


app.get('/login', (req, res) => {
  res.render('login', { title: titles.contact })
})

app.get('/login2', (req, res) => {
  res.render('login2', { title: titles.contact })
})
// app.post('/login', async (req, res) => {
//   const {password} = req.body;
//   const user = await User.findOne();
//   const validPassword = await bcrypt.compare(password, user.password)
//   if (validPassword) {
//     req.session.user_id = user._id;
//     res.redirect('/starterpack')
//   }
//   else {
//     res.send('wrong password please try again')
//   }
// })


app.post('/login', (req, res) => {
  const {password} = req.body;

  if (password === 'paedspassword') {

    res.render('starterpack', { title: titles.induction })
  }
  else {
    res.send('wrong password please try again')
  }
})

app.post('/login2', (req, res) => {
  const {password} = req.body;

  if (password === 'paedspassword') {

    res.render('powerpoints', { title: titles.induction })
  }
  else {
    res.send('wrong password please try again')
  }
})


app.get("/", function (req, res) {
  let weight = parseFloat(child[child.length - 1].weight);
  let age = parseFloat(child[child.length - 1].age);
  let months = parseFloat(child[child.length - 1].months);
  let currentPage = req.url;

  res.render("home", {
    child,
    currentPage,
    antibiotics,
    premeds,
    inductionDrugs,
    emergencyDrugs,
    antiemetics,
    painkillers,
    title: titles.cheatsheet,
    weight,
    age,
    months,
  });
});

app.post("/", function (req, res) {
  const { weight, age, months } = req.body;
  // const weight = req.body.weight;
  // const age = req.body.age
  child.push({ weight, age, months });

  //drug calculator code

  antibiotics.forEach((abx) => {
    abx["amount"] = abx["dose"] * weight;
    if (abx["amount"] > abx["max"]) {
      abx["amount"] = abx["max"];
    } else {
      abx["amount"] = Math.floor(abx["amount"]);
    }
  });

  premeds.forEach((premed) => {
    premed["amount"] = premed["dose"] * weight;

    if (premed["amount"] > premed["max"]) {
      premed["amount"] = premed["max"];
    } else {
      premed["amount"] = parseFloat(premed["amount"].toFixed(2));
    }
  });

  emergencyDrugs.forEach((edrug) => {
    edrug["amount"] = parseFloat((edrug["dose"] * weight).toFixed(2));
    edrug["volume"] = parseFloat(
      (edrug["amount"] / edrug["concentration"]).toFixed(2)
    );
    edrug["maxvolume"] = parseFloat(
      Math.floor(edrug["max"] / edrug["concentration"])
    );

    if (edrug["amount"] > edrug["max"]) {
      edrug["amount"] = edrug["max"];
      edrug["volume"] = edrug["maxvolume"];
    } else {
      edrug["amount"] = edrug["dose"] * weight;
      edrug["volume"] = edrug["volume"];
    }
  });

  inductionDrugs.forEach((idrug) => {
    idrug["amount"] = parseFloat((idrug["dose"] * weight).toFixed(2));
    idrug["volume"] = parseFloat(
      (idrug["amount"] / idrug["concentration"]).toFixed(2)
    );
    idrug["maxvolume"] = Math.floor(idrug["max"] / idrug["concentration"]);

    if (isNaN(idrug["volume"])) {
      idrug["volume"] = idrug["amount"];
    } else if (idrug["amount"] > idrug["max"]) {
      idrug["amount"] = idrug["max"];
      idrug["volume"] = idrug["maxvolume"];
    } else {
      idrug["amount"] = idrug["amount"];
      idrug["volume"] = idrug["volume"];
    }
  });

  antiemetics.forEach((antiemetic) => {
    antiemetic["amount"] = parseFloat((antiemetic["dose"] * weight).toFixed(2));
    antiemetic["volume"] = parseFloat(
      (antiemetic["amount"] / antiemetic["concentration"]).toFixed(2)
    );
    antiemetic["maxvolume"] = Math.floor(
      antiemetic["max"] / antiemetic["concentration"]
    );

    if (antiemetic["amount"] > antiemetic["max"]) {
      antiemetic["amount"] = antiemetic["max"];
      antiemetic["volume"] = antiemetic["maxvolume"];
    } else {
      antiemetic["amount"] = antiemetic["amount"];
      antiemetic["volume"] = antiemetic["volume"];
    }
  });

  painkillers.forEach((painkiller) => {
    painkiller["amount"] = parseFloat((painkiller["dose"] * weight).toFixed(2));
    painkiller["volume"] = parseFloat(
      (painkiller["amount"] / painkiller["concentration"]).toFixed(2)
    );
    painkiller["maxvolume"] = Math.floor(
      painkiller["max"] / painkiller["concentration"]
    );

    if (weight < 10) {
      painkiller["amount"] = painkiller["amount"] / 2;
    } else if (painkiller["amount"] > painkiller["max"]) {
      painkiller["amount"] = painkiller["max"];
      painkiller["volume"] = painkiller["maxvolume"];
    } else if (weight > 50) {
      painkiller["amount"] = painkiller["max"];
      painkiller["volume"] = painkiller["maxvolume"];
    } else {
      painkiller["amount"] = painkiller["amount"];
      painkiller["volume"] = painkiller["volume"];
    }

    if (isNaN(painkiller["volume"])) {
      painkiller["volume"] = " ";
    } else {
      painkiller["volume"] = painkiller["volume"];
    }
  });

  res.redirect("/");
});

app.post("/wetflag", (req, res) => {
  const { weight, age, months } = req.body;
  // const weight = req.body.weight;
  // const age = req.body.age
  child.push({ weight, age, months });
  res.redirect("/wetflag");
});

app.get("/wetflag", (req, res) => {
  let weight = parseInt(child[child.length - 1].weight);
  let age = parseInt(child[child.length - 1].age);
  let months = parseInt(child[child.length - 1].months);
  const parameters = [
    { name: "Weight", formula: (age + 4) * 2, units: "kg" },
    { name: "Energy", formula: weight * 4, units: "J" },
    { name: "Tube size (uncuffed)", formula: age / 4 + 4, units: "mm (ID)" },
    { name: "Tube length (oral)", formula: age / 2 + 12, units: "cm" },
    { name: "Tube length (nasal)", formula: age / 2 + 15, units: "cm" },
    { name: "Fluid (medical)", formula: 20 * weight, units: "ml" },
    { name: "Fluid (trauma)", formula: 10 * weight, units: "ml" },
    { name: "Lorazepam", formula: 0.1 * weight, units: "mg" },
    { name: "Adrenaline 1:10 000 IV", formula: 0.1 * weight, units: "ml" },
    { name: "Glucose 10%", formula: 2 * weight, units: "ml" },
  ];

  parameters.forEach((parameter) => {
    parameter["formula"] = parseFloat(parameter["formula"].toFixed(1));

    if (isNaN(parameter["formula"])) {
      parameter["formula"] = " ";
    } else {
      parameter["formula"] = parameter["formula"];
    }
  });
  let currentPage = req.url;
  res.render("wetflag", {
    currentPage,
    child,
    title: titles.cheatsheet,
    age,
    weight,
    months,
    parameters,
  });
});

app.post("/airway", (req, res) => {
  const { weight, age, months } = req.body;
  // const weight = req.body.weight;
  // const age = req.body.age
  child.push({ weight, age, months });
  res.redirect("/airway");
});

app.get("/airway", (req, res) => {
  let weight = parseInt(child[child.length - 1].weight);
  let age = parseInt(child[child.length - 1].age);
  let months = parseInt(child[child.length - 1].months);

  const observations = [
    { name: "RR", value: parseFloat(24 - age / 2), units: "breaths/min" },
    { name: "Tidal volume (6ml/kg)", value: 6 * weight, units: "ml" },
  ];

  const airwayDevices = [
    { name: "ETT microcuffed", formula: age / 4 + 3.5, units: "mm (ID)" },
    { name: "Tube length, oral", formula: age / 2 + 12, units: "cm" },
    { name: "Tube length, nasal", formula: age / 2 + 15, units: "cm" },
    { name: "LMA size" },
  ];

  observations.forEach((observation) => {
    if (isNaN(observation["value"])) {
      observation["value"] = " ";
    } else {
      observation["value"] = observation["value"];
    }
  });

  switch (true) {
    case weight < 5:
      airwayDevices[3].formula = 1;
      break;
    case 5 <= weight && weight < 10:
      airwayDevices[3].formula = 1.5;
      break;
    case 10 <= weight && weight < 20:
      airwayDevices[3].formula = 2;
      break;
    case 20 <= weight && weight < 30:
      airwayDevices[3].formula = 2.5;
      break;
    case 30 <= weight && weight < 40:
      airwayDevices[3].formula = 3;
      break;
    case 40 <= weight && weight < 50:
      airwayDevices[3].formula = 4;
      break;
    case 50 <= weight && weight <= 100:
      airwayDevices[3].formula = 5;
      break;

    default:
      airwayDevices[3].formula = "cannot compute, please re-enter weight";
  }

  airwayDevices.forEach((device) => {
    if (isNaN(device["formula"])) {
      device["formula"] = " ";
    } else {
      device["formula"] = device["formula"];
    }
  });


  // microcuff ETT izing

  switch (true) {
    case weight < 3:
      airwayDevices[0].formula = 'not recommended <3kg'
      break;
    case age ===0 && months <8:
      airwayDevices[0].formula = 3.0
      break;
    case age ===0 && months >=8: 
      airwayDevices[0].formula = 3.5;
      break;

      case 1 <= age && age < 2:
        airwayDevices[0].formula = 3.5;
        break;
    case 2 <= age && age < 4:
      airwayDevices[0].formula = 4.0;
      break;

      case 4 <= age && age < 6:
      airwayDevices[0].formula = 4.5;
      break;
    
      case 6 <= age && age < 8:
      airwayDevices[0].formula = 5.0;
      break;

      case 8 <= age && age < 10:
      airwayDevices[0].formula = 5.5;
      break;

      case 10 <= age && age < 12:
      airwayDevices[0].formula = 6.0;
      break;

      case 12 <= age && age < 14:
      airwayDevices[0].formula = 6.5;
      break;

      case 14 <= age && age < 16:
      airwayDevices[0].formula = 7.0;
      break;
  }

  let maintenanceFluid = 0;
  switch (true) {
    case weight <= 10:
      maintenanceFluid = weight * 4;
      break;
    case 10 < weight && weight <= 20:
      maintenanceFluid = 40 + (weight - 10) * 2;
      break;
    case 20 < weight:
      maintenanceFluid = 60 + (weight - 20);
      break;

    default:
      maintenanceFluid = "enter weight";
  }

  let twoThirds = parseFloat(((maintenanceFluid / 3) * 2).toFixed(1));
  if (isNaN(twoThirds)) {
    twoThirds = "enter weight";
  } else {
    twoThirds = parseFloat(twoThirds.toFixed(1));
  }
  let currentPage = req.url;

  res.render("airway", {
    airwayDevices,
    currentPage,
    observations,
    child,
    months,
    weight,
    maintenanceFluid,
    twoThirds,
    age,
    title: titles.cheatsheet,
  });
});

app.get("/fluids", (req, res) => {
  res.render("fluids", { title: titles.cheatsheet });
});

app.get("/pain", (req, res) => {
  res.render("pain", { title: titles.guidelines });
});

app.get("/emergencies", (req, res) => {
  res.render("emergencies", { title: titles.guidelines });
});

app.get("/perioperative", (req, res) => {
  res.render("perioperative", { title: titles.guidelines });
});

app.get("/starterpack", checkPassword, (req, res) => {
  res.render("starterpack", { title: titles.induction });
});


app.get("/powerpoints", checkPassword2, (req, res) => {

  res.render("powerpoints", { title: titles.induction });
});


app.get("/contact", (req, res) => {
  res.render("contact", { title: titles.contact });
});

app.post("/contact", function (req, res) {
  console.log(req.body)
  const accessToken = OAuth2_client.getAccessToken()
  
  const mailOptions = {
    from: req.body.email,
    to: 'paedsinduction@gmail.com',
    subject: 'paeds induction',
    text: `name: ${req.body.name}
    email: ${req.body.email}
    message: ${req.body.message}`

  }

  const transporter = nodemailer.createTransport ({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: config.user,
      clientId: config.clientId,
      clientSecret: config.clientSecret,
      refreshToken: config.refreshToken,
      accessToken: accessToken,
    }
  })

  transporter.sendMail(mailOptions, (error, info)=>{
    if(error) {
      console.log(error)
      res.send('error')
    } else {
      console.log('Email sent: ' + info.response);
      res.send('success')
    }
    transporter.close()
 
  })
  

});

app.get("/formulae", (req, res) => {
  res.render("formulae", { title: titles.formulae });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));


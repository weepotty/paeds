
  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }


  });
 
 

const arrButtons = document.getElementsByClassName('arr-button')
const arrModal = document.getElementById('arr-modal')
const alsButtons = document.getElementsByClassName('als-button')
const alsModal = document.getElementById('als-modal')
const laToxButtons = document.getElementsByClassName('la-tox-button')
const laToxModal = document.getElementById('la-tox-modal')
const dexButtons = document.getElementsByClassName('dex-button')
const dexModal = document.getElementById('dex-modal')




for (let ab of arrButtons) {
  ab.addEventListener('click', () => {
  arrModal.classList.toggle('is-active')
})}

for (let als of alsButtons) {
  als.addEventListener('click', () => {
  alsModal.classList.toggle('is-active')
})}

for (let buttons of laToxButtons) {
  buttons.addEventListener('click', () => {
  laToxModal.classList.toggle('is-active')
})}

for (let buttons of dexButtons) {
  buttons.addEventListener('click', () => {
    dexModal.classList.toggle('is-active')
})}


const checkbox = document.getElementById('estimate') 
const knownWeight = document.getElementById('knownWeight')


checkbox.addEventListener('change', function() {
if (this.checked) {
  const knownAge = Number(document.getElementById('knownAge').value)
  if (knownAge > 0) {
    const estimatedWeight = (2*(knownAge + 4))
    knownWeight.value = estimatedWeight
    document.getElementById('knownAge').disabled=true
  } else {
  
    alert('enter age to estimate weight')
    this.checked = false
  }


} else{
  knownWeight.value=""
  document.getElementById('knownAge').disabled=false

}
})


 
 const childForm = document.getElementById("childForm")
 childForm.addEventListener('submit', getWeight())
 
 function getWeight (){
  let weight = Number(document.getElementById("weight").innerText);
  let age = Number(document.getElementById("age").innerText);
 
const estWeight = 2 * (age + 4)
const overweight = 1.5 * estWeight
const underweight = 0.5 * estWeight
if ((age > 0 && weight > overweight) || (age > 0 && weight < underweight)) {
  document.getElementById('warningWeight').classList.remove('is-hidden')
}


// if (months > 0) {
//   document.getElementById("monthsBanner").classList.remove("is-hidden")
//   // document.getElementById("monthsBanner").classList.add("is-hidden-tablet")
// } 

   if (weight <5 ) {
   document.getElementById("analgesia-instructions").innerHTML = "weight<5kg: discuss NCA morphine prescription with consultant"

  } else if (weight >=5 && weight < 50) {
    document.getElementById("analgesia-instructions").innerHTML = "NCA/PCA morphine protocol for <50kg"
    document.getElementById("under50").classList.toggle('is-hidden')
    
  } else if (weight >= 50){
    document.getElementById("analgesia-instructions").innerHTML = "NCA/PCA morphine protocol for ≥50kg"
    document.getElementById("over50").classList.toggle('is-hidden')

  } else {
    document.getElementById("analgesia-instructions").innerHTML = "enter weight to get NCA/PCA morphine protocol"
  }





let currentPatient = document.getElementById("currentPatient")
  let childInput = document.getElementById("childInput")
  // let childBanner = document.getElementById("childBanner")

  if (weight>0) {
childInput.classList.add("is-hidden")
currentPatient.classList.remove("is-hidden")
currentPatient.classList.add("is-hidden-mobile")
document.getElementById("newPatientPhone").classList.remove("is-hidden")
document.getElementById("newPatientPhone").classList.add("is-hidden-tablet")
// childBanner.classList.remove("is-hidden");
// childBanner.classList.add("is-hidden-tablet");

  }
 



  // if (age <1 && months <=1) {
  //   document.getElementById('warningAge').classList.remove('is-hidden')
  


}

 
 let newPatient = document.getElementById("newPatient")
newPatient.addEventListener('click', () => {
  childInput.classList.remove("is-hidden")
  currentPatient.classList.add("is-hidden")
  
})



let newPatientPhone = document.getElementById("newPatientPhone")
newPatientPhone.addEventListener('click', () =>  {
newPatientPhone.classList.add("is-hidden");
childInput.classList.remove("is-hidden");


})







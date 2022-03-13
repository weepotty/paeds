


const arrButtons = document.getElementsByClassName('arr-button')
const arrModal = document.getElementById('arr-modal')
const alsButtons = document.getElementsByClassName('als-button')
const alsModal = document.getElementById('als-modal')
const laToxButtons = document.getElementsByClassName('la-tox-button')
const laToxModal = document.getElementById('la-tox-modal')

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




// const doses = {
//   midazbuccal: 0.3,
//   midazoral: 0.5,
//   dexmed: 3
//   }

// function getWeight() {
//   return (document.getElementById("weight").value)
//   }

//   let getWeight = () => document.getElementById("weight").value

// // function amount(w,d){
// //   return w*d
// // }

// // let midazbDose = amount(weight,doses.midazbuccal)
  
// document.getElementById('test').innerHTML = getWeight()

//   for (let drug in doses) {
//         if (doses.hasOwnProperty(drug)) {
//           doses[drug] *= weight;
//         }
//       }









// title.innerHTML="WILL THIS WORK?"


 



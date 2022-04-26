
  const fullName = document.getElementById('name')
  const email = document.getElementById('email')
  const message = document.getElementById('message')

  const contactForm = document.getElementById('contactForm')
contactForm.addEventListener('submit', (e) => {
  console.log('button clicked')
  e.preventDefault()
  let formData = {
    name: fullName.value,
    email: email.value,
    message: message.value
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/contact');
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.onload = function (){
    console.log(xhr.responseText);
    if(xhr.responseText=='success'){
      alert('email sent');
      fullName.value = '';
      email.value='';
      message.value='';

    } else {
      alert('something went wrong!')
    }
  }


xhr.send(JSON.stringify(formData));

})
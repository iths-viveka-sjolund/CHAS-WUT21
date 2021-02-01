var namn = document.querySelector('.namn');
var email = document.querySelector('.email');
var sendbutton = document.querySelector('button');

var textName = document.querySelector('.namnText');
var textEmail = document.querySelector('.emailText');


sendbutton.addEventListener('click', validateForm);

function validateForm(event) {
    event.preventDefault()
  let formValidated = true;
  [textName, textEmail].forEach(errorText => {
    errorText.innerText = '';
  });

  if (namn.value.length < 3) {
    textName.innerText = 'Namnet måste vara minst tre bokstäver långt';
    formValidated = false;
    return;
  }
  if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    textEmail.innerText = 'Ange en giltig e-postadress';
    formValidated = false;
    return;
  }

  if (formValidated) {
    sendFeedback();
  }
}

function sendFeedback(){
      var thankYouHeader = document.getElementById('thankYou');
   thankYouHeader.innerText = 'Tack' + ' ' + namn.value + ', ' +'ditt meddelande har skickats.';

}

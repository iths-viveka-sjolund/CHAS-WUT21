function sendFeedback(event){
    event.preventDefault()
    
    var formData = event.srcElement;

   var thankYouHeader = document.getElementById("thankYou");
   thankYouHeader.innerText = "Tack" + " " + formData.name.value + ", " +"ditt meddelande har skickats.";

}

function applyCode() {
  var applyButton =   document.getElementById("applyBtn");
  applyButton.innerHTML ="APPLYING";
  setTimeout(function () {
    applyButton.innerHTML ="APPLIED" ;
  }, 5000);
  applyButton.disabled=true;
}


$('#SurpriseModal').on('hidden.bs.modal', function (event) {
  document.getElementById("testingBox").innerHTML= '<img src="./Assets/tarte.jpg" class="popOut-Image mx-auto d-block onFocus-tarte-box"><img src="./Assets/confetti.png" class="popOut-confetti-onChange mx-auto d-block">';
    document.getElementById("SurpriseBox6").innerHTML='<img src="./Assets/tarte.jpg" class=" onFocus-tarte-box rounded mx-auto d-block tarte-box" alt="6"><img src="./Assets/confetti.png" class="popOut-confetti-onChange-xs mx-auto d-block">';
})

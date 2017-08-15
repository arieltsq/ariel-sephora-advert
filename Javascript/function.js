
function applyCode() {
  var applyButton =   document.getElementById("applyBtn");
  applyButton.innerHTML ="APPLYING";
  setTimeout(function () {
    applyButton.innerHTML ="APPLIED" ;
  }, 5000);
  applyButton.disabled=true;
}


$('#SurpriseModal').on('hidden.bs.modal', function (event) {
  document.getElementById("heroMobileDiv").innerHTML= '<img src="./Images/tarte.jpg" class="popOut-Image mx-auto d-block onFocus-tarte-box"><img src="./Images/confetti.png" class="popOut-confetti-onChange mx-auto d-block">';
    document.getElementById("SurpriseBox6").innerHTML='<img src="./Images/tarte.jpg" class=" onFocus-tarte-box rounded mx-auto d-block tarte-box" alt="6"><img src="./Images/confetti.png" class="popOut-confetti-onChange-xs mx-auto d-block">';
})


$(function() {

if($(window).width() < 400) {
document.getElementById("footer-TextChange").innerHTML= '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>';
}
})


function applyCode() {
  var applyButton =   document.getElementById("applyBtn");
  applyButton.innerHTML ="APPLYING";
  setTimeout(function () {
    applyButton.innerHTML ="APPLIED" ;
  }, 5000);
  applyButton.disabled=true;
}


$('#SurpriseModal').on('hidden.bs.modal', function (event) {
  document.getElementById("testingBox").innerHTML= '<img src="./Assets/Popout.png" class="rounded mx-auto d-block hero-PopoutImage" alt="6" data-toggle="modal" data-target="#SurpriseModal">';
    document.getElementById("SurpriseBox6").innerHTML= '<img src="./Assets/Popout.png" class="rounded mx-auto d-block hero-PopoutImage" alt="6" data-toggle="modal" data-target="#SurpriseModal">';
})

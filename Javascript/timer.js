function calculateHoursMinuteSecondleft(){
  var now = new Date();
  var hoursleft = 23-now.getHours();
  var minutesleft = 59-now.getMinutes();
  var secondsleft = 59-now.getSeconds();

  //format 0 prefixes
  if(minutesleft<10) minutesleft = "0"+minutesleft;
  if(secondsleft<10) secondsleft = "0"+secondsleft;

  //display

  document.getElementById("timer").innerHTML = hoursleft+"h "+ " : " + minutesleft+"m "+ " : "+secondsleft+"s";
}
calculateHoursMinuteSecondleft();
setInterval(calculateHoursMinuteSecondleft, 1000);

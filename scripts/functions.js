function timecheck() {
  var date = new Date();
  var hour = date.getHours();
  console.log(hour);
  var minute = date.getMinutes();
  console.log(minute);
  var second = date.getSeconds();
  console.log(second);
  document.getElementById("hourDisplay").innerHTML = hour + ":";
  document.getElementById("minuteDisplay").innerHTML = minute + ":";
  document.getElementById("secondDisplay").innerHTML = second;
}
var looper =setInterval(timecheck,1000);
window.onload =timecheck;
//window.onload = bgSetter;
function bgSetter(){
  var bgPicked;
  document.getElementById("bg").style.backgroundColor = bgPicked;
}

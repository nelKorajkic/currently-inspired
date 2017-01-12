function timecheck() {
  var date = new Date();
  var hour = date.getHours();
  console.log(hour);
  var minute = date.getMinutes();
  console.log(minute);
  var second = date.getSeconds();
  console.log(second);
  if (minute<10){
    minute = "0" +minute;
  }
  if (second<10){
    second = "0" +second;
  }
  document.getElementById("time").innerHTML = hour + ":"+minute + ":"+second;
}
var looper =setInterval(timecheck,1000);
window.onload =timecheck;
//window.onload = bgSetter;
function bgSetter(){
  var bgPicked;
  document.getElementById("bg").style.backgroundColor = bgPicked;
}

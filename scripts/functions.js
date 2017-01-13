function timecheck() {
  var date = new Date();
  var hour = date.getHours();
  console.log(hour);
  var minute = date.getMinutes();
  console.log(minute);
  var second = date.getSeconds();
  console.log(second);
  if (hour<10){
    hour = "0" +hour;
  }
  if (minute<10){
    minute = "0" +minute;
  }
  if (second<10){
    second = "0" +second;
  }

  var month = date.getMonth() + 1;
  if (month<10) {
    month = "0" +month;
  }
  var day = date.getDate();
  if (day<10) {
    day = "0" +day;
  }
  var year = date.getFullYear();
  document.getElementById("time").innerHTML = hour + ":"+minute + ":"+second;
  document.title = hour + ":"+minute + ":"+second;
  document.getElementById("date").innerHTML = month + ":"+day + ":"+year;
}
var looper =setInterval(timecheck,1000);
window.onload =timecheck;
//window.onload=hexToRgb();
//var x = document.cookie;

$('img#imgbtn').click(function() {
  $('.sidebar').slideDown(300);
  $('#overlay').show(3);
});

$('img#closeBtn').click(function() {
  $('.sidebar').slideUp(300);
  $('#overlay').hide(3);
});
$('#overlay').click(function() {
  $('.sidebar').slideUp(300);
  $('#overlay').hide(3);
});

$('.colorContainer div').click(function() {
  var bgPicked = $(this).css('backgroundColor');
  console.log(bgPicked);
    var parts = bgPicked.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    bgPicked = '#' + parts.join('');
    bgSetter(bgPicked);
});

function bgSetter(bgPicked){
  console.log(bgPicked);
  document.getElementById("bg").style.backgroundColor = (bgPicked);
  bgPicked = bgPicked.slice(1,6);
  hexToRgb(bgPicked);
}

function hexToRgb(bgPicked) {
    var bigint = parseInt(bgPicked, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    //perceptive luminance - human eye favor of the color green
    var a = 1 - ( (0.299 * r) + (0.587 * g) + (0.114 * b))/255;
    if (a < 0.5) {
      //bright colors - black font
      document.getElementById("time").style.color = "#444444";
      document.getElementById("date").style.color ="#666666";
    }
    else  {
      //dark colors - white font
      document.getElementById("time").style.color = "#DDDDDD";
      document.getElementById("date").style.color ="#CCCCCC";
    }
}

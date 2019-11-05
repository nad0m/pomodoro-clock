$(document).ready(function() {
  var breakLength = 5;
  var sessionLength = 25;
  var s = 0;
  var m = sessionLength;
  var pause = true;
  var timer;
  var fill = 0;
  var white = 1;
  var percentage;

  $(".break").text(breakLength);
  $(".session").text(sessionLength);
  $("#timeBox").text(sessionLength + ":00");

  $(".circle").click(function() {

    percentage = 1000 / (sessionLength * 60000);

    if (pause) {
      timer = setInterval(update, 1000);
      pause = false;
    } else {
      clearInterval(timer);
      pause = true;
    }

  });

  function breakStart() {

    percentage = 1000 / (breakLength * 60000);
    $("#textBox").text("Break");
    $("#timeBox").text(breakLength + ":00");
    m = breakLength;

  }

  function update() {
    if (m == 0 && s == 0 && document.getElementById("textBox").innerHTML == "Break") {
      $("#textBox").text("Session");
      percentage = 1000 / (sessionLength * 60000);
      m = sessionLength;
      s = 0;

    }

    if (m == 0 && s == 0) {
      breakStart();
    }
    if (s == 0) {
      s = 60;
    }

    s--;

    if (s == 59) {
      m--;
    }

    if (s < 10) {
      s = "0" + s;
    }
    $("#timeBox").text(m + ":" + s);

    if (document.getElementById("textBox").innerHTML == "Session") {
      fill += (percentage * 100);
      white -= (percentage * 100);
    } else {
      fill -= (percentage * 100);
      white += (percentage * 100);
    }

    $(".circle").css("background", "-webkit-linear-gradient(bottom, #39C442 " + fill + "%, #22262B " + white + "%)");
    $(".circle").css("background", "-moz-linear-gradient(bottom, #39C442 " + fill + "%, #22262B " + white + "%)");
    $(".circle").css("background", "-ms-linear-gradient(bottom, #39C442 " + fill + "%, #22262B " + white + "%)");
    $(".circle").css("background", "linear-gradient(bottom, #39C442 " + fill + "%, #22262B " + white + "%)");

  }

  $(".breakMinus").click(function() {
    if (breakLength > 1) {
      breakLength -= 1;
      $(".break").text(breakLength);
    }
  });

  $(".breakAdd").click(function() {
    breakLength += 1;
    $(".break").text(breakLength);

  });

  $(".sessionMinus").click(function() {
    if (sessionLength > 1) {
      sessionLength -= 1;
      $(".session").text(sessionLength);
      $("#timeBox").text(sessionLength + ":00");
      m = sessionLength;
    }
  });

  $(".sessionAdd").click(function() {
    sessionLength += 1;
    $(".session").text(sessionLength);
    $("#timeBox").text(sessionLength + ":00");
    m = sessionLength;

  });
  
  $(".reset").click(function () {

    clearInterval(timer);
    pause = true;
    $("#textBox").text("Session");
    $(".session").text(sessionLength);
    $("#timeBox").text(sessionLength + ":00");
    m = sessionLength;
    s = 0;
    fill = 0;
    white = 1;
    

    $(".circle").css("background", "none");
    
    
  });

});
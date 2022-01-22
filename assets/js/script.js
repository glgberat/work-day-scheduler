//Time
var time = function () {
    document.getElementById("currentDay").innerHTML = moment().format(
      "dddd, MMM Do, h:mm:ss a"
    );
  };
  setInterval(time, 1000);
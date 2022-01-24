//Current Time displayed on top dynamically using moment.js 
var time = function () {
    document.getElementById("currentDay").innerHTML = moment().format(
      "dddd, MMM Do, h:mm:ss a"
    );
  };
  setInterval(time, 1000);




//array of time slots are initialized here
  $(document).ready(function () {
    let timeSlots = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    function DisplayPlans() {
      for (let i = 0; i <= timeSlots.length; i++) {
        $("#" + timeSlots[i]).val(localStorage.getItem(timeSlots[i]));
      }
    }
    DisplayPlans(); // function call to display time rows for textarea

        $(".saveBtn").click(function () {
          let dataHour = $(this).attr("data-hour");
          let inputField = $("#" + dataHour).val();
      
          localStorage.setItem(dataHour, inputField); //user data stored locally for persistence
      
        });
      });



      // Color highlight depending on time
const rows = $(".row");
let currentHour = parseInt(moment().hours());

Array.from(rows).forEach((row) => {
  let rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour < 7) {
    rowHour += 12;
  }
  if (rowHour) {
    // Compare hours and color setting each row
    if (currentHour === rowHour) {
      setColor(row, "lightgreen");
    } else if (currentHour < rowHour) {
      setColor(row, "lightgrey");
    } else if (currentHour > rowHour) {
      setColor(row, "grey");
    }
  }
});

function setColor(element, color) { //function call for coloring each row
  element.style.backgroundColor = color;
}
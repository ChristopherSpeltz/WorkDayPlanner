// declaration for current time
let currentDate = moment().format("dddd, MMMM Do");
// console.log(currentDate);

// declaration for current hour
let currentHour = moment().format("H");
console.log(currentHour);

let plannerList = [
  { hour: "9AM", plannedEvent: "" },
  { hour: "10AM", plannedEvent: "" },
  { hour: "11AM", plannedEvent: "" },
  { hour: "12PM", plannedEvent: "" },
  { hour: "1PM", plannedEvent: "" },
  { hour: "2PM", plannedEvent: "" },
  { hour: "3PM", plannedEvent: "" },
  { hour: "4PM", plannedEvent: "" },
  { hour: "5PM", plannedEvent: "" },
];
// add current date  header
$("#currentDay").append(currentDate);

// function to audit time and determine color
function auditHour(hour) {
    let presentTime = moment(currentHour, "H A");
    let hourSlot = moment(hour, "H A");
  
    if (presentTime.isBefore(hourSlot) === true) {
      return "future";
    } else if (presentTime.isAfter(hourSlot) === true) {
      return "past";
    } else {
      return "present";
    }
  }

//function to create planner
plannerList.forEach(function (plannerListHour) {
  
  let label = plannerListHour.hour;

  let auditedEvent = auditHour(label);

  // declaration for planner list, including the hour, entered text and save button
  let eventList =
    '<div class="time-block"><div class="row no-gutters input-group"><div class="col-sm-2 col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' + label +
    '</div><textarea class="form-control ' + auditedEvent + ' description">' + plannerListHour.plannedEvent + '</textarea><div class="col-sm-2 col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="far fa-save"></i></button></div></div></div>';

  // add rows to page
  $(".container").append(eventList);
});


// day planner save button clicked
$(".saveBtn").on("click", function () {
  console.log("You clicked the button!");
});

var $currentDay = $("#currentDay");
var $timeBlocks = $(".time-block");
var $scheduleArea = $(".schedule");

var toDoItems = [];

// Hour property

var currentDate = moment().format("dddd,MMM Do");
var currentHour = moment().format("H");

function initializeSchedule() {

    // time blocks
    $timeBlocks.each(function(){
        var $thisBlock = $(this);
        var thisBlock = parseInt($thisBlock.attr("date-hour"));

        var todoObj = {
            hour: thisBlockHr,
            text: "",
        }
        toDoItems.push(todoObj);
    });

    // saving array
    localStorage.setItem("todos", JSON.stringify(toDoItems));
}
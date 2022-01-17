$(document).ready(function () {
  //click event listen attached to all save buttons

  const m = moment();

  $("#currentDay").text(m.format("dddd MMMM DD YYYY")); //set current day

  //loop to display 9am-8pm
  for (var i = 9; i <= 20; i++) {
    // Creation of the row elements
    row = $(`<div class="row">`);
    col1 = $(`<div class ="col-lg-2 hour">${displayAmorPm(i)}</div>`);
    col2 = $(
      `<div class ="col-lg-8 inputcontent"><input data-input="${i}" id="inputText${i}" class="form-control inputText" type="text" name="userInput"></div>`
    );
    col3 = $(
      `<div class ="col-lg-2"><button data-id="${i}" id="savePlanner" class="btn saveBtn btn-success btn-block"><i class="fas fa-save"></i> Save</button></div>`
    );
    row.append(col1);
    row.append(col2);
    row.append(col3);
    $("#display-planner").append(row);
    getlocalStorage(i);
  }

  $(".saveBtn").click(function (e) {
    //grab text entered
    var id = $(this).data("id");
    var inputText = $(this).parent().siblings().find("input").val(); //grab the time it belongs
    localStorage.setItem(id, inputText); //save to local storage
  });
  //  Convert Am to Pm
  function displayAmorPm(hour) {
    var b = "";
    if (hour <= 12) {
      b = "AM";
    } else {
      b = "PM";
    }
    hour = hour % 12;
    hour = hour ? hour : 12;
    return hour + " " + b;
  }

  function getlocalStorage(hour) {
    let inputval = localStorage.getItem(hour);
    if (true) {
      var text = $(`input#inputText${hour}`).val(inputval);
      console.log(text);
    }
  }

  function changeColour() {
    var hour = new Date().getHours(); //return hour for specified date
    for (var i = 9; i <= 20; i++) {
      console.log(hour, i);
      if (hour == i) {
        $(`#inputText${i}`).addClass("present"); ///add classes for past, present and future from css
      } else if (hour > i) {
        $(`#inputText${i}`).addClass("past");
      } else if (hour < i) {
        $(`#inputText${i}`).addClass("future");
      }
    }
  }

  changeColour();
});

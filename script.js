$(document).ready(function () {
  //click event listen attached to all save buttons

  const m = moment();

  $("#currentDay").text(m.format("dddd MMMM do YYYY")); //set current day

  $(".saveBtn").on("click", function () {
    //grab text entered
    var description = $(this).siblings(".description").val();
    //grab the time it belongs
    var time = $(this).parent().attr("id");
    //save to local storage
    localStorage.setItem(time, description);
  });

  hrUpdate();

  function hrUpdate() {
    //get hour from moment
    //set it to the text
    //use if else to compare current hour with ids
    //add relevant class names
    // allocate color based on current time
  }

  //retrieve local storage text for each blocks
  //8 get items from local storage for each time block
});

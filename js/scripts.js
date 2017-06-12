//BUSINESS LOGIC
function Place(placeName, where, date, landmarks, notes) {
  this.placeName = placeName;  //string
  this.where = where;  //string
  this.date = date;  //string or maybe calendar?
  this.landmarks = landmarks;  //start with string, move to array?
  this.notes = notes;  //string
}

//USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#new-destination").submit(function(event) {
    event.preventDefault();

    var inputPlaceName = $("input#place-name").val();
    var inputWhere = $("input#where").val();
    var inputDate = $("input#date").val();
    var inputLandmarks = $("input#landmarks").val();
    var inputNotes = $("input#notes").val();

    var newPlace = new Place(inputPlaceName, inputWhere, inputDate, inputLandmarks, inputNotes);

    $("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");
    $("#list-of-places").show();

    //reset values on form again to avoid resubmitting same data
    $("input#place-name").val("");
    $("input#where").val("");
    $("input#date").val("");
    $("input#landmarks").val("");
    $("input#notes").val("");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h3").text(newPlace.placeName);
      //$(".place-name").text(newPlace.placeName);
      $("#where-").text(newPlace.where);
      $("#date-").text(newPlace.date);
      $("#landmarks-").text(newPlace.landmarks);
      $("#notes-").text(newPlace.notes);

    });
  });
});

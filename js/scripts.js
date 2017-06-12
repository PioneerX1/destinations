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

  });
});

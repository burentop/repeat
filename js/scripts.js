$(document).ready(function() {
  $(".submit form").submit(function(event) {
    var phraseInput = $("#phrase").val().toUpperCase();
    $("#response-line").text(phraseInput);
    $(".response").toggle();

    event.preventDefault();
  });
});
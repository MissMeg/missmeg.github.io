$(document).ready(function() {
  //initial_modal button
  $('#initial_modal_button').delay(7000).fadeIn('slow');
  $('#initial_modal_button').click(() => {
    $('#initial_modal').fadeOut('slow');
    $('#about-header h1').addClass('animate_header');
    $('#about-content').delay(2000).fadeIn('slow');
    $('#about-text').delay(2000).fadeIn('slow');
    $('#about-favs').delay(2000).fadeIn('slow');
  });


});

(function ($) {
  $(function () {
    $(".sidenav").sidenav();
    $(".parallax").parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

$(".carousel.carousel-slider").carousel({
  fullWidth: true,
  indicators: true,
});

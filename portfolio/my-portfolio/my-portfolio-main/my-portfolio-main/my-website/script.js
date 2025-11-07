$(document).ready(function () {
  // Fade in header text smoothly
  $("h1, .tagline").hide().fadeIn(1500);

  // Add hover effect to skills
  $(".skills li").hover(
    function () { $(this).css("background", "#6a11cb"); },
    function () { $(this).css("background", "#2575fc"); }
  );
});

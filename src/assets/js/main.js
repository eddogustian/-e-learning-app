$(document).on("click", ".topnav a", function() {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

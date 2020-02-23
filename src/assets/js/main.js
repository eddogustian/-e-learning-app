$(document).ready(function() {
  // tab
  $(document).on("click", ".topnav a", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
  // tab end
  // $(document).on("scroll", function() {
  //   if ($(document).scrollTop() > 10) {
  //     $(".NavFix").addClass("sticky");
  //   } else {
  //     $(".NavFix").removeClass("sticky");
  //   }
  // });
});

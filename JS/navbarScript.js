$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $("container").addClass("black-navbar");
    } else {
      $("container").removeClass("black-navbar");
    }
  });
});

// function getScrollPercent() {
//   var h = document.documentElement.scrollHeight;
//   var s = document.documentElement.scrollTop;
//   var v = s / (h - document.documentElement.clientHeight);
//   return v * 100;
// }
// let scroll = getScrollPercent;
// if (scroll > 10) {
//   $("container").addClass("black-navbar");
// } else {
//   $("container").removeClass("black-navbar");
// }

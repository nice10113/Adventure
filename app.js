// JQuery
import $ from "jquery";
// GSAP
const tl = new TimelineLite();

$(document).ready(() => {
  $(".navbar-toggler").on("click", () => {
    $(".navbar ul").toggleClass("showing");
  });
});

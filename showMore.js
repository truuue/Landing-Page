document.addEventListener("DOMContentLoaded", function () {
  var showMoreButtons = document.querySelectorAll(".show-more");
  var showLessButtons = document.querySelectorAll(".show-less");

  showMoreButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var section = button.closest(".about-section, .services-section");
      section.querySelector(".reduced-content").style.display = "none";
      section.querySelector(".full-content").style.display = "block";
    });
  });

  showLessButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var section = button.closest(".about-section, .services-section");
      section.querySelector(".reduced-content").style.display = "block";
      section.querySelector(".full-content").style.display = "none";
    });
  });
});

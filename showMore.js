document.addEventListener("DOMContentLoaded", function () {
  var showMoreButton = document.getElementById("services-more");
  var showLessButton = document.getElementById("services-less");
  var reducedContent = document.getElementById("services-reduced");
  var fullContent = document.getElementById("services-full");

  if (showMoreButton && showLessButton && reducedContent && fullContent) {
    showMoreButton.addEventListener("click", function (event) {
      event.preventDefault();
      reducedContent.style.display = "none";
      fullContent.style.display = "block";
    });

    showLessButton.addEventListener("click", function (event) {
      event.preventDefault();
      reducedContent.style.display = "block";
      fullContent.style.display = "none";
    });
  }
});

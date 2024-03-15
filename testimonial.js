document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll("#testimonials input[type='radio']");
  const paragraphs = document.querySelectorAll("#testimonials .testimonial");

  for (let i = 1; i < paragraphs.length; i++) {
    paragraphs[i].style.display = "none";
  }

  radios.forEach(function (radio, index) {
    radio.addEventListener("change", function () {
      paragraphs.forEach(function (paragraph) {
        paragraph.style.display = "none";
      });
      paragraphs[index].style.display = "block";
    });
  });
});

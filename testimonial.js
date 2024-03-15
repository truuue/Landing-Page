document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll("#testimonials input[type='radio']");
  const paragraphs = document.querySelectorAll("#testimonials .testimonial");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 0;

  function showNextTestimonial() {
    paragraphs[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % paragraphs.length;
    paragraphs[currentIndex].style.display = "block";
    radios[currentIndex].checked = true;
  }

  function showPrevTestimonial() {
    paragraphs[currentIndex].style.display = "none";
    currentIndex = (currentIndex - 1 + paragraphs.length) % paragraphs.length;
    paragraphs[currentIndex].style.display = "block";
    radios[currentIndex].checked = true;
  }

  nextBtn.addEventListener("click", showNextTestimonial);
  prevBtn.addEventListener("click", showPrevTestimonial);

  for (let i = 1; i < paragraphs.length; i++) {
    paragraphs[i].style.display = "none";
  }
});

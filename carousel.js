document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel-container");

  carousels.forEach((carousel) => {
    setDefaultImagePosition(carousel);

    const pics = carousel.querySelectorAll(".carousel-pic");
    pics.forEach((pic, index) => {
      pic.addEventListener("click", function () {
        if (pic.classList.contains("center")) return;

        pics.forEach((p) => p.classList.remove("left", "center", "right"));
        pic.classList.add("center");

        const leftIndex = (index + pics.length - 1) % pics.length;
        const rightIndex = (index + 1) % pics.length;

        pics[leftIndex].classList.add("left");
        pics[rightIndex].classList.add("right");
      });
    });
  });
});

function setDefaultImagePosition(carousel) {
  const pics = carousel.querySelectorAll(".carousel-pic");
  const randomIndex = Math.floor(Math.random() * pics.length);

  pics.forEach((pic, index) => {
    pic.classList.remove("left", "center", "right");
    if (index === randomIndex) {
      pic.classList.add("center");
    } else if ((randomIndex + 1) % pics.length === index) {
      pic.classList.add("right");
    } else {
      pic.classList.add("left");
    }
  });
}

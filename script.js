// Show or hide the Scroll-to-Top button based on scroll position
window.addEventListener("scroll", function () {
  const backToTopButton = document.getElementById("scrollTopBtn");

  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

document.getElementById("scrollTopBtn").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

var swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  slidesPerView: 1,
  spaceBetween: 30
});

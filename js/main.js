$("#myTab a").on("click", function (e) {
  e.preventDefault();
  $(this).tab("show");
});

window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector(".btn-top").classList.add("show-top");
    document.querySelector(".header-itemsa").classList.add("show-scroll");
  } else {
    document.querySelector(".btn-top").classList.remove("show-top");
    document.querySelector(".header-itemsa").classList.remove("show-scroll");
  }
};

document.querySelector(".btn-top").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

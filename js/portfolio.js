document.querySelectorAll(".imgBG").forEach((el) => {
  el.addEventListener("mouseover", function () {
    el.previousSibling.previousSibling.style.display = "flex";
  });
  el.previousSibling.previousSibling.addEventListener("mouseout", function () {
    el.previousSibling.previousSibling.style.display = "none";
  });
});
$(document).ready(function () {
  $(".dropdown-button").click(function () {
    const currentState = this.nextElementSibling.style.display;
    hideDropdowns();
    if (!(currentState === "flex")) {
      this.nextElementSibling.style.display = "flex";
      this.classList.add("opened");
    }
  });
  $(document).click(function (e) {
    if (
      !e.target.closest(".dropdown-menu") &&
      !e.target.closest(".dropdown-button")
    ) {
      hideDropdowns();
    }
  });
});
export default function hideDropdowns() {
  document.querySelectorAll(".dropdown-button").forEach((button) => {
    button.classList.remove("opened");
    button.nextElementSibling.style.display = "none";
  });
}

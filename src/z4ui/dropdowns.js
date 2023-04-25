var dropdownOpened = false;
$(document).ready(function () {
  $(".dropdown-button").click(function () {
    showMenu(this);
  });

  $(".dropdown-button").mouseenter(function () {
    if (dropdownOpened) {
      showMenu(this);
    }
  });
});
$(document).click(function (e) {
  if (
    !e.target.closest(".dropdown-menu") &&
    !e.target.closest(".dropdown-button")
  ) {
    hideDropdowns();
  }
});
function showMenu(dropdown) {
  const currentState = dropdown.nextElementSibling.style.display;
  hideDropdowns();
  if (!(currentState === "flex")) {
    dropdown.nextElementSibling.style.display = "flex";
    dropdown.classList.add("opened");
  }
  dropdownOpened = true;
}
export default function hideDropdowns() {
  dropdownOpened = false;
  document.querySelectorAll(".dropdown-button").forEach((button) => {
    button.classList.remove("opened");
    button.nextElementSibling.style.display = "none";
  });
}

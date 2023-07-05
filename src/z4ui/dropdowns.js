var dropdownOpened = false;
export default function hideDropdowns() {
  dropdownOpened = false;
  document.querySelectorAll(".dropdown-button").forEach((button) => {
    button.classList.remove("opened");
    if (button.firstElementChild) button.firstElementChild.style.display = "none";
  });
}
$(document).ready(function () {
  $(".dropdown-button").click(function () {
    showMenu(this);
  });

  $(".dropdown-button").mouseenter(function () {
    if (dropdownOpened && !this.classList.contains('opened')) {
      showMenu(this);
    }
  });
  $(".dropdown-menu > li").click(function (e) {
    hideDropdowns();
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
  const currentState = dropdown.firstElementChild.style.display;
  hideDropdowns();
  if (!(currentState === "flex")) {
    dropdown.firstElementChild.style.display = "flex";
    dropdown.classList.add("opened");
  }
  dropdownOpened = true;
}

import hideDropdowns from './dropdowns.js'
var windowArea;
var windowStack = [];
$(document).ready(function () {
  windowArea = $("#window-area");
});

function bindEvents(window) {
  $(window).draggable({
    handle: ".window-header",
    scroll: false
  });
  $(window).resizable({
    handles: "all",
    distance: 50,
    classes: {
      "ui-resizable-se": "",
    },
  });
  $(window).mousedown(function () {
    hideDropdowns();
    bringToFront(window);
  });
  $(window).find('.window-close').click(function () {
    winX(window);
  });
}

function winX(window) {
  // (the X button) > windowButtons > windowHeader > window
  window.style.display = "none";
  const index = windowStack.indexOf(window);
  if (index > -1) {
    windowStack.splice(index, 1);
  }
  window.remove();
}
function updateZindex() {
  windowStack.forEach((window) => {
    $(window).css("z-index", windowStack.indexOf(window));
  });
}
export function newWindow(id,title) {
  const window = document.createElement("div");
  window.id = id;
  window.className = "window";
  return window;
}
export function openWindow(window) {
  hideDropdowns();
  if (windowStack.indexOf(window) == "-1") {
    windowStack.push(window);
  } else {
    bringToFront(window);
  }
  window.style.display = "flex";
  windowArea[0].appendChild(window);
  bindEvents(window); // draggable needs to be set AFTER adding to DOM, otherwise position gets forced to relative
  updateZindex();
}
function bringToFront(window) {
  const index = windowStack.indexOf(window);
  windowStack.push(windowStack.splice(index, 1)[0]);
  updateZindex();
}

const menu = document.querySelector(".navbar > .menu");
const nav = document.querySelector(".navbar > .nav");
const navItems = document.querySelectorAll(".navbar .nav .nav-item");
const navSelect = document.querySelector(".navbar > .select");
const selectBlock = document.querySelector(".select-block");

const items = Array.from(navItems);
const menuWidth = 49;

let currentIndex = items.length - 1;
let prevWidth = document.documentElement.clientWidth;

const itemsAxis = items.map((item) => item.offsetLeft + item.offsetWidth + menuWidth);
const itemsWidth = items.map((item) => item.offsetWidth);

const mutationObserver = new MutationObserver((mutationsList) => {
  const nodesLen = mutationsList[0].target.children.length;
  if (!nodesLen) {
    isMenuOpen = false;
    navSelect.classList.replace("visible", "hidden");
  }
});

function selectNavItem(event) {
  const index = items.indexOf(event.target);
  if (index !== -1) {
    const item = items[index];
    const offsetWidth = itemsWidth[index];
    selectBlock.style.width = offsetWidth + "px";
    item.appendChild(selectBlock);
  };
}

function toggleMenu() {
  observer.broadcast();
  selectToggles.isMenuOpen = !selectToggles.isMenuOpen;
  navSelect.classList.toggle("hidden", !selectToggles.isMenuOpen);
  navSelect.classList.toggle("visible", selectToggles.isMenuOpen);
}

function resizeWindow() {
  let item = null;
  let currWidth = document.documentElement.clientWidth;

  if (currWidth <= prevWidth) {
    while (currentIndex > -1 && currWidth <= itemsAxis[currentIndex]) {
      item = items[currentIndex];
      item.classList.replace("nav-item", "option");
      navSelect.appendChild(item);
      currentIndex--;
    }
  } else {
    while (currentIndex < items.length && currWidth > itemsAxis[currentIndex]) {
      item = items[currentIndex];
      item.classList.replace("option", "nav-item");
      nav.appendChild(item);
      currentIndex++;
    }
  }

  if (item) currentIndex = items.lastIndexOf(item);

  prevWidth = currWidth;
}

function handleDocumentClick(event) {
  if (!event.target.closest(".select") && !event.target.closest(".menu")) {
    observer.broadcast();
  }
}

function initialize() {
  selectNavItem({ target: items[0] });
  menu.addEventListener("click", toggleMenu);
  nav.addEventListener("click", selectNavItem);
  navSelect.addEventListener("click", selectNavItem);
  document.addEventListener("click", handleDocumentClick);
  window.addEventListener("resize", resizeWindow);
  window.dispatchEvent(new Event("resize"));
  mutationObserver.observe(navSelect, { childList: true });

  observer.subscribe(() => {
    if (selectToggles.isMenuOpen) {
      selectToggles.isMenuOpen = false;
      navSelect.classList.replace("visible", "hidden");
    }
  });
}

initialize();

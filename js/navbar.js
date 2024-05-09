const menu = document.querySelector(".navbar > .menu");
const nav = document.querySelector(".navbar > .nav");
const navItems = document.querySelectorAll(".navbar .nav .nav-item");
const select = document.querySelector(".navbar > .select");
const selectBlock = document.querySelector(".select-block");

const items = Array.from(navItems);
const menuWidth = 49;
let isMenuOpen = false;
let currentIndex = items.length - 1;
let prevWidth = document.documentElement.clientWidth;

const itemsAxis = items.map((item) => item.offsetLeft + item.offsetWidth + menuWidth);
const itemsWidth = items.map((item) => item.offsetWidth);

const observer = new MutationObserver((mutationsList) => {
  const nodesLen = mutationsList[0].target.children.length;
  if (!nodesLen) {
    isMenuOpen = false;
    select.classList.replace("visible", "hidden");
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
  isMenuOpen = !isMenuOpen;
  select.classList.toggle("hidden", !isMenuOpen);
  select.classList.toggle("visible", isMenuOpen);
}

function resizeWindow() {
  let item = null;
  let currWidth = document.documentElement.clientWidth;

  if (currWidth <= prevWidth) {
    while (currentIndex > -1 && currWidth <= itemsAxis[currentIndex]) {
      item = items[currentIndex];
      item.classList.replace("nav-item", "option");
      select.appendChild(item);
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
    isMenuOpen = false;
    select.classList.replace("visible", "hidden");
  }
}

function initialize() {
  selectNavItem({ target: items[0] });
  menu.addEventListener("click", toggleMenu);
  nav.addEventListener("click", selectNavItem);
  select.addEventListener("click", selectNavItem);
  document.addEventListener("click", handleDocumentClick);
  window.addEventListener("resize", resizeWindow);
  window.dispatchEvent(new Event("resize"));
  observer.observe(select, { childList: true });
}

initialize();

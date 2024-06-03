const dialog = document.querySelector('.dialog');
const dialogNav = document.querySelector('.dialog-nav');
const globalMenu = document.querySelector('.globalar-left > .menu');
const globalCreateBtn = document.querySelector('.globalar-right > .component >.create-button');
const globalCreateSelect = document.querySelector('.globalar-right > .select');
const dialogMenu = document.querySelector('.dialog-header > .menu');
const dialogSearchBtn = dialogNav.querySelector('.heading-title > .menu');
const dialogSearchArea = dialogNav.querySelector('.search-area');
const dialogSearchContent = dialogNav.querySelector('.search-content');
const dialogItems = dialogNav.querySelector('.items');
const dialogItemOptions = dialogNav.querySelectorAll('.items > .option');
const dialogWithdrawBtn = dialogSearchArea.querySelector('.withdraw-button');
const dialogSearchInput = dialogSearchArea.querySelector('.label > .search-input');
const dialogDeleteBtn = dialogSearchArea.querySelector('.delete-button');

const itemList = initItemOptions(dialogItemOptions);

globalMenu.addEventListener('click', () => {
  observer.broadcast();
  dialog.showModal();
});

dialogMenu.addEventListener('click', () => {
  dialog.close();
});

dialog.addEventListener('click', (event) => {
  if (event.target.nodeName === 'DIALOG') {
    dialog.close();
  }
});

dialogSearchBtn.addEventListener('click', () => {
  dialogSearchBtn.classList.replace('visible', 'hidden');
  dialogSearchArea.classList.replace('hidden', 'search-area');
  itemList.showIcons(dialogSearchContent);
  dialogSearchInput.focus();
});

dialogWithdrawBtn.addEventListener('click', () => {
  dialogSearchBtn.classList.replace('hidden', 'visible');
  dialogSearchArea.classList.replace('search-area', 'hidden');
  itemList.hidnIcons(dialogItems);
});

dialogSearchInput.addEventListener('input', (event) => {
  handleSearchInput(event, dialogDeleteBtn);
});

dialogDeleteBtn.addEventListener('click', () => {
  handleSearchDelete(dialogSearchInput, dialogDeleteBtn);
});

globalCreateBtn.addEventListener('click', () => {
  observer.broadcast();
  selectToggles.isCreateOpen = !selectToggles.isCreateOpen;
  globalCreateSelect.classList.toggle("hidden", !selectToggles.isCreateOpen);
  globalCreateSelect.classList.toggle("visible", selectToggles.isCreateOpen);
});

observer.subscribe(() => {
  if (selectToggles.isCreateOpen) {
    globalCreateSelect.classList.replace("visible", "hidden");
    selectToggles.isCreateOpen = false;
  }
});

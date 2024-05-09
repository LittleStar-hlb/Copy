const commandBackdrop = document.querySelector('.command-backdrop');
const globalSearch = document.querySelector('.globalar .search .search-button');
const command = document.querySelector('.command');
const commandSearchInput = command.querySelector('.label > .search-input');
const commandDeleteBtn = command.querySelector('.delete-button');

globalSearch.addEventListener('click', () => {
  commandBackdrop.classList.replace('hidden', 'visible');
  commandSearchInput.focus();
});

commandBackdrop.addEventListener('click', (event) => {
  if (event.target === commandBackdrop) {
    commandBackdrop.classList.replace('visible', 'hidden');
  }
});

commandSearchInput.addEventListener('input', (event) => {
  handleSearchInput(event, commandDeleteBtn);
});

commandDeleteBtn.addEventListener('click', () => {
  handleSearchDelete(commandSearchInput, commandDeleteBtn);
});

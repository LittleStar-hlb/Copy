const commandBackdrop = document.querySelectorAll('.command-backdrop');
const globalSearch = document.querySelector('.globalar .search .search-button');
const globalCommandBtn = document.querySelector('.globalar .command-button');
const commandOne = document.querySelector('.command-one');
const commandTwo = document.querySelector('.command-two');
const commandSearchInput_one = commandOne.querySelector('.label > .search-input');
const commandSearchInput_two = commandTwo.querySelector('.label > .search-input');
const commandDeleteBtn_one = commandOne.querySelector('.delete-button');
const commandDeleteBtn_two = commandTwo.querySelector('.delete-button');

const commandBackdrops = Array.from(commandBackdrop);

globalSearch.addEventListener('click', () => {
  commandBackdrop[0].classList.replace('hidden', 'visible');
  commandSearchInput_one.focus();
});

commandBackdrops.forEach((backdrop) => {
  backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) {
      backdrop.classList.replace('visible', 'hidden');
    }
  });
});

globalCommandBtn.addEventListener('click', () => {
  commandBackdrop[1].classList.replace('hidden', 'visible');
  commandSearchInput_two.focus();
});


commandSearchInput_one.addEventListener('input', (event) => {
  handleSearchInput(event, commandDeleteBtn_one);
});

commandSearchInput_two.addEventListener('input', (event) => {
  handleSearchInput(event, commandDeleteBtn_two);
});

commandDeleteBtn_one.addEventListener('click', () => {
  handleSearchDelete(commandSearchInput_one, commandDeleteBtn_one);
});

commandDeleteBtn_two.addEventListener('click', () => {
  handleSearchDelete(commandSearchInput_two, commandDeleteBtn_two);
});

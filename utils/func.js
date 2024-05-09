
function initItemOptions(itemOptions) {
  let options = Array.from(itemOptions);
  let images = options.map((option) => option.querySelector('.image'));
  let svgs = options.map((option) => option.querySelector('.icon'));

  function showIcons(dom) {
    images.forEach((image) => image.classList.replace('visible', 'hidden'));
    svgs.forEach((svg) => svg.classList.replace('hidden', 'visible'));
    options.forEach((option) => {
      option.setAttribute('data-text', 'Jump to');
      dom.appendChild(option);
    });
  }

  function hidnIcons(dom) {
    images.forEach((image) => image.classList.replace('hidden', 'visible'));
    svgs.forEach((svg) => svg.classList.replace('visible', 'hidden'));
    options.forEach((option) => {
      option.removeAttribute('data-text');
      dom.appendChild(option);
    });
  }

  return {
    showIcons,
    hidnIcons
  };
}

function handleSearchInput(event, deleteDom) {
  let value = event.target.value;
  if (value.length > 0) {
    deleteDom.classList.replace('hidden', 'visible');
  } else {
    deleteDom.classList.replace('visible', 'hidden');
  }
}

function handleSearchDelete(inputDom, deleteDom) {
  inputDom.value = '';
  inputDom.focus();
  deleteDom.classList.replace('visible', 'hidden');
}


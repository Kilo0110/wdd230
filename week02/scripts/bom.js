const input = document.querySelector('input');
const button = document.querySelector('button');
const chapterList = document.querySelector('#list');

button.addEventListener('click', () => {
  if (input.value !== '') {
    const listItemElement = document.createElement('li');
    const deleteItemButton = document.createElement('button');
    listItemElement.textContent = input.value;
    deleteItemButton.textContent = '❌';
    listItemElement.appendChild(deleteItemButton);
    chapterList.appendChild(listItemElement);

    deleteItemButton.addEventListener('click', () => {
      chapterList.removeChild(listItemElement);
    });
  }

  input.focus();
  input.value = '';
});

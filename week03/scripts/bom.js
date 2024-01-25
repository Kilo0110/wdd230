const input = document.querySelector('input');
const button = document.querySelector('button');
const chapterList = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener('click', () => {
  if (input.value !== '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();

    input.focus();
    input.value = '';
  }

  input.focus();
  input.value = '';
});

function displayList(item) {
  const listItemElement = document.createElement('li');
  const deleteItemButton = document.createElement('button');
  listItemElement.textContent = item;
  deleteItemButton.textContent = '❌';
  deleteItemButton.classList.add('delete');
  listItemElement.appendChild(deleteItemButton);
  chapterList.appendChild(listItemElement);

  deleteItemButton.addEventListener('click', () => {
    chapterList.removeChild(listItemElement);
    deleteChapter(listItemElement.textContent);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}

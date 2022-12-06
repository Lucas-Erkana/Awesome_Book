import {
  form,
  addButton,
  titleInput,
  authorInput,
  listSectionBtn,
  formSectionBtn,
  contactSectionBtn,
  librarySection,
  formSection,
  contactSection,
  booksContainer,
} from './module/variables.js';
// import * as dateNow from './module/dates.js';
import setTime from './module/dates.js';

let bookList = [];
setTime();
const localData = localStorage.getItem('bookList');
if (localData !== null) {
  bookList = JSON.parse(localData);
}

const removeBook = (bookId) => {
  bookList = bookList.filter((book) => book.id !== parseInt(bookId, 10));
};

const storeBooks = () => {
  localStorage.setItem('bookList', JSON.stringify(bookList));
};

// eslint-disable-next-line no-unused-vars
const updateBooks = () => {
  booksContainer.textContent = '';
  bookList.forEach((book) => {
    const booksSection = `<div class='Book__section'>
    <div class='Book__section-item'>${book.title} by ${book.author}</div>
    <button class='remove-button' id="${book.id}">Remove</button>
   </div>`;
    booksContainer.innerHTML += booksSection;
  });
  const removeButtons = document.querySelectorAll('.remove-button');
  removeButtons.forEach((button) => button.addEventListener('click', (e) => {
    removeBook(e.target.id);
    updateBooks();
  }));
  storeBooks();
};

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const book = {
    id: Date.now(),
    title: titleInput.value,
    author: authorInput.value,
  };
  bookList.push(book);
  updateBooks();
  form.reset();
});

const toggleDisplaySection = (id) => {
  if (id === 'list-btn') {
    librarySection.classList.remove('hide');
    formSection.classList.add('hide');
    contactSection.classList.add('hide');
  } else if (id === 'new-btn') {
    librarySection.classList.add('hide');
    formSection.classList.remove('hide');
    contactSection.classList.add('hide');
  } else if (id === 'contact-btn') {
    librarySection.classList.add('hide');
    formSection.classList.add('hide');
    contactSection.classList.remove('hide');
  }
};

listSectionBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleDisplaySection(e.target.id);
});

formSectionBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleDisplaySection(e.target.id);
});

contactSectionBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleDisplaySection(e.target.id);
});

if (localStorage.getItem('bookList')) {
  updateBooks();
}
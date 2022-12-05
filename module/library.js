import { booksContainer } from './variables.js';

export default class Library {
  constructor() {
    this.bookList = [];
    const localData = localStorage.getItem('bookList');
    if (localData !== null) {
      this.bookList = JSON.parse(localData);
    }
  }

  removeBook(bookId) {
    this.bookList = this.bookList.filter(
      (book) => book.id !== parseInt(bookId, 10),
    );
  }

  storeBooks() {
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }

  updateBooks() {
    booksContainer.textContent = '';
    this.bookList.forEach((book) => {
      const booksSection = `<div class='Book__section'>
    <div class='Book__section-item'>${book.title} by ${book.author}</div>
    <button class='remove-button' id="${book.id}">Remove</button>
   </div>`;
      booksContainer.innerHTML += booksSection;
    });
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach((button) => button.addEventListener('click', (e) => {
      this.removeBook(e.target.id);
      this.updateBooks();
    }));
    this.storeBooks();
  }
}

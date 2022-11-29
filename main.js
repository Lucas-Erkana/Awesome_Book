/* eslint-disable linebreak-style */
import Book from './module/constructor.js';
import Store from './module/store.js';
// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    // element.classList.add('table-row');
    row.innerHTML = `
      <td class="book-title">"${book.title}" </td>
      <td> by</td>
      <td>${book.author}</td>
      <td>
      <input class='btn btn-danger btn-sm delete' type="button" value="Remove">
     </td>
    `;
    list.appendChild(row);
  }

  // delete function
  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  // Create clear fields function
  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // Instatiate book
  const book = new Book(title, author);

  // Add Book to UI
  UI.addBookToList(book);

  // Add book to storage
  Store.addBook(book);

  // Clear fields
  UI.clearFields();
});

// Delete a book
document.querySelector('#book-list').addEventListener('click', (e) => {
  // remove book from UI
  UI.deleteBook(e.target);

  // remove book from broswer storage according to author
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});

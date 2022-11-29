// Book Class: Represents a Book
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
 
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}
      </td>
      <td>${book.author}</td>
      <td>
      <input class='btn btn-danger btn-sm delete' type="button" value="Remove">
      </td>
      <hr>
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

// Store Class: Handle Storage to browser
class Store{
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books',JSON.stringify(books));
  }

  static removeBook(title) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if(book.title === title) {

        books.splice(index, 1);
      }
    });
    localStorage.setItem('books',JSON.stringify(books));
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

  //Add book to storage
  Store.addBook(book);

  // Clear fields
  UI.clearFields();
});

// Delete a book
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});

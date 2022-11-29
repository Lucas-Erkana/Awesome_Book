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
    const StoredBooks = [
      {
        title: 'lorem ipsum',
        author: 'Testeroo Testyy',
      },
      {
        title: 'Second Book',
        author: 'Testeroo Testyy',
      },
    ];
    const books = StoredBooks;
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

  // Clear fields
  UI.clearFields();
});

// Delete a book
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});

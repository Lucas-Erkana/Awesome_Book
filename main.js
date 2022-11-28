constructor() {
    this.bookList = [];
    this.container = document.querySelector('.book-container');
  }



  addBookToList(book) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>"${book.title}" by ${book.author}</td>
      <td><button class= "remove-btn">Remove</button></td>
      `;
    this.container.append(row);
  }

  AppendBook() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.querySelector('.title').value;
      const author = document.querySelector('.author').value;
      this.addBookToList({ title, author });
      this.bookList.push({ title, author });
      localStorage.setItem('books', JSON.stringify(this.bookList));
      // Clear form input's values
      document.querySelector('.title').value = '';
      document.querySelector('.author').value = '';
    });
  }
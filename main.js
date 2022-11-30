/* eslint-disable linebreak-style */
import Book from './module/constructor.js';
import Store from './module/store.js';
import Layout from './module/layout.js';


export default class UI {
  static displayBook() {
    const bookList = Store.getBooks();
    bookList.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const listOutput = document.querySelector('.listDisplay');
    listOutput.innerHTML += `<div class="book rounded">
                               <div class="book-infos py-2" id="${book.id}">   
                                 <span class="px-2 fw-bolder item1 blck text-capitalize">"${book.title}"</span>
                                 <span id="by" class="px-2">by</span>
                                 <span id="spanAuthor" class="px-2 item3 blck text-capitalize"><span id="by1">by:</span> ${book.author}</span>
                                 <button id="removeBtn" class="position-absolute h5 py-1 px-4 removeBtn clickable rounded end-0 bottom-0" >Delete</button>
                               </div>
                             </div>
                            `;
  }

  static deleteBook(id) {
    const el = document.getElementById(`${id}`);
    el.parentNode.removeChild(el);
  }
}

function addedSuccess() {
  document.getElementById('addMsg').style = 'display:block';
  document.getElementById('addMsg').innerHTML = 'Book added successfully!!!';
  setTimeout(() => {
    document.getElementById('addMsg').style = 'display:none';
  }, 2000);
}

document.addEventListener('submit', (e) => {
  e.preventDefault();
  // if (e.target.title.value === '' || e.target.author.value === '') {
  //   alert('Input field cannot be empty');
  // // } else {
  const author = e.target.author.value.trim();
  const title = e.target.title.value.trim();
  const newBook = new Book(title, author);
  Store.addBook(newBook);
  UI.addBookToList(newBook);
  e.target.reset();
  document.querySelectorAll('.content').forEach((item) => {
    item.classList.remove('active');
  });
  const content = document.querySelector('#form');
  content.classList.add('active');
  addedSuccess();
  // }
});

const layout = new Layout();
layout.update();

document.querySelector('.listDisplay').addEventListener('click', (e) => {
  const isButton = e.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  UI.deleteBook(e.target.parentElement.id);
  Store.removeBook(e.target.parentElement.id);
});

// Imlplement responsive menu

const menu = document.querySelector('.header');

document.getElementById('humburger').onclick = () => {
  menu.classList.add('change-menu');
  // alert('hello')
};

document.getElementById('closeIcon').addEventListener('click', () => {
  menu.classList.remove('change-menu');
});

window.addEventListener('mouseup', (e) => {
  if (e.target !== document.getElementById('closeIcon') && e.target !== document.getElementById('humburger')) {
    menu.classList.remove('change-menu');
  }
});
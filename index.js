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
  dayDate,
} from './module/variables.js';
import Book from './module/constructor.js';
import Library from './module/library.js';
import { dateNow } from './module/dates.js';

const library = new Library();
library.updateBooks();

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const Title = titleInput.value;
  const Author = authorInput.value;
  const newBook = new Book(Title, Author, Date.now());
  library.bookList.push(newBook);
  library.updateBooks();
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

dayDate.innerHTML = dateNow;

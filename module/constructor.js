/* eslint-disable linebreak-style */
export default class Book {
  constructor(title, author) {
    this.id = new Date().valueOf();
    this.title = title;
    this.author = author;
  }
}
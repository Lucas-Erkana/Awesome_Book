/* eslint-disable linebreak-style */
import UI from "../main.js";
import Navigation from "./navigation.js";

const date = window.luxon;
export default class Layout {
    constructor() {
        this.container = document.getElementById('container');
        this.container.classList.add('layout');
        this.header = document.createElement('header');
        this.header.setAttribute('id', 'header');
        this.header.classList.add('header', 'position-fixed', 'top-0', 'w-100');
        this.header.innerHTML = `<nav class="navbar px-3">
                                 <div class="page-title">
                                   <a href="#list" class="page-title text-white active">Awesome Books</a>
                                 </div>
                                 <span id="humburger"><i class="fa clickable humburger fa-bars fa-2x humb-mob text-white"></i></span>
                                 <span id="closeIcon"><i class="fa clickable closeIcon fa-times fa-2x humb-mob text-white"></i></span>
                                 <ul class="nav-list mt-3">
                                   <li class="nav-item " >
                                     <a href="#list" class="text-white navLink active">List</a>
                                   </li>
                                   <li class="nav-item" >
                                     <a href="#form" class="mx-5 text-white navLink">Add Book</a>
                                   </li>
                                   <li class="nav-item" >
                                     <a href="#contact" class="text-white navLink">Contact</a>
                                   </li>
                                 </ul>
                               </nav>`;

        const today = date.DateTime.local();
        this.time = document.createElement('div');
        this.time.classList.add('clock', 'mt-5');
        this.time.innerHTML = `<p id="clock-parag" class="pt-4 text-end me-2">
                               ${today.toFormat('FFF')}
                             </p>
                             `;
        this.main = document.createElement('main');
        this.main.classList.add('main-container');
        this.bookList = document.createElement('div');
        this.bookList.id = 'list';
        this.bookList.classList.add(
            'content',
            'book-list',
            'active',
            'content-box',
            'pt-2',
        );
        this.bookList.innerHTML = `<div class="list-title">
                                    <h3 class="fw-bold fs-4 pb-4 flex-center-column">All awesome books</h3>
                                  </div>
                                  <div id="listDisplay" class="listDisplay list-output w-100 rounded"></div>`;
        this.NewBookForm = document.createElement('form');
        this.NewBookForm.id = 'form';
        this.NewBookForm.classList.add(
            'content',
            'form',
            'content-box',
            'w-100',
        );

}
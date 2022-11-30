/* eslint-disable linebreak-style */
export default class Navigation {
    constructor() {
        this.navs = document.querySelectorAll('[href]');
    }

    init() {
        this.navs.forEach((nav) => {
            nav.addEventListener('click', (e) => {
                if (e.target.tagName === 'A') {
                    this.changeTabs(e);
                    this.changeContent(e);
                }
            });
        });
    }

    changeTabs(e) {
        this.navs.forEach((nav) => nav.classList.remove('active'));
        e.target.classList.add('active');
    }

    changeContent(e) {
        document.querySelectorAll('.content-box').forEach((item) => {
            item.classList.remove('active');
        });
        const selector = e.target.getAttribute('href');
        const content = document.querySelector(selector);
        content.classList.add('active');
    }
}
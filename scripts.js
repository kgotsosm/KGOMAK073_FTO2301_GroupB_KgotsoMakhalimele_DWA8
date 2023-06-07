// import from data.js

import { books, authors, genres, BOOKS_PER_PAGE } from './data.js'

// Function to create an element with attributes and innerHTML

const createElementAndAttributes = (tag, attributes, innerHTML) => {

    const element = document.createElement(tag);

    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }

    element.innerHTML = innerHTML;
    return element;
}



// Function to create option elements

const newElement = (value, text) => {
    const attributes = {
        value : value,
    }

    const option = createElementAndAttributes(option, attributes, text);
}

// function to create preview elements

const createPreviewElement = (book) => {


    const { author, id, image, title } = book;

    const element = createElementAndAttributes('div',
        {
            class: 'preview',
            id: 'data-preview'
        }, '');

    element.innerHTML = /* HTML */ ` 
        <img class="preview__image" src="${image}" alt="${title}">
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;

    return element;
}

// Function to initialize the page

const initPage = () => {

    let page = 1;
    let matches = books;

    const starting = document.createDocumentFragment();


    for (const book of matches.slice(0, BOOKS_PER_PAGE)) {
        const element = createPreviewElement(book);
        starting.appendChild(element);
    }

    document.querySelector('[data-list-items]').appendChild(starting);

    const genreHTML = document.createDocumentFragment();

    const firstGenreElement = newElement('any', 'All Genres');
    genreHTML.appendChild(firstGenreElement);

    for (const [id, name] of Object.entries(genres)) {
        const element = newElement(id, name);
        genreHTML.appendChild(element);
    }

    document.querySelector('[data-search-genres]').appendChild(genreHTML);
    const authorsHTML = document.createDocumentFragment();
    const firstAuthorElement = newElement('any', 'All Authors');
    authorsHTML.appendChild(firstAuthorElement);

    for (const [id, name] of Object.entries(authors)) {
        const element = newElement(id, name);
        authorsHTML.appendChild(element);
    }

    document.querySelector('[data-search-authors]').appendChild(authorsHTML);

    const darkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (darkTheme) {
        document.querySelector('[data-settings-theme]').value = 'night';
    }



}

initPage()

document.getElementById('search-button').addEventListener('click', function() {
    var nav = document.getElementById('main-nav');
    var searchInput = document.getElementById('search-input');
    var searchButton = document.getElementById('search-button');
    var closeSearch = document.getElementById('close-search');

    if (searchInput.style.display === 'none') {
        nav.style.display = 'none';
        searchInput.style.display = 'block';
        closeSearch.style.display = 'block';
        searchButton.style.display = 'none';
    } else {
        // Aquí puedes agregar la lógica para realizar la búsqueda
        console.log('Buscando:', searchInput.value);
    }
});

document.getElementById('close-search').addEventListener('click', function() {
    var nav = document.getElementById('main-nav');
    var searchInput = document.getElementById('search-input');
    var searchButton = document.getElementById('search-button');
    var closeSearch = document.getElementById('close-search');

    nav.style.display = 'flex';
    searchInput.style.display = 'none';
    closeSearch.style.display = 'none';
    searchButton.style.display = 'block';
});

document.getElementById('menu-button').addEventListener('click', function() {
    var nav = document.getElementById('main-nav');
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});

let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var logo = document.querySelector('.logo img');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 200) { // Cambiar el punto de scroll a 200px
        header.classList.add('scrolled');
        logo.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        logo.classList.remove('scrolled');
    }

    lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition; // Para evitar valores negativos
});
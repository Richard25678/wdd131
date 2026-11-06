const filterButtons = document.querySelectorAll('.filter-btn');
const templeFigures = document.querySelectorAll('.temple-figure');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

function applyFilter(filter = 'home') {
    templeFigures.forEach((figure) => {
        const era = figure.dataset.era;
        const size = figure.dataset.size;
        const showFigure =
            filter === 'home' ||
            (filter === 'old' && era === 'old') ||
            (filter === 'new' && era === 'new') ||
            (filter === 'large' && size === 'large') ||
            (filter === 'small' && size === 'small');

        figure.hidden = !showFigure;
    });
}

if (filterButtons.length) {
    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const selectedFilter = button.dataset.filter;

            filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
            applyFilter(selectedFilter);
        });
    });
}

if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = siteNav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

applyFilter();

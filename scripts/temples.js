const filterLinks = document.querySelectorAll('.filter-link');
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

if (filterLinks.length) {
    filterLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedFilter = link.dataset.filter;

            filterLinks.forEach((item) => {
                const isActive = item === link;
                item.classList.toggle('active', isActive);
                if (isActive) {
                    item.setAttribute('aria-current', 'page');
                } else {
                    item.removeAttribute('aria-current');
                }
            });
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

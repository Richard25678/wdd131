const temples = [
    {
        name: 'Salt Lake Temple',
        location: 'Salt Lake City, Utah',
        year: 1893,
        era: 'old',
        size: 'large',
        image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80',
        alt: 'Salt Lake Temple with tall spires and a historic stone exterior.'
    },
    {
        name: 'Manti Temple',
        location: 'Manti, Utah',
        year: 1888,
        era: 'old',
        size: 'large',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
        alt: 'Manti Temple set against a mountain backdrop in Utah.'
    },
    {
        name: 'Nauvoo Temple',
        location: 'Nauvoo, Illinois',
        year: 2002,
        era: 'new',
        size: 'small',
        image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=80',
        alt: 'Nauvoo Temple with a soft evening glow and classic architecture.'
    },
    {
        name: 'Rome Italy Temple',
        location: 'Rome, Italy',
        year: 2019,
        era: 'new',
        size: 'large',
        image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=900&q=80',
        alt: 'Rome Italy Temple facade framed by Italian city scenery.'
    },
    {
        name: 'Tokyo Japan Temple',
        location: 'Tokyo, Japan',
        year: 1980,
        era: 'old',
        size: 'small',
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
        alt: 'Tokyo Japan Temple in a tranquil setting with gardens and stone architecture.'
    },
    {
        name: 'Freiberg Germany Temple',
        location: 'Freiberg, Germany',
        year: 2015,
        era: 'new',
        size: 'small',
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80',
        alt: 'Freiberg Germany Temple amid a modern European neighborhood.'
    },
    {
        name: 'Jordan River Temple',
        location: 'South Jordan, Utah',
        year: 1981,
        era: 'old',
        size: 'large',
        image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80',
        alt: 'Jordan River Temple with a clean modern design and landscaped grounds.'
    },
    {
        name: 'Provo Temple',
        location: 'Provo, Utah',
        year: 1972,
        era: 'old',
        size: 'small',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
        alt: 'Provo Temple standing in a quiet Utah valley landscape.'
    },
    {
        name: 'Winnipeg Manitoba Temple',
        location: 'Winnipeg, Canada',
        year: 2021,
        era: 'new',
        size: 'medium',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80',
        alt: 'Winnipeg Manitoba Temple seen on a bright morning with a welcoming facade.'
    }
];

const gallery = document.querySelector('#temple-gallery');
const filterButtons = document.querySelectorAll('.filter-btn');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

function renderGallery(filter = 'home') {
    if (!gallery) return;

    const visibleTemples = temples.filter((temple) => {
        if (filter === 'home') return true;
        if (filter === 'old') return temple.era === 'old';
        if (filter === 'new') return temple.era === 'new';
        if (filter === 'large') return temple.size === 'large';
        if (filter === 'small') return temple.size === 'small';
        return true;
    });

    gallery.innerHTML = visibleTemples
        .map(
            (temple) => `
                <figure class="temple-figure" data-era="${temple.era}" data-size="${temple.size}">
                    <img src="${temple.image}" alt="${temple.alt}">
                    <figcaption>
                        <h2>${temple.name}</h2>
                        <p>${temple.location}</p>
                        <span>${temple.year}</span>
                    </figcaption>
                </figure>
            `
        )
        .join('');
}

if (filterButtons.length) {
    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const selectedFilter = button.dataset.filter;

            filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
            renderGallery(selectedFilter);
        });
    });
}

if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = siteNav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

renderGallery();

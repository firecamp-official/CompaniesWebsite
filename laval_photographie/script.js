document.querySelectorAll('.portfolio__img').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.className = 'image-focus';

        const clone = img.cloneNode(true);
        overlay.appendChild(clone);

        document.body.appendChild(overlay);

        // Clic à côté → fermer
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
    });
});

// Menu toggle
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('menuClose');

function openMenu() {
    menu.classList.add('menu--open');
    burger.classList.add('header__burger--open');
}

function closeMenu() {
    menu.classList.remove('menu--open');
    burger.classList.remove('header__burger--open');
}

burger.addEventListener('click', () =>
    menu.classList.contains('menu--open') ? closeMenu() : openMenu()
);

closeBtn.addEventListener('click', closeMenu);

menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
        closeMenu();
    }
});


const portfolioGrid = document.getElementById('portfolioGrid');

function addPhoto({ url, link, alt, title }) {
    const item = document.createElement('div');
    item.className = 'portfolio__item';

    const a = document.createElement('a');
    a.className = 'portfolio__link';
    a.href = link || '#';

    const img = document.createElement('img');
    img.src = url;
    img.alt = alt;
    img.className = 'portfolio__img';
    img.loading = 'lazy';

    const overlay = document.createElement('div');
    overlay.className = 'portfolio__overlay';
    overlay.textContent = title;

    a.append(img, overlay);
    item.appendChild(a);
    portfolioGrid.appendChild(item);
}

// --- Back to Top button ---
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



const contactBtn = document.getElementById('contact-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        contactBtn.classList.add('contact-btn--visible');
    } else {
        contactBtn.classList.remove('contact-btn--visible');
    }
});





const dropdown = document.querySelector('.menu__dropdown');
const toggle = dropdown.querySelector('.menu__dropdown-toggle');

toggle.addEventListener('click', (e) => {
    e.stopPropagation(); // empêche la fermeture du menu
    const isOpen = dropdown.classList.toggle('menu__dropdown--open');
    toggle.setAttribute('aria-expanded', isOpen);
});

/* Fermer le dropdown quand on clique sur un sous-lien */
dropdown.querySelectorAll('.menu__sublink').forEach(link => {
    link.addEventListener('click', () => {
        dropdown.classList.remove('menu__dropdown--open');
    });
});
document.querySelectorAll('.portfolio__img__focus').forEach(img => {
    img.addEventListener('click', () => {

        const overlay = document.createElement('div');
        overlay.className = 'image-focus';

        const content = document.createElement('div');
        content.className = 'image-focus__content';

        const clone = img.cloneNode(true);

        content.appendChild(clone);
        overlay.appendChild(content);
        document.body.appendChild(overlay);

        // clic n'importe où → fermer
        overlay.addEventListener('click', () => {
            overlay.remove();
        });

        // ESC → fermer
        document.addEventListener('keydown', function esc(e) {
            if (e.key === 'Escape') {
                overlay.remove();
                document.removeEventListener('keydown', esc);
            }
        });
    });
});


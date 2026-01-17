document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("serviceSelect");

    document.querySelectorAll(".tab-content").forEach(tab => {
        const category = tab.id.replace("tab-", "").toUpperCase();

        const optgroup = document.createElement("optgroup");
        optgroup.label = category;

        tab.querySelectorAll("li").forEach(li => {
            const title = li.querySelector("span")?.innerText;
            const subcats = li.querySelectorAll(".subcat li");

            if (subcats.length > 0) {
                subcats.forEach(sub => {
                    const length = sub.children[0].innerText;
                    const price = sub.children[1].innerText;

                    const option = document.createElement("option");
                    option.value = `${title} - ${length}`;
                    option.textContent = `${title} (${length}) – ${price}`;
                    optgroup.appendChild(option);
                });
            }
            else if (li.children.length === 2) {
                const price = li.children[1].innerText;

                const option = document.createElement("option");
                option.value = title;
                option.textContent = `${title} – ${price}`;
                optgroup.appendChild(option);
            }
        });

        if (optgroup.children.length > 0) {
            select.appendChild(optgroup);
        }
    });
});


// BURGER MENU
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');
burger.addEventListener('click', () => nav.classList.toggle('active'));
document.querySelectorAll('nav a, .hero-btn').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        nav.classList.remove('active');
    });
});

// LIGHTBOX
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('show');
        lightboxImg.src = img.src;
    });
});
lightbox.addEventListener('click', () => lightbox.classList.remove('show'));

// PARTICLES HERO
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.width = `${Math.random() * 8 + 4}px`;
    particle.style.height = `${Math.random() * 8 + 4}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 8 + 5}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particlesContainer.appendChild(particle);
}
document.addEventListener('mousemove', e => {
    document.querySelectorAll('.particle').forEach(p => {
        let x = parseFloat(p.style.left);
        x += (e.clientX / window.innerWidth - 0.5) * 0.5;
        p.style.left = `${x}%`;
    });
});


// GALLERY FILTER
const filterButtons = document.querySelectorAll('.gallery-filter button');
const galleryItems = document.querySelectorAll('.gallery-grid img');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        let filter = btn.dataset.filter;
        galleryItems.forEach(img => {
            if (filter === 'all' || img.dataset.category === filter) { img.style.display = 'block'; } else { img.style.display = 'none'; }
        });
    });
});

// SERVICES TABS
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const tab = this.dataset.tab;
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        document.getElementById('tab-' + tab).classList.add('active');
    });
});


// slider avant/après
const baContainer = document.querySelector('.ba-image');
const baResize = document.querySelector('.ba-resize');
const baAfter = baContainer.querySelector('img:last-child');

baContainer.addEventListener('mousemove', e => {
    const rect = baContainer.getBoundingClientRect();
    let x = e.clientX - rect.left;
    if (x < 0) x = 0; if (x > rect.width) x = rect.width;
    baAfter.style.clipPath = `inset(0 ${rect.width - x}px 0 0)`;
    baResize.style.left = `${x}px`;
});
document.querySelector('.cta-float').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#booking')
        .scrollIntoView({ behavior: 'smooth' });
});
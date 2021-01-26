const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelector('.navbar-links');
const navLis = document.querySelectorAll('.navbar-links li');
let scrolled = false;

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    navbar.classList.toggle('navbar-expanded');
});

for (let navLi of navLis) {
    navLi.addEventListener('click', () => {
        navbarLinks.classList.remove('active');
        navbar.classList.remove('navbar-expanded');
    });
}

// Scrollspy
let section = document.querySelectorAll('.section');
let sections = {};
let i = 0;

Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop - 200;
    if (e.id === 'contact') {
        sections[e.id] = e.offsetTop - 400;
    }
});

window.onscroll = function () {
    let scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;

    // transparent navbar background
    if (scrollPosition > 100) {
        navbar.classList.remove('top');
        if (!scrolled) {
            navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(function () {
            navbar.style.transform = 'translateY(0)';
            scrolled = true;
        }, 200);
    } else {
        navbar.classList.add('top');
        scrolled = false;
    }

    // Scrollspy
    for (i in sections) {
        if (sections[i] <= scrollPosition) {
            if (navbarLinks.querySelector(`a[href='#${i}']`)) {
                document.querySelector('.current').setAttribute('class', ' ');
                navbarLinks
                    .querySelector(`a[href='#${i}']`)
                    .setAttribute('class', 'current');
            }
        }
    }
};

// Smooth Scrolling
$('#navbar a, .btn:not(.page)').on('click', function (e) {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
        {
            scrollTop: $(hash).offset().top - 100
        },
        800
    );
});

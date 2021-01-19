const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelector('.navbar-links');
const navLis = document.querySelectorAll('.navbar-links li');

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

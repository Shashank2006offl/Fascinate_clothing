// Select the elements
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.navmenu');
const header = document.querySelector('header');

// Function to toggle the menu visibility
function toggleMenu() {
    navMenu.classList.toggle('show');
}

// Add click event listener to the menu icon
menuIcon.addEventListener('click', toggleMenu);

// Add scroll event listener to make header sticky
window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 0);
});
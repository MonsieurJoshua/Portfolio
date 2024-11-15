// Select elements
const body = document.body;
const btnTheme = document.querySelector('.theme-toggle');
const btnHamburger = document.querySelector('.hamburger-toggle');

// Function to add theme classes
const addThemeClass = (bodyClass, btnClass) => {
    body.classList.add(bodyClass);
    btnTheme.classList.add(btnClass);
};

// Retrieve saved theme settings from localStorage
const getBodyTheme = localStorage.getItem('portfolio-theme');
const getBtnTheme = localStorage.getItem('portfolio-btn-theme');

// Apply saved theme settings
if (getBodyTheme && getBtnTheme) {
    addThemeClass(getBodyTheme, getBtnTheme);
}

// Check if current theme is dark
const isDark = () => body.classList.contains('dark');

// Set the theme
const setTheme = (bodyClass, btnClass) => {
    body.classList.remove(localStorage.getItem('portfolio-theme') || '');
    btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme') || '');

    addThemeClass(bodyClass, btnClass);

    localStorage.setItem('portfolio-theme', bodyClass);
    localStorage.setItem('portfolio-btn-theme', btnClass);
};

// Toggle theme
const toggleTheme = () => {
    isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun');
};

// Event listener for theme toggle
btnTheme.addEventListener('click', toggleTheme);

// Toggle navigation menu
const toggleNavMenu = () => {
    const navUl = document.querySelector('.nav__list');
    btnHamburger.classList.toggle('fa-bars');
    btnHamburger.classList.toggle('fa-times');
    navUl.classList.toggle('display-nav-list');
};

// Event listener for hamburger menu toggle
btnHamburger.addEventListener('click', toggleNavMenu);

// Scroll-to-top button visibility
const handleScroll = () => {
    const btnScrollTop = document.querySelector('.scroll-top');
    const scrollPosition = document.documentElement.scrollTop || body.scrollTop;

    if (scrollPosition > 500) {
        btnScrollTop.style.display = 'block';
    } else {
        btnScrollTop.style.display = 'none';
    }
};

// Scroll event for scroll-to-top functionality
document.addEventListener('scroll', handleScroll);

// Smooth scroll to top
document.querySelector('.scroll-top a')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

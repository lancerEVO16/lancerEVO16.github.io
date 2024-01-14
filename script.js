const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');
    }
    else {
        navEl.classList.remove('navbar-scrolled');
    }
});
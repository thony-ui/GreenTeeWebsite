function navToggle() {
    
    document.body.classList.toggle('nav-open');

}

function navLinks() {
    const navLinks = document.querySelectorAll('.nav__link')
    navLinks.forEach(link => {
            document.body.classList.remove('nav-open');
    })
}

export {navToggle, navLinks}
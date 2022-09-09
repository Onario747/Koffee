const navLinks = document.querySelector('.navlinks')
const menuBtn = document.querySelector('.menubtn')

menuBtn.addEventListener('click', ()=> {
    navLinks.classList.toggle('active')
})
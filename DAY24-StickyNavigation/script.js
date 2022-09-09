const navbox = document.querySelector('nav')

window.addEventListener('scroll', ()=>{
    if (window.scrollY > navbox.offsetHeight + 150) {
        navbox.classList.add('active')
        
    }else {
        navbox.classList.remove('active')
    }
})
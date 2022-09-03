const leftArrow = document.querySelector('.arrow.left-arrow')
const RightArrow = document.querySelector('.arrow.right-arrow')
const slides = document.querySelectorAll('.slide')
const body = document.body
let cur_index = 0

leftArrow.addEventListener('click', () => {
    slides[cur_index].classList.remove('active')
    cur_index--
    if(cur_index < 0) {
        cur_index = 3
    }
    slides[cur_index].classList.add('active')
    body.style.backgroundImage = slides[cur_index].style.backgroundImage
})

RightArrow.addEventListener('click', () => {
    slides[cur_index].classList.remove('active')
    cur_index++
    if(cur_index > 3) {
        cur_index = 0
    }
    slides[cur_index].classList.add('active')
    body.style.backgroundImage = slides[cur_index].style.backgroundImage
})
const actionButtons = document.querySelectorAll('.action-buttons button')
const leftSlide = document.querySelector('.left-slide')
const rightSlide = document.querySelector('.right-slide')

let cursSideNum = 0

leftSlide.style.top = `-${3 * 100}vh`

actionButtons[0].addEventListener('click', () => {
    cursSideNum++
    if(cursSideNum > 3) {
        cursSideNum = 0
    }
    scrollSlide()
})

actionButtons[1].addEventListener('click', () => {
    cursSideNum--
    if(cursSideNum < 0) {
        cursSideNum = 3
    }
    scrollSlide()
})

const scrollSlide = ()=>{
    leftSlide.style.transform = `translateY(${cursSideNum*100}%)`
    rightSlide.style.transform = `translateY(-${(cursSideNum*100)}%)`
}
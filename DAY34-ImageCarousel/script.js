const preBtn = document.querySelector('#pre')
const nextBtn = document.querySelector('#next')
const imgs = document.querySelector('#imgs')
const imglist = document.querySelectorAll('.img-container img')

let index = 0

let interval = setInterval(run, 4000)

preBtn.addEventListener('click', () => {
    index--
    changeImage()
    resetInterval()
})

nextBtn.addEventListener('click', () => {
    index++
    changeImage()
    resetInterval()
})

function run() {
    index++
    changeImage()
}

function changeImage() {
    if(index > imglist.length - 1) {
        index = 0
    } else if(index < 0) {
        index = imglist.length - 1
    }

    imgs.style.transform = `translateX(${-index * 100}%)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 4000)
}
const backgroundEl = document.querySelector('.background')
const pasEl = document.querySelector('#password')

pasEl.addEventListener('input', () => {
    let val = pasEl.value
    backgroundEl.style.filter = `blur(${20 - val.length}px)`
})
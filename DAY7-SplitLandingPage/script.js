const left = document.querySelector('.split.left')
const right  = document.querySelector('.split.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => container.classList.add('hov-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hov-left'))

right.addEventListener('mouseenter', () => container.classList.add('hov-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hov-right'))
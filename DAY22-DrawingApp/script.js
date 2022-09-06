const jiaBtn = document.querySelector('.jia')
const jianBtn = document.querySelector('.jian')
const sizeBtn = document.querySelector('.size')
const colorBtn = document.querySelector('.color')
const quxiaoBtn = document.querySelector('.quxiao')
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d')

// canvas初始属性
let size = 5
let isPressed = false
colorBtn.value = 'black'
let color = colorBtn.value
let x
let y

jiaBtn.addEventListener('click', () => {
    size = size >= 50 ? size : size + 5
    sizeBtn.innerHTML = size
})

jianBtn.addEventListener('click', () => {
    size = size <= 5 ? size : size - 5
    sizeBtn.innerHTML = size
})

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

quxiaoBtn.addEventListener('click', ()=>{
    ctx.clearRect(0,0, canvas.width, canvas.height)
})

colorBtn.addEventListener('change', ()=>{
    color = colorBtn.value
})
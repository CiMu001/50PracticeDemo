const box = document.querySelector('#container')
const row = document.querySelector('#row')
const col = document.querySelector('#col')
const colors = ['#6896b7', '#db8ea6', '#7b9361', '#b85b6c', '#dd8a94']
const baseColor = '#1d1d1d'
let total = row.value * col.value

createBoard()

row.addEventListener('input', () => { total = row.value * col.value; createBoard() })
col.addEventListener('input', () => { 
    total = row.value * col.value;
    box.style.width = `${20*col.value}px`
    createBoard()
})

function createBoard() {
    box.innerHTML = ''

    console.log(total, 'createBoard')
    for(let i = 0; i<total; i++) {
        const item = document.createElement('div')
    
        item.classList.add('item')
        item.addEventListener('mouseover', () => {setColor(item)})
        item.addEventListener('mouseout', () => {removeColor(item)})
        box.appendChild(item)
    }
}

function setColor(e) {
    const color = randomColor()
    e.style.background = color
    e.style.boxShadow = `0 0 10px ${color}`
}

function removeColor(e) {
    e.style.background = baseColor
    e.style.boxShadow = `0 0 2px ${baseColor}`
}

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
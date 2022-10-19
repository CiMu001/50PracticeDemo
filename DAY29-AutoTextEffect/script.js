const txtBox = document.querySelector('.txt-box')
const input = document.querySelector('#speed')

let cur = 1
const text = 'We Love progarmming?'
let speedVal = 500 / Math.floor(input.value)

autoText()

function autoText() {
    txtBox.innerText = text.slice(0, cur)

    cur++
    if(cur > text.length) {
        cur = 1
    }
    setTimeout(autoText, speedVal)
}

input.addEventListener('input', (e) => speedVal = 500 / e.target.value)
const genbtn = document.querySelector('#generator')
const showel = document.querySelector('.show')
const copyBtn = document.querySelector('#copy')
const toasts = document.querySelector('.toasts')


genbtn.addEventListener('click', ()=>{
    const state = getStrState()
    const str = generatorStr(state)
    showel.innerText = str
})

copyBtn.addEventListener('click', () => {
    const str = showel.innerText

    if (!str) {
        createAlertCard('err','错误: 并未生成一个字符串')
        return
    }

    navigator.clipboard.writeText(str)
    createAlertCard('info', '复制成功！')
})

function generatorStr(state) {
    let string = ''
    for(let i = 0; i< state.strLen; i++) {
        const randomnum = Math.floor(Math.random() * state.typeMap.length)
        string += state.typeMap[randomnum]()
    }

    return string
}

function getStrState() {
    const strLen = document.querySelector('#strlen').value
    const isupper = document.querySelector('#uppercase').checked
    const islower = document.querySelector('#lowercase').checked
    const isnum = document.querySelector('#numbers').checked
    const issmy = document.querySelector('#symbols').checked
    const typeMap = [
        !isupper || getRandomUpper, !islower || getRandomLower,
        !isnum || getRandomNumber, !issmy || getRandomSymbol
    ].filter( type => typeof(type) !== 'boolean')
    return { strLen, typeMap }
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function createAlertCard(type, msg) {
    const node = document.createElement('div')
    node.classList.add('toast')
    node.classList.add(type)
    node.innerText = msg
    toasts.appendChild(node)
    setTimeout(() => {
        node.remove() 
    }, 4000)
}
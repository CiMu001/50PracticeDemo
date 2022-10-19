const goodel = document.querySelector('#good')
const cheapel = document.querySelector('#cheap')
const fastel = document.querySelector('#fast')
const toasts = document.querySelector('.toasts')

goodel.addEventListener('input', function(e){
    const isGood = goodel.checked
    const isCheap = cheapel.checked
    const isFast = fastel.checked

    if(isCheap && isFast & isGood) {
        cheapel.checked = false
        createAlertCard('err','质量、成本、时间无法兼得^_^!')
    }
})

cheapel.addEventListener('input', function(e){
    const isGood = goodel.checked
    const isCheap = cheapel.checked
    const isFast = fastel.checked
    
    if(isCheap && isFast & isGood) {
        fastel.checked = false
        createAlertCard('err','质量、成本、时间无法兼得^_^!')
    }
})

fastel.addEventListener('input', function(e){
    const isGood = goodel.checked
    const isCheap = cheapel.checked
    const isFast = fastel.checked
    
    if(isCheap && isFast & isGood) {
        goodel.checked = false
        createAlertCard('err','质量、成本、时间无法兼得^_^!')
    }
})

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
const toasts = document.querySelector('.toasts')
const btn = document.querySelector('.btn')

const mes = [
    '我是消息通知一， 我可以长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长一点！',
    '我是消息通知二， 我最好是可以出现~',
    '我是消息通知三， 你看到我的时候我就已经出现了^_^'
]

const noteType = ['err', 'success', 'info']

btn.addEventListener('click', function(){
    const node = document.createElement('div')
    const rangeNum = Math.floor(Math.random() * mes.length)
    node.classList.add('toast')
    node.classList.add(noteType[rangeNum])
    node.innerText = mes[rangeNum]
    toasts.appendChild(node)
    setTimeout(() => {
        node.remove() 
    }, 4000)
})
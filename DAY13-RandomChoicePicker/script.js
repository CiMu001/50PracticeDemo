const textarea = document.getElementById('textarea')
const lableBox = document.querySelector('.lableBox')

textarea.addEventListener('keyup', (e) => {
    textarea.value = textarea.value.trim()
    let value = e.target.value

    createLable(value)
    if (e.key === 'Enter' && textarea.value !== '') {
        textarea.value = ''

        randomSelect()
    }
})


function createLable(value) {
    const labels = value.split(/，|,/).filter(i => i.trim() !== '')
    lableBox.innerHTML = ''

    labels.forEach(label => {
        const labEL = document.createElement('span')
        labEL.classList.add('item')
        labEL.innerText = label
        lableBox.appendChild(labEL)
    })
}

function randomSelect() {
    const times = 20

    const interval = setInterval(() => {
        const randomTag = pickRandom()
        randomTag.classList.add('selected')

        setTimeout(() => {
            randomTag.classList.remove('selected')
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandom()
            randomTag.classList.add('selected')
        }, 100)

    }, times * 100)
}

function pickRandom() {
    const items = document.querySelectorAll('.item')
    return items[Math.floor(Math.random() * items.length)]
}
const counters = document.querySelectorAll('.counter')

counters.forEach(item => {
    item.innerText = '0'
    
    const counterData = +item.getAttribute('counter-data')
    const base = counterData / 200

    const count = () => {
        const current = +item.innerText

        if(current < counterData) {
            item.innerText = `${Math.ceil(current + base)}`
            setTimeout(count, 1)
        } else {
            item.innerText = counterData
        }
    }

    count()
})
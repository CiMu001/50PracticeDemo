const items = document.querySelectorAll('.item')

items.forEach(item => {
    item.addEventListener('click', () => {
        removeSelected()
        item.classList.add('select')
    })
})


function removeSelected() {
    items.forEach(item => {
        item.classList.remove('select')
    })
}

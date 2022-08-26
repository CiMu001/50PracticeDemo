const collapses = document.querySelectorAll('.collapse')

console.log(collapses, 'collapses')
collapses.forEach(collapse => {
    const downBtn = collapse.querySelector('.fa-chevron-down')
    downBtn.addEventListener('click', () => {
        collapse.classList.add('active')
    })

    const closeBtn = collapse.querySelector('.fa-times')
    closeBtn.addEventListener('click', () => {
        collapse.classList.remove('active')
    })
});

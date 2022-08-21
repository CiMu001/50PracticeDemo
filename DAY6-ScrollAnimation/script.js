const items = document.querySelectorAll('.item')

window.addEventListener('scroll', showBox)

showBox()

function showBox() {
    const triggrtBottom = window.innerHeight - 200

    items.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        console.log({boxTop, triggrtBottom})
        if(boxTop < triggrtBottom) {
            box.classList.add('show')
        }else {
            box.classList.remove('show')
        }
    })
}
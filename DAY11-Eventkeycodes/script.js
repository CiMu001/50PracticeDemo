const showTxt = document.querySelector('.container')

window.addEventListener('keydown', (event) => {
    console.log(event)
    showTxt.innerHTML = `
    <div class="item">
        <span>event.key</span>
        <span>${event.key === ' ' ? 'space' : event.key}</span>
    </div>
    <div class="item">
        <span>event.keyCode</span>
        <span>${event.keyCode}</span>
    </div>
    <div class="item">
        <span>event.code</span>
        <span>${event.code}</span>
    </div>
    `
})

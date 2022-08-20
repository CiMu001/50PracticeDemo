const loadingTxt = document.querySelector('.loading-txt')
const bg = document.getElementById('bg')

let load = 0

let loadVal = setInterval(loading, 20)

function loading() {
    load++

    if(load>99){
        clearInterval(loadVal)
        loadingTxt.remove()
    }

    loadingTxt.innerText = `${load}%`
    loadingTxt.style.opacity = `calc(${load} / 100)`
    bg.style.filter = `blur(${20-load / 5}px)`
}
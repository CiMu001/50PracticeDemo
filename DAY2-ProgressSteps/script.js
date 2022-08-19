const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const steps = document.querySelectorAll('.step')

let currentActive = 1

function rander() {
    steps.forEach((step, index) => {
        if(index < currentActive){
            step.classList.add('active')
        } else {
            step.classList.remove('active')
        }
    })

    progress.style.width = `calc(${(currentActive-1) / (steps.length-1) * 100}%)`

    if(currentActive === 1){
        prev.disabled = true
    } else {
        prev.disabled = false
    }

    if(currentActive === steps.length){
        next.disabled = true
    } else {
        next.disabled = false
    }
}

prev.addEventListener('click', ()=>{
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    rander()
})

next.addEventListener('click', ()=>{
    currentActive++
    if(currentActive > steps.length) {
        currentActive = steps.length
    }

    rander()
})

steps.forEach((element, index) => {
    element.addEventListener('click', ()=>{
        currentActive = index+1
        rander()
    })
});

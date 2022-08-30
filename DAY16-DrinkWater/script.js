const cups = document.querySelectorAll('.cup.small')
const remainedEl = document.querySelector('.remained')
const percentageEl = document.querySelector('.percentage')

cups.forEach((cup, index) => {
    cup.addEventListener('click', () => selectCup(index))
})

function selectCup(idx) {
    let cupSum = 0;
    cups.forEach((cup, index) => {
        if(idx === index) {
            if(!(cups[index+1] && cups[index+1].classList.contains('full'))){
                cup.classList.toggle('full')
            }
        }else if(index < idx) {
            cup.classList.add('full')
        }else {
            cup.classList.remove('full')
        }
        if(cup.classList.contains('full')) {
            cupSum++
        }
    })

    countWater(cupSum)
}

function countWater(cupSum) {
    let percentage = cupSum / 8 * 100
    let remained = 100 - percentage
    if(cupSum === 8) {
        remainedEl.style.visibility = 'hidden'
    }else if(cupSum === 0) {
        percentageEl.style.visibility = 'hidden'
    }else {
        remainedEl.style.visibility = 'visible'
        percentageEl.style.visibility = 'visible'
    }
    
    remainedEl.style.height = `${remained}%`
    percentageEl.style.height = `${percentage}%`
    percentageEl.innerText = `${percentage}%`
 }
const nums = document.querySelectorAll('.num span')
const count = document.querySelector('.count')
const end = document.querySelector('.end')
const reBtn = document.querySelector('.end button')

runCount()

function runCount() {
    nums.forEach((num, index) => {
        const lastIndex = nums.length - 1

        num.addEventListener('animationend', (e) => {
            if(e.animationName === 'goIn' && index !== lastIndex) {
                num.classList.remove('in')
                num.classList.add('out')
            }else if(e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                count.classList.add('hide')
                end.classList.add('show')
            }
        })
    })
}

function restDom() {
    count.classList.remove('hide')
    end.classList.remove('show')

    nums.forEach((num) => {
        num.classList.value = ''
    })

    nums[0].classList.add('in')
}

reBtn.addEventListener('click', () => {
    restDom()
    runCount()
})
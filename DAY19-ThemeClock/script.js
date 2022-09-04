const themeBnt = document.querySelector('button')
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

themeBnt.addEventListener('click', (e)=>{
    const bodyEl = document.querySelector('body')
    bodyEl.classList.toggle('dark')
    e.target.innerHTML = e.target.innerHTML === 
        '白天模式' ? '黑夜模式' : '白天模式'
})

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    console.log(minutes, hoursForClock)
    hourEl.style.transform = `translate(0%, -50%) rotate(${~~hoursForClock * 30 - 90}deg)`
    minuteEl.style.transform = `translate(0%, -50%) rotate(${~~minutes * 6 - 90}deg)`
    secondEl.style.transform = `translate(0%, -50%) rotate(${~~seconds * 6 - 90}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span>${date}</span>`
}

setTime() 
setInterval(setTime, 1000)
const rangeNum = document.querySelector('.rangenum');
const range = document.querySelector('#myRange');
const body = document.body;
rangeNum.innerHTML = range.value;

range.addEventListener('input', function(){
    const num = parseInt(range.value);
    rangeNum.innerHTML = range.value;
    rangeNum.style.left = `calc(50% + ${4 * num}px - 200px)`;

    body.style.backgroundColor = `rgb(255, ${num * 2 + 25}, 255)`;
})
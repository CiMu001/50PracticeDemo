const colors = [
    '#05348b', '#f9a647', '#ffd301', '#535386', 
    '#013e29', '#fff', '#091c60', '#f82239'
];

const btn = document.querySelector('.btn');
const input = document.querySelector('#msg');
const container = document.querySelector('.container')

btn.addEventListener('click', function(){
    if(!input.value) { return; }
    const radomSpeed = Math.floor(Math.random() * 8);
    const radomColor = colors[parseInt(Math.random() * colors.length)]
    const newMsg = document.createElement('div');
    newMsg.classList.add('msg');
    newMsg.innerHTML = input.value;
    newMsg.style.color = radomColor;
    container.appendChild(newMsg);
    createBulletChat(newMsg, radomSpeed);
    input.value = '';
})

function createBulletChat(msg, speed) {
    const radomTop = Math.floor(Math.random()*60);
    const containerWidth = container.clientWidth;
    const msgWidth = msg.clientWidth;

    let left = containerWidth;
    msg.style.left = `${left}px`;
    msg.style.top = `${radomTop + 5}%`;

    let time = 0;
    let settiem = setInterval(() => {
        left--;
        msg.style.left = `${left}px`;
        if(left <= -msgWidth) {
            left = containerWidth;
            time++;
        }
        if(time > 2) {
            msg.remove();
            clearInterval(settiem);
        }
    }, speed);

   }
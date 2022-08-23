const btn = document.querySelector('.btn')
const txt = document.querySelector('.txt')

generateLove()

async function generateLove() {
    const res = await fetch('https://api.uomg.com/api/rand.qinghua?format=json')
    const data = await res.json()

    txt.innerHTML = data.content
}

btn.addEventListener('click', generateLove)
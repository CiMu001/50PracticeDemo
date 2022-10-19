const apiurl = 'https://api.github.com/users/'

const toasts = document.querySelector('.toasts')
const search = document.getElementById('search')
const form = document.querySelector('#form')
const main = document.querySelector('main')

async function getUser(username) {
    try {
        const {data} = await axios(apiurl + username)
        console.log(data)
        createUserCard(data)
        getRepos(username)
    }catch(err) {
        createErrCard('错误:' + err) 
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value;

    if (user) {
        getUser(user)

        search.value = ''
    }
})

async function getRepos(username) {
    try {
        const { data } = await axios(apiurl + username + '/repos?sort=created')

        const repos = document.querySelector('.repos')

        data.slice(0, 5).forEach(repo => {
            const item = document.createElement('a')
            item.classList.add('item')
            item.href = repo.html_url
            item.target = '_blank'
            item.innerText = repo.name

            repos.appendChild(item)
        })
    } catch(err) {
        createErrCard('错误:' + err)
    }
}

function createErrCard(err) {
    const node = document.createElement('div')
    node.classList.add('toast')
    node.classList.add('err')
    node.innerText = err
    toasts.appendChild(node)
    setTimeout(() => {
        node.remove() 
    }, 4000)
}

function createUserCard(data) {
    const cardUserInfo = `
    <div class="card">
        <div class="avatar">
            <img src="${data.avatar_url}" alt="${data.name}">
        </div>
        <div class="user-info">
            <h2 class="name">${data.name}</h2>
            <p class="qm">${data.bio}</p>
            <div class="user-state">
                <span>${data.followers}Followers</span><span>${data.following}Following</span><span>${data.public_repos}Repos</span>
            </div>
            <div class="repos">
            </div>
        </div>
    </div>
    `
    
    main.innerHTML = cardUserInfo
}
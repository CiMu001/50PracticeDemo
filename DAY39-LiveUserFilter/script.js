const userList = [
    {
        name: '杨40',
        location: '江苏南京，大厂'
    },{
        name: '柴一品',
        location: '江苏徐州，天山绿洲'
    },{
        name: 'CiMu',
        location: '江苏徐州，铜山区'
    },{
        name: 'YEDA',
        location: '安徽芜湖'
    },{
        name: '王启明',
        location: '江苏南京，栖霞区'
    },{
        name: '夏思寒',
        location: '江苏淮安'
    },{
        name: 'YYX',
        location: '江苏南京，鼓楼区'
    },{
        name: '尹涛',
        location: '江苏镇江，首富儿子'
    },{
        name: '刘明朝',
        location: '江苏南通'
    },{
        name: '朱梦涛',
        location: '江苏连云港'
    },{
        name: '北大青鸟-徐州',
        location: '江苏徐州'
    },{
        name: '鳖鳖',
        location: '江苏徐州，贾汪区'
    }
]

const inputEl = document.querySelector('#keyword')

inputEl.addEventListener('input', function() {
    const filterUserList = userList.filter(user => {
        console.log(user.name.indexOf(this.value) !== -1)
        if(user.name.indexOf(this.value) !== -1 || user.location.indexOf(this.value) !== -1){
            return user
        }
    })
    console.log(filterUserList, this.value)
    createUserEl(filterUserList)
})

function createUserEl(users) {
    const userbox = document.querySelector('.container .body')
    userbox.innerHTML = ''
    users.forEach(user => {
        const elString = `
            <img src="../DAY1-ExpandingCards/image/p2.jpg" alt="头像">
            <div class="user">
                <div class="name">${user.name}</div>
                <div class="info">${user.location}</div>
            </div>
        `
        const userel = document.createElement('div')
        userel.classList.add('item')
        userel.innerHTML = elString
        userbox.appendChild(userel)
    })
}

createUserEl(userList)
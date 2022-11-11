const todos = document.querySelector('.todos');
const pagingUl = document.querySelector('.paging ul');
const addinputel = document.querySelector('.addinput');

let todosArr = JSON.parse(localStorage.getItem('todos')) ? 
JSON.parse(localStorage.getItem('todos')) : [];

const pageSize = 9;
let pageAll = allPage(pageSize);
let curPage = 1;

todosArr.forEach((item, index) => { if(index>=9) {return}; addNewTodo(item); })

totalize();
paging();

// 监听新增输入框回车事件
addinputel.addEventListener('keydown', function(e){
    if(e.keyCode !== 13){
        return;
    }
    const txt = this.value.trim();
    if(txt === '') {
        this.value = '';
        return;
    }

    if(txt.length > 14){alert('超过14字将会显示不全！')}

    const newtodo = {
        id: todosArr.length + 1,
        txt,
        state: false
    }
    todosArr.push(newtodo);
    localStorage.setItem('todos', JSON.stringify(todosArr));
    curPage = Math.ceil(todosArr.length / pageSize);
    paging();
    jumpPage(curPage);
    totalize();

    this.value = '';
    this.focus();
})

// 计算统计信息
function totalize() {
    const allEl = document.querySelector('.total .all');
    const undoneEl = document.querySelector('.total .undone');
    const doneEl = document.querySelector('.total .done');

    const all = todosArr.length;
    let undone = 0;
    let done = 0;

    todosArr.forEach(item => {item.state ? done++ : undone++})
    allEl.innerHTML = all;
    undoneEl.innerHTML = undone;
    doneEl.innerHTML = done;
}

function allPage() {
    return Math.ceil(todosArr.length / pageSize)
}

// 页面跳转
function jumpPage(pageNum) {
    const showTods = todosArr.filter((item, index) => {
        let satrt = (pageNum - 1) * 9;
        let end = pageNum * 9;
        if(index >= satrt && index <= end) {
            return item;
        }
    });

    drawtodos(showTods);
    switchPage();
}

// 分页器页码切换
function switchPage() {
    const pageNumsEl = document.querySelectorAll('.paging ul li');
    const total = document.querySelector('.paging ul span');

    pageNumsEl.forEach((item, index) => {
        index + 1 === curPage ? item.classList.add('curpage') : item.classList = '';
    })

    if(total) {
        total.innerHTML = `${curPage}/${pageAll}`;
    }
}

//绘制分页器
function paging() {
    pageAll = allPage(pageSize);
    pagingUl.innerHTML = '';
    if(pageAll < 2) { return; }

    let i = 1;
    while(i <= pageAll) {
        const pageNumEl = document.createElement('li');
        pageNumEl.innerHTML = i;
        pagingUl.appendChild(pageNumEl);
        i++;
    }

    const pageNumsEl = document.querySelectorAll('.paging ul li');
    pageNumsEl.forEach((item, index) => {
        item.addEventListener('click', function() {
            curPage = index + 1;
            jumpPage(curPage);
            switchPage();
        })
    });

    const total = document.createElement('span');
    total.innerHTML = `${curPage}/${pageAll}`;
    pagingUl.appendChild(total);
    switchPage();
}

// 绘制todos
function drawtodos(todosArr) {
    todos.innerHTML = '';
    todosArr.forEach(item=> addNewTodo(item));
}

// 新增todo
function addNewTodo(todo) {
    const newtodo = document.createElement('li');
    newtodo.innerHTML = `
        <label for="todo${todo.id}">
            <input type="checkbox" name="state" id="todo${todo.id}" class="checkinput" ${todo.state ? "checked" : ""}>
            <input type="text" name="txt" id="txt${todo.id}" class="txtinput" autocomplete="false" value="${todo.txt}" disabled>
        </label>
        <div class="tool">
            <i class="iconfont icon-edit"></i>
            <i class="iconfont icon-delete"></i>
        </div>
    `;

    todos.appendChild(newtodo)

    const editEl = newtodo.querySelector('.icon-edit');
    const delEL = newtodo.querySelector('.icon-delete');
    const txtInputEl = newtodo.querySelector('.txtinput');
    const checkinputEl = newtodo.querySelector('.checkinput');
    const labelEl = newtodo.querySelector('label');

    editEl.addEventListener('click', function(){
        if(todo.state || !txtInputEl.disabled) {
            return;
        }

        txtInputEl.disabled = false;
        txtInputEl.focus()
        txtInputEl.selectionStart = txtInputEl.selectionEnd = txtInputEl.value.length;
        editEl.classList.add('active');
    });

    delEL.addEventListener('click', function() {
        deleteTodo(todo.id, newtodo);
    })

    txtInputEl.addEventListener('blur', function() {
        if(this.disabled) {
            return;
        }
        
        txtInputEl.disabled = true;
        updateTodo(todo.id, this.value, 'txt');
        editEl.classList.remove('active');
    })

    labelEl.addEventListener('mousedown', function(e) {
        if(e.target.name === 'state') return;

        if(txtInputEl.disabled && e.button === 0) {
            checkinputEl.checked = true;
            updateTodo(todo.id, checkinputEl.checked, 'state');
            totalize();
        }

        if(e.button === 2) {
            deleteTodo(todo.id, newtodo);
        }
    })

    checkinputEl.addEventListener('input', function(e){
        updateTodo(todo.id, this.checked, 'state');
        totalize();
        paging();
    })
}

// 更新todo
function updateTodo(id, value, key) {
    todosArr = todosArr.map((item) => {
        if(item.id === id) {
            item[key] = value;
        }
        return item;
    })
    localStorage.setItem('todos', JSON.stringify(todosArr))
}

// 删除todo
function deleteTodo(id, el) {
    if(confirm('确实删除?')) {
        todosArr = todosArr.filter(item => item.id !== id);
        localStorage.setItem('todos', JSON.stringify(todosArr))
        el.remove();
    }

    totalize();
    if(todosArr.length < ((curPage - 1) * pageSize) + 1) {
        curPage--;
        paging();
        jumpPage(curPage);
    }
}
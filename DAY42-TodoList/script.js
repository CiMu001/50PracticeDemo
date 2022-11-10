const todos = document.querySelector('.todos');
const addinputel = document.querySelector('.addinput');
let todosArr = JSON.parse(localStorage.getItem('todos')) ? 
JSON.parse(localStorage.getItem('todos')) : [];

todosArr.forEach(item => { addNewTodo(item); })

totalize();

addinputel.addEventListener('keydown', function(e){
    if(e.keyCode !== 13){
        return;
    }
    const newtodo = {
        id: todosArr.length + 1,
        txt: this.value,
        state: false
    }
    todosArr.push(newtodo);
    localStorage.setItem('todos', JSON.stringify(todosArr))
    addNewTodo(todosArr[newtodo.id - 1]);

    this.value = '';
    this.focus();
})


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
        if(todo.state) {
            return;
        }
        if(txtInputEl.disabled) {
            txtInputEl.disabled = false;
            txtInputEl.focus()
            txtInputEl.selectionStart = txtInputEl.selectionEnd = txtInputEl.value.length;
            editEl.classList.add('active');
        } else {
            txtInputEl.disabled = true;
            editEl.classList.remove('active');
        }
    });

    delEL.addEventListener('click', function() {
        deleteTodo(todo.id, newtodo);
    })

    txtInputEl.addEventListener('blur', function() {
        if(this.disabled === false) {
            txtInputEl.disabled = true;
            updateTodo(todo.id, this.value, 'txt');
            editEl.classList.remove('active');
        }
    })

    labelEl.addEventListener('mousedown', function(e) {
        if(txtInputEl.disabled && e.button === 0) {
            checkinputEl.checked = true;
            updateTodo(todo.id, checkinputEl.checked, 'state');
            totalize();
        }

        if(e.button === 2) {
            deleteTodo(todo.id, newtodo);
        }
    })

    checkinputEl.addEventListener('input', function(){
        updateTodo(todo.id, this.checked, 'state');
        totalize();
    })

    totalize();
}

function updateTodo(id, value, key) {
    todosArr = todosArr.map((item) => {
        if(item.id === id) {
            item[key] = value;
        }
        return item;
    })
    localStorage.setItem('todos', JSON.stringify(todosArr))
}

function deleteTodo(id, el) {
    if(confirm('确实删除?')) {
        todosArr = todosArr.filter(item => item.id !== id);
        localStorage.setItem('todos', JSON.stringify(todosArr))
        el.remove();
    }

    totalize();
}
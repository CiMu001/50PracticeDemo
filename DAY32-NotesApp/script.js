const addBtn = document.querySelector('.addBtn')
const notes = JSON.parse(localStorage.getItem('notes'))

if(notes) {
    notes.forEach(note => addNode(note))
}

addBtn.addEventListener('click', () => { addNode() })

function addNode(text='') {
    const nodebox = document.querySelector('.nodes-container')
    const node = document.createElement('div')
    node.classList.add('node-item')

    node.innerHTML = `
    <div class="node-head">
        <i class="iconfont icon-a-shanchulajitong del"></i>
    </div>
    <div class="node-body">
        <textarea class="noedit" name="nodeTxt" id="nodeTxt"></textarea>
    </div>
    `
    
    nodebox.appendChild(node)

    const textArea = node.querySelector('textarea')
    const delBtn = node.querySelector('.del')

    textArea.value = text
    delBtn.addEventListener('click', function(){
        if(confirm('确认删除？')) {
            console.log('删除')
            node.remove()

            updateLS()
        }
    })

    textArea.addEventListener('focusout', (e) => {
        updateLS()
    })
}


function updateLS() {
    const nodesTxt = document.querySelectorAll('textarea')

    const notes = []

    nodesTxt.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))
}


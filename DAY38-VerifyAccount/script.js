const codeItem = document.querySelectorAll('.item');

codeItem[0].focus();

codeItem.forEach((item, index) => {
    item.addEventListener('keydown', function(e){
        const val = e.key;
        if(val >= 0 || val <= 9) {
            setTimeout(() => {
                item.value = val;
                if(codeItem[index + 1]) {
                    codeItem[index + 1].focus();
                }
            }, 10);
        }else if(val === 'Backspace' && codeItem[index - 1] && !item.value) {
            setTimeout(() => {
                codeItem[index - 1].focus();
            }, 10)
        }
        else {
            setTimeout(() => {
                item.value = '';
            }, 10)
        }

        setTimeout(() => {
            if(item.value) {
                item.classList.add('value');
            } else {
                item.classList.remove('value');
            }
        }, 20)
    })
})
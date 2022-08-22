const labels = document.querySelectorAll('.item label')

labels.forEach(label => {
    let labeltxts = label.innerHTML.split('')
    label.innerHTML = labeltxts.map((letter, index) => `<span style="transition-delay:${300 / labeltxts.length * (index + 1)}ms">${letter}</span>`)
    .join('')
})
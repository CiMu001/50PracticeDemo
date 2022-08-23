const sounds = ['hit','boom','clickSound']
const cnSouns = {'hit': '打击声','boom': '爆炸声','clickSound': '鼠标点击声'}
const btn = document.querySelectorAll('.item')

sounds.forEach((sound, index) => {
    btn[index].innerText = cnSouns[sound]

    btn[index].addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}
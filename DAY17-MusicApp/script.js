const url = 'http://cloud-music.pl-fe.cn/top/song?type=96'
const main = document.querySelector('#main')

getMusics(url)

async function getMusics(url) {
    const res = await fetch(url)
    const data = await res.json()

    if(data.code !== 200) {
        alert('http://cloud-music.pl-fe.cn/top/song?type=96  接口请求失败！')
        return
    }

    // 只取前20个
    const musicList = data.data.slice(0,20)
    const musics = []
    musicList.forEach(item => {
        let obj = {
            musicName: item.name,
            artists: item.artists,
            picUrl: item.album.picUrl,
            mp3Url: item.mp3Url,
            company: item.album.company,
            publishTime: item.album.publishTime,
        }
        musics.push(obj)
    });

    showMusics(musics)
}

function showMusics(musics) {
    main.innerHTML = ''

    musics.forEach((music) => {
        const { musicName, picUrl, publishTime, artists, mp3Url } = music
        const date = new Date(publishTime)
        const musicEl = document.createElement('div')
        musicEl.classList.add('music')
        const artistStr = artists.map((artist) => artist.name).join('/')
        
        musicEl.innerHTML = `
            <img src="${picUrl}" alt="${musicName}"/>
            <div class="info">${musicName}</div>
            <div class="overview">
                <h3>Overview</h3>
                <p>歌手：${artistStr}</p>
                <p>发布时间： ${date.getFullYear()} / ${(date.getMonth() + 1)} / ${date.getDate()}</p>
            </div>
        `
        // <a href="${mp3Url}">歌曲试听</a>
        main.appendChild(musicEl)
    })
}
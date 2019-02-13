const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
      {
        name: 'Stitches',
        artist: 'Shawn Mendes',
        url: 'http://www.ytmp3.cn/down/33421.mp3',
        cover: 'https://raw.githubusercontent.com/CamuseCao/Picture/master/Artist/Shawn%20Mendes.jpg',
      },
      {
        name: 'Youth',
        artist: 'Shawn Mendes and Khalid',
        url: 'http://www.ytmp3.cn/down/52446.mp3',
        cover: 'https://raw.githubusercontent.com/CamuseCao/Picture/master/Artist/Shawn%20Mendes.jpg',
		lrc: 'Youth.lrc',
      },
      {
        name: 'And The Winner Is',
        artist: 'Gerard Darmon',
        url: 'http://www.ytmp3.cn/down/50003.mp3',
        cover: 'https://raw.githubusercontent.com/CamuseCao/Picture/master/Artist/Gérard%20Darmon.jpg',
      },
      {
        name: 'Call You Tonight',
        artist: 'Whitney Houston',
        url: 'http://www.ytmp3.cn/down/53366.mp3',
        cover: 'https://raw.githubusercontent.com/CamuseCao/Picture/master/Artist/Whitney%20Houston.jpg',
      },
      {
        name: '清明雨上',
        artist: '许嵩',
        url: 'http://www.ytmp3.cn/down/36119.mp3',
        cover: 'https://raw.githubusercontent.com/CamuseCao/Picture/master/Artist/许嵩.jpg',
      },
      {
        name: 'I Don’t Wanna Live Forever',
        artist: 'Zany and Taylor Swift',
        url: 'http://www.ytmp3.cn/down/37482.mp3',
        cover: 'https://raw.githubusercontent.com/CamuseCao/Picture/master/Artist/Fifty-shadow-of-grey.jpg',
      },
      {
        name: 'White lie',
        artist: 'Jhameel',
        url: 'http://www.ytmp3.cn/down/50677.mp3',
        cover: 'https://raw.githubusercontent.com/CamuseCao/Picture/master/Artist/Jhameel.jpg',
      },
      {
        name: 'Blank Space',
        artist: 'Taylor Swift',
        url: 'http://www.ytmp3.cn/down/49718.mp3',
        cover: 'https://raw.githubusercontent.com/CamuseCao/Picture/master/Artist/Taylor-Swift.jpg',
      },
      {
        name: "Be alright",
        artist: 'Dean Lewis',
        url: 'http://www.ytmp3.cn/down/53297.mp3',
        cover: 'https://raw.githubusercontent.com/CamuseCao/Picture/master/Artist/Dean%20Lewis.jpg',
      }
    ]
});
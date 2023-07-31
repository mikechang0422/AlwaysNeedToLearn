// 好用的function 未來可以參考

//隨機產生顏色
function generateColor() {
    let hexSet = '0123456789ABCDEF'
    let finalHexString = '#'
    for (let i = 0; i < 6; i++) {
        finalHexString += hexSet[Math.ceil(Math.random() * 15)]
    }
    return finalHexString
}

generateColor()

// 根據畫面更新速率執行動畫function
// Window.requestAnimationFrame()
// requestAnimationFrame()
// 參考網址 https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
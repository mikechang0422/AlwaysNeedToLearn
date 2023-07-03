let canvas = document.querySelector('#day1')
canvas.width = 500
canvas.height = 500
let ctx = canvas.getContext('2d')
function drawAnyThing() {
    // 你的空白畫布盡情揮灑空間
    
    // 填滿色的正方形
    ctx.fillStyle = '#e5ffcc'
    ctx.fillRect(50,100,200,200)
    
    // 直角三角形
    ctx.beginPath()
    // 頂點 1
    ctx.moveTo(200,150)
    // 頂點 2
    ctx.lineTo(350,350)
    // 頂點 3
    ctx.lineTo(350,150)
    // 結束繪製
    ctx.closePath()
    ctx.strokeStyle = '#e37900'
    ctx.stroke()

    // 填滿色的直角三角形
    ctx.beginPath()
    // 頂點 1
    ctx.moveTo(350,150)
    // 頂點 2
    ctx.lineTo(350,350)
    // 頂點 3
    ctx.lineTo(500,150)
    // 結束繪製
    ctx.closePath()
    ctx.fillStyle = '#e37900'
    ctx.fill()

    ctx.beginPath()
    // 圓形語法（x坐標, y坐標 , 半徑, 起始角度, 結束角度, 順時鐘/逆時鐘）
    ctx.arc(100, 150, 50, 0, 2 * Math.PI)
    // 填滿顏色
    ctx.fillStyle = '#125DFF'
    ctx.fill()
}
drawAnyThing()


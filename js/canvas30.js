function drawDay1() {
    const canvas = document.querySelector('#day1')
    canvas.width = 500
    canvas.height = 500
    const ctx = canvas.getContext('2d')
    // 你的空白畫布盡情揮灑空間
    
    // 填滿色的正方形
    ctx.fillStyle = '#e5ffcc'
    ctx.fillRect(50,150,100,100)
    
    ctx.fillStyle = '#333'
    ctx.fillRect(25,300,450,400)

    // 直角三角形
    ctx.beginPath()
    // 頂點 1
    ctx.moveTo(200,150)
    // 頂點 2
    ctx.lineTo(290,270)
    // 頂點 3
    ctx.lineTo(290,150)
    // 結束繪製
    ctx.closePath()
    ctx.strokeStyle = '#e37900'
    ctx.stroke()

    // 填滿色的直角三角形
    ctx.beginPath()
    // 頂點 1
    ctx.moveTo(200,150)
    // 頂點 2
    ctx.lineTo(200,270)
    // 頂點 3
    ctx.lineTo(290,270)
    // 結束繪製
    ctx.closePath()
    ctx.fillStyle = '#e37900'
    ctx.fill()

    // 圓型
    // 實心系列
    ctx.beginPath()
    // 語法（x坐標, y坐標 , 半徑, 起始角度, 結束角度, 順時鐘/逆時鐘）
    ctx.arc(100, 50, 50, 0, 2 * Math.PI)
    // 填滿顏色
    ctx.fillStyle = '#125DFF'
    ctx.fill()

    // 順時鐘半圓形
    ctx.beginPath()
    ctx.arc(250, 50, 50, 0, Math.PI, true)
    ctx.fillStyle = '#12ffc2'
    ctx.fill()

    // 逆時鐘半圓形
    ctx.beginPath()
    ctx.arc(250, 50, 50, 0, Math.PI, false)
    ctx.fillStyle = '#f0e20b'
    ctx.fill()

    // 順時鐘3/4圓
    ctx.beginPath()
    ctx.arc(400, 50, 50, 0, 1.5 * Math.PI, true)
    ctx.fillStyle = '#f08f08'
    ctx.fill()

    // 逆時鐘3/4圓
    ctx.beginPath()
    ctx.arc(400, 50, 50, 0, 1.5 * Math.PI, false)
    ctx.fillStyle = '#f00b77'
    ctx.fill()

    // 空心系列
    ctx.beginPath()
    // 語法（x坐標, y坐標 , 半徑, 起始角度, 結束角度, 順時鐘/逆時鐘）
    ctx.arc(100, 400, 50, 0, 2 * Math.PI)
    // 填滿顏色
    ctx.strokeStyle = '#125DFF'
    ctx.stroke()

    // 順時鐘半圓形
    ctx.beginPath()
    ctx.arc(250, 400, 50, 0, Math.PI, true)
    ctx.strokeStyle = '#12ffc2'
    ctx.stroke()

    // 逆時鐘半圓形
    ctx.beginPath()
    ctx.arc(250, 400, 50, 0, Math.PI, false)
    ctx.strokeStyle = '#f0e20b'
    ctx.stroke()

    // 順時鐘3/4圓
    ctx.beginPath()
    ctx.arc(400, 400, 50, 0, 1.5 * Math.PI, true)
    ctx.strokeStyle = '#f08f08'
    ctx.stroke()

    // 逆時鐘3/4圓
    ctx.beginPath()
    ctx.arc(400, 400, 50, 0, 1.5 * Math.PI, false)
    ctx.strokeStyle = '#f00b77'
    ctx.stroke()
}
drawDay1()


function drawDay2() {
    const canvas = document.querySelector('#day2')
    canvas.width = 500
    canvas.height = 250
    const ctx = canvas.getContext('2d')
    // 線的粗度
    ctx.lineWidth = 3
    // 開始繪製
    ctx.beginPath()
    // 起始點
    ctx.moveTo(200, 100)
    // 貝茲曲線語法（控制點1 x坐標, y坐標, 控制點2 x坐標, y坐標, 結束點x坐標, y坐標 ）
    ctx.bezierCurveTo(200, 0, 350, 0, 350, 100)
    // 畫線顏色
    ctx.strokeStyle = '#F00B77'
    ctx.stroke()
    
    ctx.beginPath()
    ctx.lineWidth = 5
    ctx.moveTo(200, 100)
    ctx.bezierCurveTo(200, 200, 350, 200, 350, 100)
    ctx.strokeStyle = '#0b20f0'
    ctx.stroke()

    // 心型
    ctx.beginPath()
    ctx.moveTo(75, 40)
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25)
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5)
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120)
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5)
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25)
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40)
    ctx.fillStyle = '#f00b50'
    ctx.fill()
}

drawDay2()

function drawDay3(){
    const canvas = document.querySelector('#day3')
    canvas.width = 800
    canvas.height = 900
    const ctx = canvas.getContext('2d')
    //第一排
    ctx.fillStyle = '#E1E1E1'
    ctx.fillRect(5, 5, 195, 145)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(5, 5, 200, 145)

    ctx.fillStyle = '#E1E1E1'
    ctx.fillRect(200, 5, 345, 145)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(200, 5, 350, 145)

    ctx.fillStyle = '#FFE400'
    ctx.fillRect(545, 5, 195, 145)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(545, 5, 200, 145)

    ctx.fillStyle = '#E1E1E1'
    ctx.fillRect(745, 5, 195, 710)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(745, 5, 200, 710)

    //第二排
    ctx.fillStyle = '#FFF'
    ctx.fillRect(5, 150, 80, 145)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(5, 150, 80, 145)

    ctx.fillStyle = '#E73248'
    ctx.fillRect(80, 150, 455, 455)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(80, 150, 460, 460)

    ctx.fillStyle = '#FFF'
    ctx.fillRect(545, 350, 95, 260)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(545, 350, 100, 260)

    ctx.fillStyle = '#FFF'
    ctx.fillRect(640, 350, 95, 260)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(640, 350, 100, 260)

    ctx.fillStyle = '#FFE400'
    ctx.fillRect(545, 150, 195, 200)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(545, 150, 200, 200)

    //第三排
    ctx.fillStyle = '#E1E1E1'
    ctx.fillRect(5, 300, 75, 380)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(5, 300, 75, 380)

    ctx.fillStyle = '#171616'
    ctx.fillRect(80, 620, 200, 200)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(80, 620, 200, 200)

    ctx.fillStyle = '#E1E1E1'
    ctx.fillRect(285, 615, 250, 105)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(285, 615, 250, 105)

    ctx.fillStyle = '#E1E1E1'
    ctx.fillRect(285, 725, 250, 105)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(285, 725, 250, 105)

    ctx.fillStyle = '#FFF'
    ctx.fillRect(535, 615, 205, 105)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(535, 615, 205, 105)

    //第四排
    ctx.fillStyle = '#FFE400'
    ctx.fillRect(5, 680, 75, 220)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(5, 680, 75, 220)

    ctx.fillStyle = '#FFF'
    ctx.fillRect(80, 830, 205, 85)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(80, 830, 205, 85)

    ctx.fillStyle = '#171616'
    ctx.fillRect(285, 830, 250, 50)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(285, 830, 250, 50)

    ctx.fillStyle = '#140D80'
    ctx.fillRect(535, 725, 200, 145)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(535, 725, 205, 150)

    ctx.fillStyle = '#FFF'
    ctx.fillRect(290, 830, 450, 130)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(290, 830, 450, 130)

    ctx.fillStyle = '#E73248'
    ctx.fillRect(745, 720, 60, 300)
    ctx.lineWidth = 10
    ctx.strokeStyle = '#171616'
    ctx.strokeRect(745, 720, 60, 300)

    //白色裁邊
    ctx.lineWidth = 20
    ctx.strokeStyle = '#FFF'
    ctx.strokeRect(5, 5, 800, 900)

}
drawDay3()

function drawDay4() {
    const canvas = document.querySelector('#day4')
    canvas.width = 500
    canvas.height = 500
    const ctx = canvas.getContext('2d')
    // 字體設定：正體/斜體 首字是否要放大 字重 字體大小 字型
    ctx.font = 'italic small-caps 800 50px monospace'

    // 文字對齊（一樣有 start, left, right, end, center）
    ctx.textAlign = 'left'

    // 文字水平位置（有點像練習英文時大小寫文字簿上一行行線，比較少會需要用到此語法）
    ctx.textBaseline
	
    // 字框線粗度
    ctx.lineWidth = 2
    ctx.strokeStyle = '#351CA5'
	
    // 字的語法（文字內容, x 坐標, y 坐標）
    ctx.strokeText('The Great Artist', 30, 60)

    ctx.fillStyle = '#351ca5'
    ctx.fillText('文字藝術師', 30, 150)
}

drawDay4()

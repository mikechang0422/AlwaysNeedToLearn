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

    //漸層色坐標軸 (漸層色起點 X座標, Y座標, 漸層色終點 X座標, Y座標)
    const gradient = ctx.createLinearGradient(100, 100, 400, 100)

    //漸層色色號上色
    gradient.addColorStop(0, '#FF8EA7')
    gradient.addColorStop(0.5, '#A153F9')
    gradient.addColorStop(1, '#5379F9')

    //承接顏色的圖（字）
    ctx.fillStyle = gradient
    ctx.fillText('I AM ARTIST', 150, 240)

    // 額外補充漸層色區塊
    ctx.fillRect(25, 200, 100, 100)

    // 立體感 POP 字
    ctx.font = '48px Verdana'
    ctx.fillStyle = '#351CA5'
    ctx.fillText('Hello World!', 25, 375)
    ctx.fillStyle = '#1FFFB8'
    ctx.fillText('Hello World!', 25, 370)

    // fillText 以最後一個參數設定整個字串的寬度
    ctx.fillStyle = '#351CA5'
    ctx.fillText('Hello Word!', 25, 435, 200)
    ctx.fillStyle = '#1FFFB8'
    ctx.fillText('Hello Word!', 20, 430, 200)
}

drawDay4()

function drawDay5(V){
    const canvas = document.querySelector('#day5')
    canvas.width = 500
    canvas.height = 500
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#ffdc19'
    ctx.fillRect(165, 180, 180, 180)

    // 合成效果 API
    let txt , option = ''
    switch (V) {
    case 1:
        txt = 'default'
        option = 'source-over'
        break
    case 2:
        txt = '上方圖層重疊處'
        option = 'source-in'
        break
    case 3:
        txt = '透明重疊處'
        option = 'source-out'
        break

    case 4:
        txt = '上圖重疊處 + 下層'
        option = 'source-atop'
        break

    case 5:
        txt = '交換前後圖層'
        option = 'destination-over'
        break
    case 6:
        txt = '上圖重疊處'
        option = 'destination-in'
        break
    case 7:
        txt = '上圖重疊處透明'
        option = 'destination-out'
        break
    case 8:
        txt = '上圖重疊處 + 下層'
        option = 'destination-atop'
        break

    case 9:
        txt = '重疊處疊加顏色'
        option = 'lighter'
        break
    case 10:
        txt = '保留上圖層'
        option = 'copy'
        break
    case 11:
        txt = '重疊處透明'
        option = 'xor'
        break
    case 12:
        txt = '上圖層重疊處 + 上下圖顏色效果'
        option = 'multiply'
        break
    case 13:
        txt = '與 multiply 相反'
        option = 'screen'
        break
    case 14:
        txt = 'multipy + screen 混合'
        option = 'overlay'
        break
    case 15:
        txt = '重疊處 + 深色效果'
        option = 'darken'
        break
    case 16:
        txt = '重疊處 + 淺色效果'
        option = 'lighten'
        break

        // 其他效果
    case 17:
        txt = '其他效果'
        option = 'color-dodge'
        break
    case 18:
        txt = '其他效果'
        option = 'color-burn'
        break
    case 19:
        txt = '其他效果'
        option = 'hard-light'
        break
    case 20:
        txt = '其他效果'
        option = 'soft-light'
        break
    case 21:
        txt = '其他效果'
        option = 'difference'
        break
    case 22:
        txt = '其他效果'
        option = 'exclusion'
        break
    case 23:
        txt = '其他效果'
        option = 'hue'
        break
    case 24:
        txt = '其他效果'
        option = 'saturation'
        break
    case 25:
        txt = '其他效果'
        option = 'color'
        break
    case 26:
        txt = '其他效果'
        option ='luminosity'
        break
    default:
        // break
    }
    ctx.globalCompositeOperation = option
    ctx.beginPath()
    ctx.fillStyle = '#1954ff'
    ctx.arc(165, 180, 100, 0, 2 * Math.PI)
    ctx.fill()

    document.querySelector('#operation').innerText = txt

}
drawDay5(1)

// 還沒效果先不放
// document.querySelector('#operationSelect').addEventListener('change', function(){
//     const V = document.querySelector('#operationSelect').value
//     drawDay5(V)
// })

function drawDay6(){
    const canvas = document.querySelector('#day6')
    canvas.width = 500
    canvas.height = 500
    const ctx = canvas.getContext('2d')

    // 圓心
    ctx.arc(0, 0, 60, 0, 2 * Math.PI)
    ctx.fillStyle = '#f20'
    ctx.fill()

    // 藍色
    ctx.fillStyle = '#2d0cb6'
    ctx.fillRect(100, 0, 80, 20)

    // 黃色
    // 旋轉角度 rotate(角度)
    ctx.rotate((20 * Math.PI) / 180) // 20度
    ctx.fillStyle = '#f5d700'
    ctx.fillRect(100, 0, 80, 20)

    // 綠色
    // 旋轉會疊加所以如果上面已經旋轉了又寫旋轉就會累積上去
    ctx.rotate((45 * Math.PI) / 180) // 65度
    ctx.fillStyle = '#0cb66b'
    ctx.fillRect(100, 0, 80, 20)

    // 移動畫布軸心
    ctx.rotate((-65 * Math.PI) / 180) // 0度
    ctx.translate(280, 10)
    
    
    // 圓心
    ctx.arc(0, 0, 10, 0, 2 * Math.PI)
    ctx.fillStyle = '#283747'
    ctx.fill()
    
    // 橘色
    ctx.fillStyle = 'rgba(231, 76, 60, 0.5)'
    ctx.fillRect(0, 0, 150, 20)
    
    // 旋轉45度
    ctx.rotate((45 * Math.PI) / 180)
    
    // 藍色
    ctx.fillStyle = 'rgba(46, 134, 193, 0.5)'
    ctx.fillRect(0, 0, 150, 20)
    
    // 旋轉45度
    ctx.rotate((45 * Math.PI) / 180)
    
    // 黃色
    ctx.fillStyle = 'rgba(247, 220, 111, 0.5)'
    ctx.fillRect(0, 0, 150, 20)
    
    // 矯正還原0.0位置
    ctx.rotate(-(90 * Math.PI) / 180)
    ctx.translate(-280, -10)
    ctx.translate(0, 250)

    // 移動 translate(X,Y) 等於css的translate
    ctx.fillStyle = 'rgba(231, 76, 60, 0.5)'
    ctx.fillRect(0, 0, 150, 20)
    ctx.translate(30, 30)
    
    ctx.fillStyle = 'rgba(46, 134, 193, 0.5)'
    ctx.fillRect(0, 0, 150, 20)
    
    // 跟旋轉一樣如果連續寫則會是疊加
    ctx.translate(30, 30)
    ctx.fillStyle = 'rgba(47, 50, 11, 0.5)'
    ctx.fillRect(0, 0, 150, 20)
    
    // 矯正還原0.0位置
    ctx.translate(-60, -60)
    ctx.translate(0, 100)
    
    // 變形 transform(水平縮放、水平傾斜、垂直傾斜、垂直縮放、水平移動、垂直移動)
    // 紅色
    ctx.fillStyle = 'rgba(231, 76, 60 ,0.5)'
    ctx.fillRect(0, 0, 100, 30)
    
    // 藍色
    ctx.transform(1, 0, 0, 1, 0, 0)
    ctx.fillStyle = 'rgba(46, 134, 193,0.5)'
    ctx.fillRect(30, 0, 100, 30)
    
    ctx.transform(1.5, 0, 0, 1, 0, 0)
    ctx.fillStyle = 'rgba(46, 134, 193,0.5)'
    ctx.fillRect(30, 0, 100, 30)

}
drawDay6()


function drawDay7(){
    const canvas = document.querySelector('#day7')
    canvas.width = 500
    canvas.height = 500
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.src = 'https://images.unsplash.com/photo-1688448543484-ecd531cba9bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    // 一定要監聽下載完成才執行，不然網速跟不上時就不會顯示
    img.onload = function(){

        // 填滿剩餘的空間(排除i=0 && j==0)
        for(let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++){
                if(i != 0 || j != 0){
                    // drawImage(圖片來源,X座標,Y座標,長度,寬度)
                    ctx.drawImage(img, i * 250, j * 250, 250, 250)
                }
            }
        }

        // drawImage(圖片來源,切割起點X座標,切割起點Y座標,切割寬度,切割高度,裁切後x軸座標,裁切後Y座標,裁切後影像寬度,裁切後影像高度)
        ctx.drawImage(img, 100, 100, 600, 450, 0, 0, 250, 250)
        // 將文字跟圖片結合
        ctx.font = '36px Verdana'
        ctx.fillStyle = '#006241'
        ctx.fillText('好吃!', 83, 203)
        ctx.fillStyle = '#1FFF25'
        ctx.fillText('好吃!', 80, 200)
        
    }
}
drawDay7()

function drawDay8(){
    const canvas = document.querySelector('#day8')
    canvas.width = 1170
    canvas.height = 780
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.src = 'https://images.unsplash.com/photo-1688448543484-ecd531cba9bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    img.onload = function(){
        ctx.drawImage(img, 0, 0, 1170, 780)
        // 遮罩
        ctx.globalCompositeOperation = 'destination-in'
        ctx.fillStyle = '#000'
        ctx.arc(585, 390, 350, 0, Math.PI * 2, true)
        ctx.fill()
    }

}
drawDay8()

function drawDay9(){
    day9Background()
    day9Wall()
    day9SuitMan()
    day9Apple()
    day9Hat()
}

function day9Background(){
    const canvas = document.querySelector('#day9-Background')
    canvas.width = 480
    canvas.height = 600
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = '#333'
    ctx.fillRect(0, 0, 480, 600)
    ctx.font = '48px Verdana'
    ctx.fillStyle = '#fff'
    ctx.textAlign = 'center'
    ctx.fillText('背景', 240, 300)
    
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(480,0)
    ctx.lineTo(480,600)
    ctx.lineTo(0,600)
    ctx.closePath()
    ctx.lineWidth = 10
    ctx.strokeStyle = '#12CDFF'
    ctx.stroke()

}

function day9Wall(){
    const canvas = document.querySelector('#day9-Wall')
    canvas.width = 480
    canvas.height = 150
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = 'rgba(255, 100, 100, 0.3)'
    ctx.fillRect(0, 0, 480, 150)
    ctx.font = '48px Verdana'
    ctx.fillStyle = '#fff'
    ctx.textAlign = 'center'
    ctx.fillText('Wall', 240, 75)

    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(480,0)
    ctx.lineTo(480,150)
    ctx.lineTo(0,150)
    ctx.closePath()
    ctx.lineWidth = 10
    ctx.strokeStyle = 'rgba(255, 100, 100, 0.5)'
    ctx.stroke()

}

function day9SuitMan(){
    const canvas = document.querySelector('#day9-Suit-Man')
    canvas.width = 300
    canvas.height = 600
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = 'rgba(80, 255, 100, 0.3)'
    ctx.fillRect(0, 0, 300, 600)
    ctx.font = '48px Verdana'
    ctx.fillStyle = '#fff'
    ctx.textAlign = 'center'
    ctx.fillText('SuitMan', 150, 300)

    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(300,0)
    ctx.lineTo(300,600)
    ctx.lineTo(0,600)
    ctx.closePath()
    ctx.lineWidth = 10
    ctx.strokeStyle = 'rgba(80, 255, 100, 0.5)'
    ctx.stroke()

}

function day9Apple(){
    const canvas = document.querySelector('#day9-Apple')
    canvas.width = 100
    canvas.height = 100
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = 'rgba(255, 50, 50, 0.3)'
    ctx.fillRect(0, 0, 100, 100)
    ctx.font = '16px Verdana'
    ctx.fillStyle = '#fff'
    ctx.textAlign = 'center'
    ctx.fillText('Apple', 50, 50)

    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(100,0)
    ctx.lineTo(100,100)
    ctx.lineTo(0,100)
    ctx.closePath()
    ctx.lineWidth = 10
    ctx.strokeStyle = 'rgba(255, 50, 50, 0.5)'
    ctx.stroke()

}

function day9Hat(){
    const canvas = document.querySelector('#day9-Hat')
    canvas.width = 200
    canvas.height = 200
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = 'rgba(80, 255, 255, 0.3)'
    ctx.fillRect(0, 0, 200, 200)
    ctx.font = '48px Verdana'
    ctx.fillStyle = '#fff'
    ctx.textAlign = 'center'
    ctx.fillText('Hat', 100, 100)

    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(200,0)
    ctx.lineTo(200,200)
    ctx.lineTo(0,200)
    ctx.closePath()
    ctx.lineWidth = 10
    ctx.strokeStyle = 'rgba(80, 255, 255, 0.5)'
    ctx.stroke()

}

drawDay9()

function drawDay10(){
    const canvas = document.querySelector('#day10')
    canvas.width = 500
    canvas.height = 500
    const ctx = canvas.getContext('2d')
    let fillColor = 'rgba(80, 110, 255, 0.3)'
    let strokeColor = 'rgba(80, 110, 255, 0.5)'
    drawRect(ctx, fillColor, strokeColor)
    
    // save() 儲存接下來所畫的
    ctx.save()
    ctx.translate(50, 50)
    fillColor = 'rgba(80, 160, 255, 0.3)'
    strokeColor = 'rgba(80, 160, 255, 0.5)'
    drawRect(ctx, fillColor, strokeColor)
    // restore() 是配合save()儲存兩者之間的繪製，並將畫布回歸原點
    ctx.restore()
    
    ctx.save()
    ctx.rotate((45 * Math.PI) / 180)
    fillColor = 'rgba(80, 210, 255, 0.3)'
    strokeColor = 'rgba(80, 210, 255, 0.5)'
    drawRect(ctx, fillColor, strokeColor)
    ctx.restore()

    ctx.save()
    ctx.translate(200, 200)
    ctx.rotate((30 * Math.PI) / 180)
    fillColor = 'rgba(110, 210, 155, 0.3)'
    strokeColor = 'rgba(110, 210, 155, 0.5)'
    drawRect(ctx, fillColor, strokeColor)
    ctx.restore()

}
drawDay10()

function drawRect(ctx, fillColor, strokeColor){
    ctx.fillStyle = fillColor
    ctx.fillRect(0, 0, 200, 200)

    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(200,0)
    ctx.lineTo(200,200)
    ctx.lineTo(0,200)
    ctx.closePath()
    ctx.lineWidth = 10
    ctx.strokeStyle = strokeColor
    ctx.stroke()
}

function drawDay11() {
    const canvas = document.querySelector('#day11')
    canvas.width = 500
    canvas.height = 500
    const ctx = canvas.getContext('2d')

    const city = new Image()
    const bubbles = new Image()
    const blossom = new Image()

    city.src =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Taipei_101_twilight.jpg/378px-Taipei_101_twilight.jpg'
    bubbles.src =
        'https://www.pngmart.com/files/8/Bubbles-Powerpuff-Girls-PNG-Transparent-File.png'
    blossom.src =
        'https://www.pngkey.com/png/full/139-1397645_file-history-blossom-powerpuff-girls.png'

    drawPowerPuff(ctx,city,bubbles,blossom)
}
function drawPowerPuff(ctx,city,bubbles,blossom) {
    ctx.globalCompositeOperation = 'destination-over'
    // clear canvas
    ctx.clearRect(0, 0, 500, 500)

    ctx.fillStyle = 'rgba(0,0,0,0.4)'
    ctx.strokeStyle = 'rgba(0,50,350,0.4)'
    ctx.save()

    const time = new Date()
    // 花花 斜線移動 500px跑60秒
    ctx.save()
    ctx.translate((500 / 60) * time.getSeconds(), (500 / 60) * time.getSeconds())
    ctx.drawImage(blossom, 0, 0, 50, 70)
    ctx.restore()

    //泡泡 繞圓 圓心為(200,200) 速度為當前時間*-5度 半徑為drawImage的 75,75
    ctx.save()
    ctx.translate(200, 200)
    ctx.rotate(((2 * Math.PI) / 180) * time.getSeconds() * -5)
    ctx.drawImage(bubbles, 75, 75, 50, 50)
    ctx.restore()

    ctx.restore()

    ctx.drawImage(city, 0, 0, 500, 500)
}

setInterval(drawDay11, 100)

function drawDay12() {
    const canvas = document.querySelector('#day12')
    canvas.style['background-color'] = '#333'
    canvas.style['border-color'] = '#666'
    canvas.width = 500
    canvas.height = 500
    const ctx = canvas.getContext('2d')
    ctx.translate(250,250)
    clockBody(ctx)
    staticHandler(ctx)
    clockNumber(ctx)
    setTimeHandlar(ctx)
    
    window.requestAnimationFrame(drawDay12)
}

function clockBody(ctx){
    // 錶面
    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(0, 0, 230, 0, 2 * Math.PI)
    ctx.fill()

    ctx.beginPath()
    ctx.arc(0, 0, 230, 0, 2 * Math.PI, true)
    ctx.strokeStyle = 'rgba(250, 222, 1, 0.1)'
    ctx.stroke()

    ctx.beginPath()
    const img = new Image()
    img.src = 'https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/2b3f6ff00db7a1efae21d85cfb8995eaff2da8d8.png'
    img.onload = function(){
        ctx.translate(-105, -125)
        ctx.drawImage(img, 0, 0, 250, 250)
        ctx.translate(105, 125)
    }
}

function staticHandler(ctx){
    // 刻度 1分
    ctx.save()
    ctx.lineWidth = 3
    ctx.strokeStyle = 'rgba(250, 222, 1, 0.5)'
    for(let i = 0; i < 60; i++){
        if(i % 5 !== 0){
            ctx.beginPath()
            // 線條長度
            ctx.moveTo(217, 0)
            ctx.lineTo(220, 0)
            ctx.stroke()
        }
        //每六度轉一次
        ctx.rotate(Math.PI / 30)
    }
    ctx.restore()

    // 刻度 5分

    ctx.save()
    ctx.strokeStyle = 'rgba(250, 222, 1, 0.7)'
    for(let i = 0; i < 12; i++){
        ctx.beginPath()
        ctx.moveTo(215, 0)
        ctx.lineTo(220, 0)
        ctx.stroke()
        //每30度轉一次
        ctx.rotate(Math.PI / 6)
    }
    ctx.restore()

}

function clockNumber(ctx){
    // 小時數字
    const hourNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    ctx.save()
    ctx.beginPath()
    ctx.font = '25px sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = 'rgba(250, 222, 1, 1.0)'
    
    for (let i = 0; i < hourNum.length; i++) {
        let x = 195 * Math.cos(((i * 30 - 60) * Math.PI) / 180)
        let y = 195 * Math.sin(((i * 30 - 60) * Math.PI) / 180)
        ctx.fillText(hourNum[i], x, y)
    }

    ctx.restore()
}

function setTimeHandlar(ctx){
    const now = new Date()
    const sec = now.getSeconds()
    const min = now.getMinutes()
    const hr = now.getHours() % 12

    // 角度錯誤 校正回來
    ctx.rotate(-90 * Math.PI / 180)

    // 時針
    ctx.save()
    ctx.rotate(
        (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
    )
    ctx.lineWidth = 14
    ctx.beginPath()
    ctx.moveTo(30, 0)
    ctx.lineTo(80, 0)
    ctx.strokeStyle = 'rgba(250, 222, 1, 1.0)'
    ctx.stroke()
    ctx.restore()

    ctx.save()
    ctx.rotate(
        (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
    )
    ctx.lineWidth = 10
    ctx.beginPath()
    ctx.moveTo(30, 0)
    ctx.lineTo(78, 0)
    ctx.strokeStyle = '#333'
    ctx.stroke()
    ctx.restore()

    ctx.save()
    ctx.rotate(
        (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
    )
    ctx.lineWidth = 8
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(30, 0)
    ctx.strokeStyle = 'rgba(250, 222, 1, 1.0)'
    ctx.stroke()
    ctx.restore()

    // 分針
    ctx.save()
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec)
    ctx.lineWidth = 14
    ctx.beginPath()
    ctx.moveTo(30, 0)
    ctx.lineTo(132, 0)
    ctx.strokeStyle = 'rgba(250, 222, 1, 1.0)'
    ctx.stroke()
    ctx.restore()
    ctx.beginPath()
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true)
    ctx.fill()

    ctx.save()
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec)
    ctx.lineWidth = 8
    ctx.beginPath()
    ctx.moveTo(30, 0)
    ctx.lineTo(130, 0)
    ctx.strokeStyle = '#333'
    ctx.stroke()
    ctx.restore()
    ctx.beginPath()
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true)
    ctx.fill()

    ctx.save()
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec)
    ctx.lineWidth = 8
    ctx.beginPath()
    ctx.moveTo(30, 0)
    ctx.lineTo(0, 0)
    ctx.strokeStyle = 'rgba(250, 222, 1, 1.0)'
    ctx.stroke()
    ctx.restore()
    ctx.beginPath()
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true)
    ctx.fill()

    // 秒針
    ctx.save()
    ctx.rotate((sec * Math.PI) / 30)
    ctx.strokeStyle = '#E41515'
    ctx.fillStyle = 'white'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(-30, 0)
    ctx.lineTo(175, 0)
    ctx.stroke()
    ctx.beginPath()
    ctx.fillStyle = '#E41515'
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true)
    ctx.fill()
    ctx.beginPath()
    ctx.stroke()
    ctx.fillStyle = 'black'
    ctx.arc(0, 0, 5, 0, Math.PI * 2, true)
    ctx.fill()
    ctx.restore()
}
window.requestAnimationFrame(drawDay12)

function drawDay14(){
    const toolbox = document.getElementById('toolbox')
    const canvas = document.querySelector('#day14')
    canvas.width = 500
    canvas.height = 500
    canvas.style['background-color'] = '#333'
    canvas.style['border-color'] = '#666'
    const ctx = canvas.getContext('2d')
    const canvasOffsetX = canvas.offsetLeft
    const canvasOffsetY = canvas.offsetTop

    canvas.width = window.innerWidth - canvasOffsetX
    canvas.height = window.innerHeight - canvasOffsetY
    
    let isPainting = false
    let lineWidth = 3
    // eslint-disable-next-line no-unused-vars
    let penXLocation = 0
    // eslint-disable-next-line no-unused-vars
    let penYLocation = 0

    toolbox.addEventListener('click', (e) => {
        if (e.target.id === 'clear') {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
    })

    toolbox.addEventListener('change', (e) => {
        if (e.target.id === 'stroke') {
            ctx.strokeStyle = e.target.value
        }
        if (e.target.id === 'lineWidth') {
            lineWidth = e.target.value
        }
    })

    const draw = (e) => {
        if (!isPainting) {
            return
        }
        ctx.strokeStyle = '#fff'
        ctx.lineWidth = lineWidth
        ctx.lineCap = 'round'

        // 跟範例不一樣因此我們還要修改計算 這部分先跳過 如果要看完整的原始檔就從canvasBoard看
        ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY)
        ctx.stroke()
    }

    canvas.addEventListener('mousedown', (e) => {
        isPainting = true
        penXLocation = e.clientX
        penYLocation = e.clientY
    })
      
    // eslint-disable-next-line no-unused-vars
    canvas.addEventListener('mouseup', (e) => {
        isPainting = false
        ctx.stroke()
        ctx.beginPath()
    })
      
    canvas.addEventListener('mousemove', draw)
}

drawDay14()
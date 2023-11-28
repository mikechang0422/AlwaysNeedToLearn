let isLoading = false // 用于检查是否正在加载数据
let countPerPage
let startIndex = 0

// const loader1 = document.querySelector('.show_load_1')

// function showLoading1() {
//     loader1.style.display = 'flex'
//     document.querySelector('body').style.overflow = 'hidden'
// }

// function hideLoading1() {
//     loader1.style.display = 'none'
//     document.querySelector('body').style.overflow = 'auto'
// }

function setCountPerPage() {
    const screenWidth = window.innerWidth
  
    if (screenWidth > 1200) {
        countPerPage = 6
    } else if (screenWidth > 992 && screenWidth <= 1200) {
        countPerPage = 4
    } else if (screenWidth > 768 && screenWidth <= 992) {
        countPerPage = 3
    } else {
        countPerPage = 2
    }
}

function addDataToTable(jsonData) {
    const dataList = document.getElementById('dataList')
    const buyValueInput = document.getElementsByName('buyValue')[0] // 根据名称获取元素

    // 遍历JSON数据，将其应用到HTML结构中
    jsonData.forEach(item => {
        const li = document.createElement('li')

        // 添加自定义属性 data-id，并设置其值为 JSON 数据中的 id 属性的值
        li.setAttribute('data-id', item.id)

        li.innerHTML = `
        <div class="img-block">
            <img src="${item.imageSrc}" alt="${item.id}">
        </div>
        <h5 class="title">${item.title}</h5>
        <p class="dollars">售價：${item.price}</p>
        <p class="amount">剩餘數量：${item.quantity}</p>
        <p class="introduce">${item.description}</p>
        <p class="calorie">熱量：${item.calories} Kcal / 每100克的熱量</p>
        <div class="btn-block">
            <a href="#" class="btn" data-bs-toggle="modal" data-bs-target="#buyModal">我要訂購</a>
        </div>
      `
        dataList.appendChild(li)

        // 将事件监听器添加到每个新的 <li> 元素中
        addButtonEventListener(li, buyValueInput)
    })
}
  
function fetchData(start, count) {
    isLoading = true // 正在加载数据
    
    // showLoading1() // 显示加载动画
    
    // 从外部JSON文件获取数据并填充表格
    fetch(`../Json/CallAPI.json?startIndex=${start}&count=${count}`)
        .then(response => {
            
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then(jsonData => {
            const slicedData = jsonData.slice(start, start + count)
            addDataToTable(slicedData)

            // 最後一筆添加提示
            if (isEndOfData(slicedData.length, countPerPage)) {
                addEndMessage()
            }

            // setTimeout(() => {
            //     hideLoading1() // 两秒后隐藏加载动画
            // }, 2000)

            isLoading = false // 数据加载完毕
        })
        .catch(error => {
            isLoading = false // 数据加载失败
            console.error('There was a problem with the fetch operation:', error)
            // hideLoading1() // 发生错误时也隐藏加载动画
        })
}

function isEndOfData(dataLength, perPageCount) {
    return dataLength < perPageCount
}

function addEndMessage() {
    const dataList = document.getElementById('dataList')
    if (!document.querySelector('.end-message')) {
        const endMessage = document.createElement('p')
        endMessage.classList.add('end-message')
        endMessage.textContent = '已經到底'
        dataList.parentNode.appendChild(endMessage)
    }
}

// 监听滚动事件
window.addEventListener('scroll', function() {
    const { scrollTop, clientHeight } = document.documentElement
    const distanceToBottom = document.documentElement.scrollHeight - (scrollTop + clientHeight)
    if (document.querySelector('.end-message')){
        return
    } else if (distanceToBottom < 100 && !isLoading) {
        // 已经滚动到底部
        console.log('已经滚动到页面底部！')
        // 触发加载更多数据的操作
        startIndex += countPerPage
        fetchData(startIndex, countPerPage)
    }
})

// 获取按钮并添加事件监听器
function addButtonEventListener(li, buyValueInput) {
    const btn = li.querySelector('.btn')
    const currentId = li.getAttribute('data-id')
  
    btn.addEventListener('click', () => {
        const currentValue = buyValueInput.value
      
        // 将当前点击的 ID 添加到隐藏的 input value 中
        if (currentValue) {
            buyValueInput.value = `${currentValue},${currentId}`
        } else {
            buyValueInput.value = currentId
        }
    })
}



document.addEventListener('DOMContentLoaded', () => {
    setCountPerPage()
    fetchData(startIndex, countPerPage)
})

// 页面尺寸变化时重新设置 countPerPage
window.addEventListener('resize', setCountPerPage)

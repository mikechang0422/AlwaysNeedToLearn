
// 年月日時分帶入local-time
function setToday(){
    const today = new Date()
    const datetimeLocal = document.querySelector('input[name=datetimeLocal]')
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset())
    datetimeLocal.value = today.toISOString().slice(0, 16)
}

setToday()

// 檔案上傳
const fileUpload = document.querySelector('input[name=File]')

function checkFile(e) {
    // 可接受的附檔名
    const typeList = new Array('xlsx', 'xls', 'pdf')
    // 上傳檔案的相關資料
    const fileType = e.target.files[0].type.split('/')[1]
    const fileSize = Number(e.target.files[0].size) / 1024 / 1024
    let typeStr = typeList.join(' ， ')
    typeStr = `檔案類型錯誤，僅允許：${typeStr}`

    // 檢查副檔名
    if (typeList.indexOf(fileType) < 0) {
        alert(typeStr)
        this.value = null
        return
    }

    // 檢查檔案大小
    if(fileSize > 5){
        alert('上傳檔案僅限小於5M')
        this.value = null
        return
    }

}

// 圖片上傳
const imgUpload = document.querySelector('input[name=imgFile]')
function checkImgFile(e) {
    // 可接受的附檔名
    const typeList = new Array('jpg', 'jpeg','png', 'svg')
    // 上傳檔案的相關資料
    const fileType = e.target.files[0].type.split('/')[1]
    const fileSize = Number(e.target.files[0].size) / 1024 / 1024
    let typeStr = typeList.join(' ， ')
    typeStr = `檔案類型錯誤，僅允許：${typeStr}`
    console.log(e)
    // 檢查副檔名
    if (typeList.indexOf(fileType) < 0) {
        alert(typeStr)
        this.value = null
        return
    }

    // 檢查檔案大小
    if(fileSize > 5){
        alert('上傳檔案僅限小於5M')
        this.value = null
        return
    }
}

fileUpload.addEventListener('change', checkFile)
imgUpload.addEventListener('change', checkImgFile)

//多圖上傳並顯示縮圖
const imageUpload = document.querySelector('#image_uploads')
// const msgLabel = imageUpload.previousElementSibling
const imgList = document.querySelector('.img_list')
imageUpload.style.opacity = 0
imageUpload.style.width = 0
imageUpload.style.heigth = 0

function updateImageDisplay() {
    while(imgList.firstChild) {
        imgList.removeChild(imgList.firstChild)
    }

    const curFiles = imageUpload.files
    const submitBtn = document.createElement('input')
    const resetBtn = document.createElement('input')
    submitBtn.setAttribute('type','submit')
    submitBtn.setAttribute('value','上傳')
    submitBtn.setAttribute('id','imgUpload')
    resetBtn.setAttribute('type','submit')
    resetBtn.setAttribute('value','取消')
    resetBtn.setAttribute('id','imgReset')

    if(curFiles.length === 0) {
        // alert('您選擇的圖片已被取消')
    } else {
        const list = document.createElement('ul')
        imgList.appendChild(list)

        for(const file of curFiles) {
            const listItem = document.createElement('li')
            if(fileTypeBollon(file)) {
                const image = document.createElement('img')
                const div = document.createElement('div')
                const fileName = document.createElement('p')
                fileName.textContent = file.name
                image.src = URL.createObjectURL(file)
                listItem.appendChild(fileName)
                listItem.appendChild(div)
                div.classList.add('img_box')
                div.appendChild(image)
                image.classList.add('img_fluid')
            }
            list.appendChild(listItem)
        }

        imgList.appendChild(submitBtn)
        imgList.appendChild(resetBtn)
    }

}

function fileTypeBollon(file) {
    // 可接受的附檔名
    const typeList = new Array('jpg', 'jpeg','png', 'svg')
    // 上傳檔案的相關資料
    const fileType = file.type.split('/')[1]
    let typeStr = typeList.join(' ， ')
    typeStr = `${file.name}的檔案類型錯誤，僅允許：${typeStr}`

    // 檢查副檔名
    if (typeList.indexOf(fileType) < 0) {
        alert(typeStr)
        this.value = null
        return false
    }

    return true
}

// 監聽取消按鈕
imgList.addEventListener('click',function(e){
    if(String(e.target.id) === 'imgReset'){
        e.preventDefault()
        imageUpload.value = null
        updateImageDisplay()
    }
})

imageUpload.addEventListener('change', updateImageDisplay)


// datalist_multiple 轉換型別以達成多重選項用，號自動帶入
const dataListMultiple = document.querySelector('.datalist_multiple')
dataListMultiple.addEventListener('focusin', function() {
    this.setAttribute('type','email')
})
dataListMultiple.addEventListener('focusout', function() {
    this.setAttribute('type','text')
})
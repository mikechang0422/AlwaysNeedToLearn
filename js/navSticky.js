const primaryHeader = document.querySelector('.header')
const scrollWatcher = document.createElement('div')

scrollWatcher.setAttribute('data-scroll-watcher', '')
primaryHeader.before(scrollWatcher) //將scrollWatcher放置於primaryHeader的Node節點之前(同層)
// 額外補充
// primaryHeader.after(scrollWatcher) //將scrollWatcher放置於primaryHeader的Node節點之後(同層)
// primaryHeader.appendChild(scrollWatcher) //將scrollWatcher放置於primaryHeader的Node節點之內(子層)


// 監聽Node節點的API
const navObserver = new IntersectionObserver((entries) => {
    console.log(entries)
    console.log(primaryHeader)
    primaryHeader.classList.toggle('sticking' , !entries[0].isIntersecting) //假如 !entries[0].isIntersecting = true 則只能添加class ，如果是false 則只能刪除class 如果沒補這條判斷則結果剛好相反

},{rootMargin: '100px 0px 0px 0px'})

// 選擇要監聽Node節點
navObserver.observe(scrollWatcher)
const rabbit = {
    name: '泡泡',
    daily: ['耍廢','放空','裝可愛'],
    printDaily: function() {
        this.daily.map(function(item){
            // window 物件
            console.log(this) 
        })
    }
}
rabbit.printDaily()


//.map 可以拋棄forEach
const data = [
    {no:'1',name:'aaa',old:'18'},
    {no:'2',name:'bbb',old:'20'},
    {no:'3',name:'ccc',old:'22'},
]

// data.map(item => console.log(`編號: ${item.no} , 姓名: ${item.name} , 年紀: ${item.old}`))
data.map(item => {
    if(item.no == '1'){
        console.log(`編號: ${item.no} , 姓名: ${item.name} , 年紀: ${item.old}`)
    }
})


//set() 可以剃除重複的值
let cup1 = ['大杯','中杯','小杯']
let cup2 = ['特大杯','中杯','小杯']
let cupAll = [...cup1,...cup2]
console.log(`未整理 : ${cupAll}`)
let cupSet = new Set(cupAll)
cupSet.add('迷你杯')
console.log(`尺寸種類 : ${cupSet.size}種`)
cupAll = [...cupSet]
console.log(`所有種類 : ${cupAll}`)
cup1 = new Set(cup1)
const cupOther = cup2.filter(item => !cup1.has(item))
console.log(`不重複 : ${cupOther}`)


//Map 來尋找鍵值
const cupMap = new Map()
// cupMap.set([['特大杯','120元'],['大杯','100元'],['中杯','80元'],['小杯','60元']])
cupMap.set('特大杯','120元')
cupMap.set('大杯','100元')
console.log(cupMap.size)
console.log(cupMap.has('大杯'))
console.log(cupMap.keys)
for (let [key, value] of cupMap) {
    console.log(`${key} 只要 ${value}`)
}
  
let students = {
    Aaron: { age: '29', country: 'Taiwan' },
    Jack: { age: '26', country: 'USA' },
    Johnson: { age: '32', country: 'Korea' },
}
  
const studentMap = new Map(Object.entries(students))
console.log(studentMap)
const cloneMap = new Map(studentMap)
console.log(cloneMap)
  
console.log(cloneMap.get('Aaron'))
console.log(studentMap === cloneMap)

// 透過 for...of 可以列舉所有 Map 中的內容
for (let [key, value] of studentMap) {
    console.log(`The value of ${key} in Map is ${value}`)
}


// 取得 Map 的所有內容，回傳 Iterable 的物件
for (let [key, value] of studentMap.entries()) {
    console.log(key + ' = ' + value)
}

studentMap.forEach(function (value, key) {
    console.log(key + ' = ' + value)
})

// 取得 Map 的 key
for (let key of studentMap.keys()) {
    console.log(key)
}

// 取得 Map 的所有 values
for (let value of studentMap.values()) {
    console.log(value)
}
console.log('這是一段JS並用defer運作，JS會先下載並在HTML解析完依照排序執行，對於放在html下方的JS，效能會比較好，另外JS須放在header')
console.log('defer不適用於html文本中直接編寫的JS，因為不用透過下載')
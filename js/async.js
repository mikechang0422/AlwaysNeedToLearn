console.log('這是一段JS並用async運作，JS會先下載並在HTML解析前就執行，但JS無法排序而是照server下載的情況，先完成的先執行，因此async的JS應該用於不依賴HTML解析的功能，另外JS須放在header')
console.log('async不適用於html文本中直接編寫的JS，因為不用透過下載')

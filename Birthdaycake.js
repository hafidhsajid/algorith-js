var candles = [3,2,1,3,9,3,4,4,4,4,4,4,4]
var most=[]
candles.forEach((e)=>{
    count = 0
    candles.forEach((e1)=>{
        if (e==e1) {
            count++
        }
    })
    most.push({count:count, arr:e})
})
var res
var rescount
most.forEach((e)=>{
    if (res==undefined) {
        res = e.arr
        rescount = e.count
    }
    if (rescount<e.count) {
        res = e.arr
        rescount = e.count
        
    }
})
console.log(`number input: ${res}, count: ${rescount}`); // expect input: 4, count: 7

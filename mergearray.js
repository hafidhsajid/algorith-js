

A = ['a', 'p', 'p', 'l', 'e'] 
B = [1,2,3,4,5] 
var C =[]

for (const data in A) {
    C.push(A[data])
    C.push(B[data])
}
console.log(C);
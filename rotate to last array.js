// A = [1,2,3,4,5,6]  (R=2)  expect [3,4,5,6,1,2]
B = [0,9,8,7,6,5,4,3,2,1] 
// R = 4

A = [1,2,3,4,5,6] 
function rotasi(number, array) {
    for (let index = 0; index < number; index++) {
        var tmp
        tmp = array[0] 
        for (let index1 = 0; index1 < array.length-1; index1++) {
            array[index1] = array[index1+1]
        }
        array[array.length-1]=tmp
    }
    return(array);
}

console.log(rotasi(4,B))
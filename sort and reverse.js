function sort(arr) {
    var array = arr
    var temp;
    for (let i = 0; i <= arr.length; i++) {
        // const element = arr[i];
        for (let j = i+1; j < arr.length; j++) {
            // const element = array[j];
            if (arr[i]>arr[j]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp;
            }
            // console.log(arr[j]);
        }
        
    }
    console.log(arr);
}
function reverse(arr) {
    var res=[]
    for (let i = arr.length-1; i >= 0; i--) {
        res.push(arr[i])
    }
    console.log(res);
}
sort([6,23,12,22,1])
reverse([6,23,12,22,1])
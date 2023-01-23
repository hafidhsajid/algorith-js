function jumlahkelipatantigadanlima() {
    var res =0
    var bilangan=""
    
    for (let index = 1; index <= 25; index++) {
        if (index%3==0||index%5==0) {
            // console.log(index);
            res+=index
            bilangan+=index + " "
        }
    }

    return bilangan+"Jumlah total: "+res
}

console.log(jumlahkelipatantigadanlima());

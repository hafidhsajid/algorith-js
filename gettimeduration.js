// A=[1,3,2] k=3
// A = [1, 3, 2];
A=[2,1,5]

function checkarrayissamewithtarget(array, target) {
  var getminimum = parseInt(array[0]);
  for (let index = 0; index < array.length; index++) {
    //   console.log(getminimum);
    //   console.log(array[index]);
    //   console.log(index);
    //   console.log(getminimum <= array[index]) 
      if (getminimum <= array[index]) {
          getminimum = array[index];
    }
  }

  if (getminimum >= target) {
    return true;
  } else {
    return false;
  }
}

function addArrayduringtime(array, target) {
  for (let index = 0; index < array.length; index++) {
    array[index] += 1;
  }
  if (checkarrayissamewithtarget(array, target)==false) {
    addArrayduringtime(array,target)
  } else {
    return array
  }

}

const start = Date.now();

addArrayduringtime(A, 4);

const end = Date.now();
console.log(`Array A = [2,1,5]  dengan K=4, membutuhkan waktu ${end - start} detik`);

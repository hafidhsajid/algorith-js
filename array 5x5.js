function checkifsame(input) {
  var arrayMulti = [
    [34, 21, 32, 41, 25],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23],
  ];
  row = String(input).charAt(0);
  col = String(input).charAt(1);
//   console.log(row);
//   console.log(col);
  if (input == 0 || input == undefined) {
    row = 0;
    col = 0;
    if (arrayMulti[row][col] == input) {
        return "HARTA KARUN DITEMUKAN!";
      }
      return arrayMulti[row][col];
  } else {
    if (arrayMulti[row - 1][col - 1] == input) {
      return "HARTA KARUN DITEMUKAN!";
    }
    return arrayMulti[row - 1][col - 1];
  }

  // console.log(input);
}

function search(value) {
    if (value==undefined) {
        console.log(11);
    }
    if (checkifsame(value)=="HARTA KARUN DITEMUKAN!") {
        
        return"HARTA KARUN DITEMUKAN!";
    }else{
        console.log(checkifsame(value))
        return(search(checkifsame(value)))
    }
}
console.log(search());

function tukarBesarKecil(kalimat) {
  var temp ="";
  var hurufKecil ="abcdefghijklmnopqrstuvwxyz"
  var hurufKapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  for (var i = 0; i < kalimat.length; i++) {
    for (var j = 0; j < hurufKecil.length; j++) {
      if (kalimat[i]===hurufKecil[j]) {
        temp+= hurufKapital[j];
        break;
      }
      else if (kalimat[i]===hurufKapital[j]) {
        temp+= hurufKecil[j];
        break;
      }
    }
    if (kalimat[i]!==hurufKecil[j] && kalimat[i]!==hurufKapital[j]) {
      temp+= kalimat[i];
    }
  }
  return temp;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

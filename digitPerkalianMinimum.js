function digitPerkalianMinimum(angka) {
  var totalAngka = [];
  var jumlahDigit= [];
  var arr="";
  var temp="";
  var temp2="";

  for (var i = 0; i <= angka; i++) {
    for (var j = angka; j >= i; j--) {
      if (i*j=== angka) {
        arr = `${i}${j}`;
        totalAngka.push(arr);
        }
      }
    }
    // console.log(totalAngka);

    for (var k = 0; k < totalAngka.length; k++) {
      temp = totalAngka[k].length;
      jumlahDigit.push(temp);
    }
    // console.log(jumlahDigit);
    for (var l = 0; l < jumlahDigit.length; l++) {
      for (var m = 0; m < jumlahDigit.length; m++) {
        if (jumlahDigit[m] > jumlahDigit[m+1]) {
          temp2 = jumlahDigit[m];
          jumlahDigit[m] = jumlahDigit[m+1];
          jumlahDigit[m+1] = temp2;
        }
      }
    }

    return jumlahDigit[0];
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

//24 : 1, 2, 3, 4, 6, 8, 12, 24

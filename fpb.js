function fpb(angka1, angka2) {
  var fpb;

  // for (;;) {
  //   var r = angka1%angka2;
  //   var q = (angka1-r)/angka2;
  //   if (r=== 0) break;
  //   angka1 = angka2;
  //   angka2 = r;
  //   }
  //   return angka2;

  var res;
  var q;
  while (true) {
    res = angka1%angka2;
    q = (angka1 - res)/angka2;
    if (res === 0) {
      break;
    }
    angka1 = angka2;
    angka2 = res;
  }
return angka2;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

//pgcd(a,b) a%b = c

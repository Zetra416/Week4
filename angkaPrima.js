function angkaPrima(angka) {
  let res;
  if (angka=== 3 || angka=== 5 || angka === 7 || angka === 11) {
    res = true;
  }
  else if(angka%3=== 0 || angka%5=== 0 || angka%7 === 0 || angka%11=== 0){
    res = false;
  }
  else {
    res = true;
  }
  return res;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

//prime number : 1 3 5 7 11 13

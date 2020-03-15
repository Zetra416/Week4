function checkAB(num) {
    for (var j = 0; j < num.length; j++) {
      if (num[j]==="a" && num[j+4]==="b" || num[j]==="b" && num[j+4]==="a" ) {
        return true;
      }
    }
    return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

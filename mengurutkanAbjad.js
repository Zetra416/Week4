function urutkanAbjad(str) {
  var huruf;
  var kamus = "abcdefghijklmnopqrstuvwxyz";
  var kata ="";
  var res="";

//dengan array
//   for (var k = 0; k < str.length; k++) {
//     huruf = str[k];
//     kata.push(huruf);
//   }
//
//   for (var i = 0; i < kata.length; i++) {
//     for (var j = 0; j < kata.length- 1; j++) {
//       if (kata[j]> kata[j+1]) {
//         [kata[j], kata[j+1]] =[kata[j+1], kata[j]];
//       }
//     }
//   }
//
//   for (var i = 0; i < kata.length; i++) {
//     res += kata[i];
//   }
//
// return res;

//dengan string
  for (var i = 0; i < kamus.length; i++) {
    for (var j = 0; j < str.length; j++) {
      if (str[j]=== kamus[i]) {
        kata+= str[j];
    }
    }
  }
  return kata;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

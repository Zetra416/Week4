function cariModus(arr) {
  var maxVal = 0;
  var maxCount = 0;


  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[j]=== arr[i]){
        count++;
      }
    }
    if (count > maxCount) {
        maxCount = count;
        maxVal = arr[i];
    }
    else if (maxCount === arr.length) {
      maxVal = -1;
    }
    else if (maxCount === 1) {
      maxVal = -1;
    }
  }
  return maxVal;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

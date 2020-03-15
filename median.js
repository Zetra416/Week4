function cariMedian(arr) {
  var median;
  for (var i = 0; i < arr.length; i++) {
    var temp;
    var arrTemp;
    if (arr.length%2=== 0) {
      temp = arr.length/2;
      median = (arr[temp-1]+arr[temp])/2;
    }
    else {
      temp = arr.length%2;
      median = arr[temp+1];
    }
  }
  return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

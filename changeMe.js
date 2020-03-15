function changeMe(arr) {
  var data = {
    firstName:undefined,
    lastName: undefined,
    gender: undefined,
    age: undefined
  }
for (var i = 0; i < arr.length; i++) {
  // for (var j = 0; j < arr.length; j++) {
    data.firstName = arr[i][0];
    data.lastName = arr[i][1];
    data.gender = arr[i][2];
    data.age = arr[i][3];
    if (arr[i][3]===undefined) {
      data.age = "Invalid Birth Year";
    }
    else {
      data.age = 2020 - arr[i][3];
    }
  // }
  console.log(data);
}
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""

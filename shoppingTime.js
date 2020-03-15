function shoppingTime(memberId, money) {
  // you can only write your code here!
  var data = {
    memberId:undefined,
    money: undefined,
    listPurchased: undefined,
    changeMoney: undefined
  }

  var itemList = [
    {
      nama: "Stacattu",
      harga: 1500000
    },
    {
      nama: "Zoro",
      harga: 500000
    },
    {
      nama: "H&N",
      harga: 250000
    },
    {
      nama: "Uniklooh",
      harga: 175000
    },
    {
      nama: "Handphone",
      harga: 50000
    }
  ];

  var listPurchased = [];
  var total= 0;

  if (memberId === "" || memberId === undefined) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }
  else if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  }
  else {
    for (var i = 0; i < itemList.length; i++) {
      if (money >= itemList[i].harga) {
        listPurchased.push(itemList[i].nama);
        total += itemList[i].harga;
      }
    }
  }

  data.memberId = memberId;
  data.money = money;
  data.listPurchased = listPurchased;
  data.changeMoney = money - total;
  return data;
}


// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

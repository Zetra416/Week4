function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var awal= 0;
  var akhir= 0;
  var res = [];

  for (var i = 0; i < arrPenumpang.length; i++) {
    var angkot = {};
    for (var j = 0; j < rute.length; j++) {
      if (rute[j]===arrPenumpang[i][1]) {
        awal = j;
      }
      if (rute[j]===arrPenumpang[i][2]) {
        akhir = j;
      }
    }
    var biaya = Math.abs((akhir - awal)*2000);
    angkot.penumpang = arrPenumpang[i][0];
    angkot.naikDari = arrPenumpang[i][1];
    angkot.tujuan = arrPenumpang[i][2];
    angkot.bayar = biaya;
    res.push(angkot)
  }
  return res;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

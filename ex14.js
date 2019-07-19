function price(pointA,pointB) {
    // String.fromCharCode(charCodeAt(i)+1)  
    var distance = pointB.charCodeAt(0) - pointA.charCodeAt(0);
    var priceDis = distance * 2000;
    return priceDis;
}

price('A','B');



function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var resultArr = [];
    if (arrPenumpang.length === 0) {
        return [];
    }
    else {
        for (var i=0; i<arrPenumpang.length; i++) {
            var result = { 
                penumpang: "",
                naikDari: "",
                tujuan: "",
                bayar: 0
            };        
            result.penumpang = arrPenumpang[i][0];
            result.naikDari = arrPenumpang[i][1];
            result.tujuan = arrPenumpang[i][2];
            result.bayar = price(result.naikDari,result.tujuan);
            // console.log(result);
            resultArr.push(result);
        }
    }
    return resultArr;
  }

  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]
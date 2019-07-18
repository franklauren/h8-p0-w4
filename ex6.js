function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var digitPerkalian = [];
    for (var i=1; i<=angka; i++) {         //loop pembagi
        var jumlahIndex = 0;
        if (angka%i==0) {
            // console.log("i = " + i + " angka/i = " +angka/i);
            jumlahIndex = i.toString().length + (angka/i).toString().length;   //dapet 2 value
            digitPerkalian.push(jumlahIndex);
        }
    }
    return digitPerkalian.sort()[0];
}
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
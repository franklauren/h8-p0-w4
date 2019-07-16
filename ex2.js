function fpb(angka1, angka2) {    
    // you can only write your code here!
    var faktor1 = [];
    var faktor2 = [];
    var faktorBesar = [];
    for (var i=1; i<angka1;i++) {
        if (angka1%i==0) {
            faktor1.push(i);
        }
    }
    for (var j=1; j<angka2;j++) {
        if (angka2%j==0) {
            faktor2.push(j);
        }
    }
    // console.log("faktor1 :" + faktor1[0] + " faktor2 :" + faktor2[0]);
    for (var m=0;m<faktor1.length;m++) {
        for (var k=0; k<faktor2.length;k++) {
            if (faktor1[m]===faktor2[k]) {
                faktorBesar.push(faktor1[m]);
            }
        }
    } 
    return faktorBesar.sort(function(a, b){return b-a})[0];
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
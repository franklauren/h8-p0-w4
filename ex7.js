function urutkanAbjad(str) {
    // you can only write your code here!
    var strArr =[];
    for (var m=0; m<str.length; m++) {
        strArr.push(str[m]);
    }

    for (var k=0; k<strArr.length; k++) {
        for (var i=0; i<strArr.length; i++) {
            var temp = [];
            if (strArr[i]>strArr[i+1]) {
                temp.push(strArr[i+1]);
                temp.push(strArr[i]);
                strArr[i] = temp[0];
                strArr[i+1] = temp [1];
            }
        }
    }
    
    var joinStr = "";
    for (var n=0; n<strArr.length; n++) {
        joinStr+= strArr[n];
    }
    return joinStr;
}


  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
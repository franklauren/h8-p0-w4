function checkAB(num) {
    // you can only write your code here!
    for (var i = 0;i<num.length;i++) {              //loop a
        if (num[i]==="a") {
            for (var j = 0; j<num.length; j++) {
                if (num[j]==="b") {                 //loop b
                    if (j-i === 4 || j-i === -4) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
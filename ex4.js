function cariModus(arr) {
    // you can only write your code here!
    var angkaModus=[];
    for (var i = 0; i<arr.length; i++) {
        var modus=0;
        for (var j = 0; j<arr.length; j++) {
            if (arr[i]===arr[j]) {
                modus++;
                if (modus ===arr.length) {
                    return -1;
                }
                else if (modus==2) {
                    angkaModus.push(arr[j]);
                }
            }
        }
    }
    // console.log("modus = " + modus);
    if (angkaModus == 0) {
        return -1;
    }
    else {
        return angkaModus[0];
    }
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
function cariModus(num) {
    var sameNum;
    var mostSame = 1;
    for (var i=0; i<num.length; i++) {
        var sameCount = 0;
        for (var k=0; k<num.length; k++) {
            if (num[i]===num[k]) {
                sameCount++;
            }
            // console.log(mostSame + "<" + sameCount)
            if (mostSame<sameCount) {
                mostSame = sameCount;
                sameNum = num[k];
                // console.log("k = " + k + " num = " + sameNum);
            }    
        }
    }
    if (sameCount === num.length) {
        return -1;
    }
    if (sameNum === undefined) {
        return -1;
    }
    return sameNum;
}
 
 
 
 // TEST CASES
 console.log(cariModus([10, 4, 5, 2, 4])); // 4
 console.log(cariModus([5, 10, 10, 6, 5])); // 5
 console.log(cariModus([10, 3, 1, 2, 5])); // -1
 console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
 console.log(cariModus([7, 7, 7, 7, 7])); // -1
 console.log(cariModus([10, 4, 5, 5, 5, 2, 4]));
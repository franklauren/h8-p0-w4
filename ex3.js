function cariMedian(arr) {
    // you can only write your code here!
    if (arr.length%2==0) {
      var i=(arr.length/2)-1;
      var j=i+1;
      return (arr[i]+arr[j])/2;
    }
    else {
      return arr[Math.trunc(arr.length/2)];
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5

  // ganjil = length / 2, round kebwh
  // genap = length / 2, ((i-1)+i)/2
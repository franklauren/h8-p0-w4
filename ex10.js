function changeMe(arr) {
    // you can only write your code here!
    var obj = {};
    if (arr.length === 0) {
        return '""';
    }
    else {
        for (var i=0; i<arr.length; i++) {
            console.log((i+1) + "." + arr[i][0] + " " + arr[i][1] + ":");
            obj.firstName = arr[i][0];
            obj.lastName = arr[i][1];
            obj.gender = arr[i][2];
            obj.age = 2019 - arr[i][3];
            if (arr[i][3]===undefined || arr[i][3]>2019) {  //tambahan untuk birthyear diatas tahun skrg
                obj.age = "Invalid Birthyear"
            }
            console.log(obj);

        } 

    }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""
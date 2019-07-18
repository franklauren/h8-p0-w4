function shoppingTime(memberId, money) {
    // you can only write your code here!
    var dataMember = {
        memberId: memberId,
        money: money,
        listPurchased: [],
        changeMoney: money
    }
    var items = {
        name: ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'],
        price: [1500000,500000,250000,175000,50000]
    }
    if (memberId === '' || money === undefined) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }
    else if(money<items.price[items.price.length-1]) {
        return "Mohon maaf, uang tidak cukup";
    }
    else {
        for (var i=0; i<items.price.length; i++) {
            if (money>=items.price[i]) {
                dataMember.changeMoney-=items.price[i];
                dataMember.listPurchased.push(items.name[i]);
            }
        }
    }
    return dataMember;
}
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
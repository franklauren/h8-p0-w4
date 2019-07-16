function ubahHuruf(kata) {
	// you can only write your code here!
	var newWord = "";
	for (var i = 0; i<kata.length;i++) {
		newWord = newWord + String.fromCharCode(kata.charCodeAt(i)+1)  
	}
	return newWord;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
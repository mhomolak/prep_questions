// 8. Write a function that accepts an array and returns all the duplicate items
// in the array. The return array should contain distinct values.

function duplicate(arr) {
	let finalArr = [];
	let countObj = arr.reduce((finalResult, currentItem) => {
		// if there's no property on finalResult of the key
		// then we set the key equal to 1; first time it has been seen
		if(!finalResult[currentItem]) finalResult[currentItem] = 1;
		else finalResult[currentItem] += 1;
	  finalResult[currentItem] > 1 ? finalArr.push(currentItem) : null;
		return finalResult;
	}, {})

	return finalArr;
}

console.log(duplicate([1,3,2,3,2,4,4]));

// 9. Write a function to print all of the prime numbers less than 100. To print a
// number use a print(int) function that already exists.
// Ex. print(1), print(99), print(x)


function prime() {
	for (var i = 2; i <= 100; i++) {
		if(i === 2 || i === 3 || i === 5 || i === 7) {
			console.log(i);
		}
		else if(i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
			continue;
		}
		else {
			console.log(i);
		}
	}
}
console.log(prime());

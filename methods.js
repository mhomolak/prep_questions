// 5. Write a method that determines if two strings are anagrams of each other.
// For example, “TEAM” and “MEAT” would return true.

function anagram(str1, str2) {
	let obj1 = str1.toLowerCase().split("").reduce((finalResult, currentLetter) => {
		if(!finalResult[currentLetter]) finalResult[currentLetter] = 1;
		else finalResult[currentLetter] += 1;
		// Even though you only have the first letter, you must return the value to
		// continue assembling the object.
		return finalResult;
	}, {})
	let obj2 = str2.toLowerCase().split("").reduce((finalResult, currentLetter) => {
		if(!finalResult[currentLetter]) finalResult[currentLetter] = 1;
		else finalResult[currentLetter] += 1;
		return finalResult;
	}, {})

	if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;

	for(let key in obj1) {
		if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
			if (obj1[key] !== obj2[key]) return false;
		} else {
			return false;
		}
	}
  return true;
}

console.log(anagram("TEAM", "MEAT"));


// 6. Write a method that prints most frequently used letter(s) in a string of text.
// For example, if the string is “HELLO”, then “L” is the most frequently used letter.
// If the string is “TESTS”, then “T” and “S” are the most frequently used letters.
// To print a char use a print(char) function that already exists. Ex. print(‘T’),
// print(‘S’)


// function mostCommon(str) {
// 	let highCount = 0;
// 	let highestArry = [];
//
// 	let obj = str.toLowerCase().split("").reduce((finalResult, currentLetter) => {
// 		if(!finalResult[currentLetter]) finalResult[currentLetter] = 1;
// 		else finalResult[currentLetter] += 1;
// 		return finalResult;
// 	}, {})
//
// 	for(let key in obj) {
// 		if(obj[key] >= highCount) {
// 			highCount = obj[key];
// 		}
// 	}
//
// 	for(let key in obj) {
// 		if(obj[key] === highCount) {
// 			highestArry.push(key)
// 		}
// 	}
//
// 	return highestArry;
// }
//
// console.log(mostCommon("TESTS"));

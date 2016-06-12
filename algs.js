// 2. Write an algorithm that manually sorts an array called myArray that contains
// integers. Do not use any built-in sort methods.



// 5. Write a method that determines if two strings are anagrams of each other.
// For example, “TEAM” and “MEAT” would return true.

var regex = /[^a-z0-9]/gi;

var word1 = "team",
    word2 = "meat";

var str1 = this.word1.replace(regex, ''),
    str2 = this.word2.replace(regex, '');

this.isAnagram = str1.length > 0 && str1.length === str2.length && (str1.toLowerCase().split('')
	.sort().join('') === str2.toLowerCase().split('').sort().join(''));

// 6. Write a method that prints most frequently used letter(s) in a string of text.
// For example, if the string is “HELLO”, then “L” is the most frequently used letter.
// If the string is “TESTS”, then “T” and “S” are the most frequently used letters.
// To print a char use a print(char) function that already exists. Ex. print(‘T’),
// print(‘S’)



// 8. Write a function that accepts an array and returns all the duplicate items
// in the array. The return array should contain distinct values.


// 9. Write a function to print all of the prime numbers less than 100. To print a
// number use a print(int) function that already exists.
// Ex. print(1), print(99), print(x)


// function prime() {
// 	for (var i = 2; i <= 100; i++) {
// 		if(i === 2 || i === 3 || i === 5 || i === 7) {
// 			console.log(i);
// 		}
// 		else if(i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
// 			continue;
// 		}
// 		else {
// 			console.log(i);
// 		}
// 	}
// }
// console.log(prime());

// 2. Write an algorithm that manually sorts an array called myArray that contains
// integers. Do not use any built-in sort methods.

var myArray = [12, 30, 3, 7, 20, 1, 5, 16, 2];

function sort(myArray) {
  var change;
  do {
    change = false;
    for (var i = 0; i < myArray.length - 1; i++) {
      if (myArray[i] > myArray[i+1]) {
        var temp = myArray[i];
        myArray[i] = myArray[i+1];
        myArray[i+1] = temp;
        change = true;
      }
    }
  } while (change);
}

sort(myArray);
console.log(myArray);

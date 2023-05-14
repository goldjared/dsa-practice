/* Write a function called sumRange. It will take a number and return the sum of all 
numbers from 1 up to the number passed in.

Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6. */

// function sumRange(num) {
// 	if(num === 1) {
// 		return 1;
// 	}
// 	return num + sumRange(num - 1);
// 	/*
// 	3 + 2
// 	 + 1
// 	*/
// }

/* Question 2: Power function
Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1
*/
// function power(x, y) {
//   if(y === 0) return 1;
//   return x * power(x, y - 1);
//   /* call 4 2 * 2
//   , call 3 2 * 2
//   call 2 2* 2
//   call 1 2* 2
//   call 0, return 1

//   */
// }
/*
Question 3: Calculate factorial
Write a function that returns the factorial of a number. As a quick refresher, 
a factorial of a number is the result of that number multiplied by the number before it,
 and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

Sample:
factorial(5); // 5 * 4 * 3 * 2 * 1 === 120
*/

// function factorial(num) {
//   if(num === 1) return 1;
//   return num * factorial(num - 1);
// }

/*
Question 4: Check all values in an array
Write a function called all which accepts an array and a 
callback and returns true if every value in the array returns true when passed as 
parameter to the callback function

Sample:
var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false

accepts array, callback func
returns true if every val in array = true when passed to callback
*/
// function all(array, cb) {
// const copy = copy ||
// }
// console.log(allAreLessThanSeven)
/*
Question 5: Product of an array
Write a function called productOfArray which takes in an array of numbers
 and returns the product of them all

Sample:
var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60

*/

// function productOfArray(array) {
//   if(array.length === 0) {
//     return 1;
//   }
//   return array.shift() * productOfArray(array);

//   // return console.log(productOfArray(array).length);
// }

// console.log(productOfArray([1,2,3]));
/*
Question 6: Search JS object
Write a function called contains that searches for a value in 
a nested object. It returns true if the object contains that value.

Sample:
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
*/
// function contains(obj, value) {
//     // get obj, check if obj has obj in it, if so, call contains with that new object, and value.
//     // if obj does not have obj in it, check each key value for matcah.

//   if(!(typeof Object.values(obj)[0] === 'object')) {
// Object.values(obj).forEach((item) => {
//     if(item === value) {
//         return console.log('true');
//     } else {
//         return console.log('false');
//     }
// })
//   }
//   if(typeof Object.values(obj)[0] === 'object') {
//     // return console.log(Object.values(obj)[0]);
//     return contains(Object.values(obj)[0], value);
//   } else {
//     return console.log('end, no matches found');
//   }
// }
// var nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(contains(nestedObject, "foo22"))
// console.log(contains(nestedObject.data.info.stuff.thing.moreStuff, 44))
/*  
Question 7: Parse a multi-dimensional array
Given a multi-dimensional integer array, return the total number of integers stored inside this array

Sample:
var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
*/
// function totalIntegers(array) {
//   if (array.length === 0) {
//     return 0;
//   }
//   let integer = 0;
//   let first = array.shift();
//   if (Array.isArray(first)) {
//     integer += totalIntegers(first);
//   } else if (Number.isInteger(first)) {
//     integer += 1;
//   }
//   return integer + totalIntegers(array);

//   //each item in array, if integer, integer += 1,
// }
// var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
// console.log(seven);
// var seven = totalIntegers([5]); // 7
/*
i need to go through, a multi dim array
using recursion
how? 
check if array, if yes, go inside first array, check if array, if yes, go inside first array, check 
if array, if not array, shift value, check if integer. 

if integer, add 1 to integer variable. call recurse.
if not integer, call recurse.
start of recurse shou;ld check if array is empty. if empty, return integer.
*/
/*
Question 8:
Write a function that sums squares of numbers in list that may contain more lists

Sample:
var l = [1,2,3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400
*/
function SumSquares(array){
	if(array.length === 0) return 0;
	let total = 0;

	for(let i = 0; i < array.length; i++){
		if(Array.isArray(array[i])){
			total += SumSquares(array[i]);
		} else {
			total += array[i] * array[i];
		}
		
	}
	return total;
}


// var l = [1,2,3]; 
// console.log(sumSquares(l)); // 1 + 4 + 9 = 14

// l = [[1,2],3]; 
// console.log(sumSquares(l)); // 1 + 4 + 9 = 14

// l = [[[[[[[[[1]]]]]]]]] 
// console.log(sumSquares(l)); // 1 = 1
// console.log(l === [])

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400
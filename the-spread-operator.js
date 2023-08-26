/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);   
    // changing the 2nd array will change the first too.
console.log('First array:', arr1);
console.log('Second array:', arr2);

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];
arr4.push(7);
    // The spread operator (...) will copy the array rather than mirror it.
console.log('Third array:', arr3);
console.log('Third array:', arr3);
console.log('Fourth array:', arr4);

// Copying an object
let obj1 = { a: 1, b: 2, c: 3 };
    // Add to the object with a comma and the new item.
let obj2 = { ...obj1, d: 4 };
    // Or change a part of the object by redefining it.
let obj3 = { ...obj1, b: 5 };
console.log('First object:', obj1);
console.log('Second object:', obj2);
console.log('Third object:', obj3);

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, 'x', 'y', 'z'];
console.log(arr5);
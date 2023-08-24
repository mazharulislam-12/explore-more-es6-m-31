//map ==> loops through each element of the array and do the operation that you pass in the call back function and hold the result form each operation in an array and finally returns you the array

//1st rules
const numbers = [5, 4, 6, 8];
function doubledIt(num) {
    console.log('num now', num);
    return num * 2;
}
const result = numbers.map(doubledIt);
console.log(result);

// 2nd rules
const double2 = n => n*2;
const output = numbers.map(double2)
console.log(output);

// 3rd rules 
const output2 = numbers.map(n => n*2);
console.log(output2);




// const doubled = [];
// for (const num of numbers) {
//     const doubled = num * 2;
//     doubled.push(doubled);
// }
// console.log(doubled);



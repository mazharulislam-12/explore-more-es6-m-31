/*
1. var let const
2. default parameter
3. template string
4. arrow function
5. destructuring and spread operator
6. Object. keys, Object.values
7. for of use in string,array 
8. for in use in  object
9. 

*/


// template string
const age = 30;
const phone = [231100031202310.];
const person = {
    name: 'shakib khna',
}
const message = `Hi  I am ${person.name}. I am now ${age}. My phone number ${phone} `
// console.log(message);

// arrow function
const square = x => x * x;
const sum = (a, b) => a + b;
console.log(square(2));
console.log(sum(2, 6));

// destructuring and spread operator
const {age, x, y, ...others } = {x: 2, y: 5, z: 9, name: 'ovijeet', age: 32};

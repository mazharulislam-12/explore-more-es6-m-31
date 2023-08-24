const numbers = [75, 56, 63, 78, 23, 70, 77, 55];
const total = numbers.reduce((previous , current) => previous + current, 0);
console.log(total);
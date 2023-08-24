const numbers = [12, 10, 15, 8, 9, 6];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
const fiveBonus = numbers.map(num => num + 5);
console.log(fiveBonus);
const half = numbers.map(num => num / 2);
console.log(half);


const friends = ['Tom', 'Jon', 'Doe', 'Maikal']
const length = friends.map(frnd => frnd.length)
console.log(length);
const firstLatter = friends.map(friend => friend[0]);
console.log(firstLatter);
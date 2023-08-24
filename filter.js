// filter selects elements base on a condition and result an array with the elements that fulfilled the condition
const numbers = [1, 5, 6, 10, 9];

const players = [75, 56, 63, 78, 23, 70, 77, 55];
const selected = players.filter(p => p > 70)
console.log(selected);

// odd number filter
const selectes = players.filter(p => p%2 ===1);
console.log(selectes);


const friends = ['Tom', 'Jon', 'Doe', 'Micheal']
const oddFriend = friends.filter(friend => friend.length > 4)
console.log(oddFriend);
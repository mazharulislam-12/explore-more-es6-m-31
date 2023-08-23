// data access
const data = [{id: 1, name: 'Abul Khan', address: 'Dhaka'}];
console.log(data[0].address);

const products = {
    count: 5000,
    data:[
        {id: 1, name: 'lenovo laptop', price: 70000 },
        {id: 2, name: 'macbook', price: 160000 },
    ]
};
// second product price
console.log(products.data[1].price);



const user = {
    id:5001,
    name: 'shoriful raj',
    address: {
        street:{
            first: '54/ 45 uttara',
            second: '45, dhanmondi',
            third: 'mohakhali'
        },
    },
    city: 'dhaka',
}
console.log(user.address.street.second);
console.log(user.address.street?.city);

// 

const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 50000},
    {id: 3, name: 'hp', price: 550000},
    {id: 4, name: 'mac', price: 1550000}
];





const Teacher = {
    
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is teaching math');
    }
}
const tapon = new Teacher ('Tapon is', 'Math');
console.log(tapon);
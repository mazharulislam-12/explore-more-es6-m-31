class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`sleping now ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}
const kodom = new Person('Kodom ali', 56);
console.log(kodom);
kodom.sleep();
const jon = new Person('Jon doe', 26);
jon.sleep()

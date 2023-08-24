const Vehicle {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('The car is running');
    }
}

class Bus extends Vehicle ()  {
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

const truck  extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
    
}
//oоп

class user { // шаблоны это классы .. клас+об'ект
    constructor(name, age) { // constructor it's a method of the class, help to create an object
        this.name = name,
            this.age = age
    }
    sayHello() {
        console.log(`Hello ${this.name}`)
    }
}

const client = new user("Dasha", 28)
const client2 = new user("Dima", 28)

client.sayHello()
// client2.sayHello()

// допомогаеє не дублювати код

//Інкапсуляція
class bankAccount {
    #balance; // to make property private `#` can be used with name of the prop.


    constructor(owner, balance) {

        this.owner = owner,
            this.#balance = balance // this prop is private
    }
    showBalance() {
        console.log(`balance ${this.#balance}`)
    }
    DecompressionStream(amount) {
        if (amount <= 0) {
            console.log("amount <=0")
        }
        this.#balance += amount
    }
}

const user = new bankAccount("Dasha", 800)
console.log(user)
///lдописать

// Наслідування
class animal {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat`)
    }

}
//унаслідування задається через extends
class dog extends animal {
    bark() {
        console.log(`${this.name} it's dog`)
    }
}

// const dogs = new dog("Rex");
// //const animals = new animal("pets")
// dogs.bark()
// //animals.eat()
//animals.bark() //  батьквський класс не може мати доступ до методів и властивостей дочернього классу, але навпаки все ок

class cat extends animal {
    mew() {
        console.log(`${this.name} it's cat`)
    }
}
const cats = new cat("Taras");
cats.mew()



//super, для того чтобі мі могли унаследовать властивості від родітельского класа, все супер повині йти перед .this

class animal {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat`)
    }
    voice() {
        console.log("voice of animal")
    }
}
class dog extends animal {
    constructor(name, color) {
        super(name),
            this.color = color
    }
    bark() {
        console.log(`${this.name} it's dog`)
    }
    voice() {
        console.log("dog is barking")
    }
}
const dogs = new dog("Rex", "black");

console.log(dogs.name)
console.log(dogs.color)


//полімарфізм

const animals = [
    new animal(),
    new dog()
]

for (const voice of animals) {
    animals.voice()
}

//абстракція
class coffeMachine {
    makeCoffe() {
        this.#hotWater(),
            this.#addCoffe(),
            console.log("Coffe ready")
    }
    #hotWater() {
        console.log("Heat water")
    }
    #addCoffe() {
        console.log("Add coffe")
    }
}
const coffe = new coffeMachine()
coffe.makeCoffe()


class client {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    showClient() {
        console.log(`${this.name} ${this.age}`)
    }
}
const clients = new client("Dasha", 28);
console.log(clients.age);

clients.age = -1
console.log(clients.age)

//get method
class client1 {
    constructor(name) {
        this.name = name
    }

    get clientName() {
        return this.name
    }
}
const clients1 = new client1("Dasha");
console.log(clients1.clientName);

//set method
class client1 {
    constructor(name) {
        this.name = name
    }

    set clientName(newName) {
        this.name = newName
    }
}
const clients2 = new client1("Dasha");
console.log(clients2.name);

//get+set
class client2 {
    constructor(name) {
        this._name = name
    }

    get clientName() {
        return this._name
    }

    set clientName(newName) {
        this._name = newName
    }
}
const clients2 = new client2("Dasha");
console.log(clients2.name);
clients2.name = "Daria";
console.log(clients2.name);


//
class calcuator {
    static add(a, b) {
        return a + b
    }
}
console.log(calcuator.add(3,5))

//prototype
class car{
    drive(){
        console.log("Drive")
    }
}
const car1 = new car();
const car2 = new car()
console.log( car1.drive === car2.drive)


//export
export class coffeMachine1 {
    makeCoffe() {
        this.#hotWater(),
            this.#addCoffe(),
            console.log("Coffe ready")
    }
    #hotWater() {
        console.log("Heat water")
    }
    #addCoffe() {
        console.log("Add coffe")
    }
}
const coffe = new coffeMachine1()
coffe.makeCoffe()
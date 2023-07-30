// Day 5 Exercise 1
// interface CartItem {
//   id: number;
//   title: string;
//   variantId?: number;
// }

// function createCartItem(item: CartItem) {
//   console.log(`Adding "${item.title}" to the cart!`);
// }
// const shoe = { id: 1, title: "shoes" };
// createCartItem(shoe);

// Day 5 Exercise 2
// interface Person {
//   name: string;
//   age: number;
// }

// class Person implements Person {
//   constructor(name: string, age: number) {}
//   present() {
//     console.log(`${this.name} is ${this.age} years old.`);
//   }
// }
// const jane = new Person("Jane", 34);
// jane.present();

// Day 5 Exercise 3
// class MC {
//   greet(event: string = "party"): string {
//     return `Welcome to the ${event}`;
//   }
// }
// const mc = new MC();
// console.log(mc.greet("show"));

// Day 5 Exercise 4
// class Employee {
//   constructor(public title: string, public salary: number) {} // When a parameter is defined as public, it´s already assigned
// }

// const employee = new Employee("Engineer", 10000);
// console.log(
//   `The employee's title is "${employee.title}" and they earn $ "${employee.salary}"`
// );

// Day 5 Exercise 5
// interface UserSchema {
//   id: number;
//   name: string;
// }

// class User implements UserSchema {
//   constructor(public name: string, readonly id = 5) {} // Readonly prevents a variable from got its values assigned outside the class
// }

// const user = new User("Dog", 1);
// console.log(user.id);

// user.name = "Harold"; // Can change
// // user.id = 5; //Can´t change

// console.log(`user`, user);

// Day 6
//readonly
// class Movies{
//   id: number
//   name: string
//   private country= "USA"
//   readonly year= 1999
  
//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
//   displayCountry() {
//     return this.country
//   }

// }
// //Private properties can´t be used outside the class
// //readonly properties can´t be modified outside the class but can be accessed
// //let movie1 = new Movies(1, "Dejavu", "BR")//Error due the private property country
// let movie1 = new Movies(1, "Dejavu")
// // movie1.year = 2000 //Error due the readonly property year
// // movie1.country = "USA" //Error due the private property country, the property is not enabled
// console.log(movie1)
// console.log(movie1.displayCountry())


// Parametros do construtor
// class Movies{
//   // usual way
//   // id: number
//   // name: string
//   // constructor(id: number, name: string) {
//   //     this.id = id;
//   //     this.name = name;
//   //   }
//   constructor(public readonly id = 2, public name: string, private _year: number) {
//    }// Year can be acccesd with a get and set method
//   // ? allows to the method not receive the parameter without error
// }

// let movie1 = new Movies(1, "Dejavu",2000)// It´s possible to create a new object assigning the readonly property
//but it´s not possible to assign the value throught the object
//console.log(movie1.id=1)// error
// console.log(movie1.name="Dejavu 1")// No error

//let movie2 = new Movies(2, "Terminator", 1985)// Error, private property year it´s no assignable
// let movie2 = new Movies(2, "Terminator",1985)
// console.log(movie2)

// Index Signatures
// class HotelRooms{
//  [roomNumber:string]:string;// Array for dynamic properties
  
// }
// let room = new HotelRooms();
// room.A201 = 'Josias'// A201 it´s a dynamic property
// room.A202 = 'Ana'
// room.roomNumber = 'Teste'
// console.log(room)
// console.log(room.A201)

// Inheritance
// class Person{
//   constructor(public firstname: string, public lastName: string, public age: number) { }
//   greet():string {
//     return`Hello my name is ${this.firstname} ${this.lastName}`;
//   }
// }

// Bank client
// class BankClients extends Person {
//   getRole(): string {// With Inheritance it´s possible to acces the father class properties
//     return `Hello ${this.firstname} ${this.lastName} your role is Bank Client`
//   }
// }

// let client1 = new BankClients('Josias', 'Valentim', 35)
// console.log(client1)
// client1.greet()
// console.log(client1.getRole())
// Override
// class Statff extends Person{
//   override greet(): string {
//       return super.greet() + ", remember that our clients are the real asset!"    
//   }
// }

// let staff = new Statff("Jacob", "Sulivan", 35);
// console.log(staff.greet())

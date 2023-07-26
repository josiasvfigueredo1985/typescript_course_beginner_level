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
interface UserSchema {
  id: number;
  name: string;
}

class User implements UserSchema {
  constructor(public name: string, readonly id = 5) {} // Readonly prevents a variable from got its values assigned outside the class
}

const user = new User("Dog", 1);
console.log(user.id);

user.name = "Harold"; // Can change
// user.id = 5; //Can´t change

console.log(`user`, user);

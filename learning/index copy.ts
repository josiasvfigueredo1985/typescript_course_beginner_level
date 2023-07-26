// Day 3 - Exercise 1

// let pi = 3.14159;

// function multiPi(pi: number) {
//     let tau = pi * 2;
//     console.log(`${tau} is ${pi} times two.`);
// }
// multiPi(pi)

// Day 3 - Exercise 2

// let pie: string
// pie = 'blueberry'

// console.log(`I like to eat ${pie}-flavored pie.`)

// Day 3 - Exercise 3

// let isDouglas: boolean
// isDouglas = true
// console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`)

// Day 3 - Exercise 4

// const integer: number = 6;
// const float: number = 6.66;
// const hex: number = 0xf00d;
// const binary: number = 0b1010011010;
// const octal: number = 0o744;
// const negZero: number = -0;
// const actuallyNumber: number = NaN;
// const largestNumber: number = Number.MAX_VALUE;
// const mostBiglyNumber: number = Infinity;

// const members: number[] = [
//     integer,
//     float,
//     hex,
//     binary,
//     octal,
//     negZero,
//     actuallyNumber,
//     largestNumber,
//     mostBiglyNumber
// ];

// members[0] = Number('12345');

// console.log(members);

// Day 3 - Exercise 5

// const sequence: number[] = Array.from(Array(10).keys());
// const animals: string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];
// // const stringsAndNumbers: [number, string, number, string, number, string] = [1, 'one', 2, 'two', 3, 'three'];
// const stringsAndNumbers: (number | string)[] = [1, 'one', 2, 'two', 3, 'three'];
// const allMyArrays: (string | number)[][] = [sequence, animals, stringsAndNumbers];

// console.log(allMyArrays);

interface Item {
  name: string;
  price: number;

  purchasedItem(message: string): void;
}

let product1: Item;
product1 = {
  name: "Product 1",
  price: 100,
  purchasedItem(message: string) {
    console.log(message + " " + this.name + " : " + this.price);
  },
};
product1.purchasedItem("Thanks for your purchase!");

class Users {
  protected name: string;
  private balance: number = 0;

  constructor(n: string, bl: number) {
    this.name = n;
    this.balance = bl;
  }
  addMoney(amount: number) {
    this.balance += amount;
  }
}

const user1 = new Users("Josias", 1200);
const user2 = new Users("Jhon", 200);
user1.addMoney(100);
console.log(user1);
console.log(user2);

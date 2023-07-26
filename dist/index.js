"use strict";
class User {
    constructor(name, id = 5) {
        this.name = name;
        this.id = id;
    }
}
const user = new User("Dog", 1);
console.log(user.id);
user.name = "Harold";
console.log(`user`, user);

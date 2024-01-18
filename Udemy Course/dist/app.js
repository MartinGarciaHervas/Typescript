"use strict";
class Person {
    constructor(n) {
        this.age = 26;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name + '. I"m ' + this.age + ' years old');
    }
}
let user1;
user1 = new Person('Martin');
user1.greet('Hi there!, I am');

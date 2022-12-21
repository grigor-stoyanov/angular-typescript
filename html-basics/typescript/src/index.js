"use strict";
// TypeScript is more strict around types but must be compiled first
// It is main code base for Angular framework
let username = 'Ivan';
console.log(username);
function createUser(username, age, height = 0) {
    return {
        username,
        age,
        height
    };
}
const ivan = createUser('Ivan2');
let isOpen = false;
isOpen = true;
let isOpenArray = [false, true];
function id(item) {
    return item;
}
let num = id({ prop: 'asd', prop1: null });
// Public types
// Decorator used in Angular
// @Component({
//     selector: 'app-root'
// })
class MyClass {
    // public anotations automatically get attached to this
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const pesho = new MyClass('Ivan', 20);
// private hides the attribute (kind of)
ivan.age = 1000;
ivan.test.best = 1000;
// var MyClassTwo = /** @class */ (function () {
//     function MyClassTwo(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     return MyClassTwo
// }());
//
// var andrey = new MyClassTwo('Andrey', 20);
// andrey.age = 100;
// using command ./node_modules/.bin/tsc --init u can configure compiler with the tsconfig.json file
// configuring the outDir and srcDir

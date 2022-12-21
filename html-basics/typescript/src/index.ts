// TypeScript is more strict around types but must be compiled first
// It is main code base for Angular framework


let username: string = 'Ivan';
console.log(username);

function createUser(username: string, age?: number, height = 0) {
    return {
        username,
        age,
        height
    };
}

const ivan = createUser('Ivan2')
let isOpen: boolean = false;
isOpen = true;
let isOpenArray: boolean[] = [false, true]

function id<T>(item: T): T {
    return item;
}

interface IMyDto {
    prop: string,
    prop1: null
}

// Generic types
type complextype = IMyDto | number
type BooleanArray = Array<boolean>
let num = id<complextype>({prop: 'asd', prop1: null});


// Public types

// Decorator used in Angular
// @Component({
//     selector: 'app-root'
// })
class MyClass {
    // public anotations automatically get attached to this
    constructor(public name: string, private age: number) {
    }
}

const pesho = new MyClass('Ivan', 20);
// private hides the attribute (kind of)
(ivan as any).age = 1000;
(ivan as unknown as { test: { best: 1000 } }).test.best = 1000;


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


enum UserRole {
    Admin = 1,
    User,

}


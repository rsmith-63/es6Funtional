/**
 * Created by rob on 6/23/2017.
 */
/* primitives */
let c;
let d= null;
console.log ( ' type of c primitives', typeof(c));
typeof(d);
console.log ( ' type of d primitives', typeof(d));

// object literal
let objLit = {name:'rob', printName: function(){console.log(this.name)}};
objLit.dumpThis = function(){console.log('keword THIS',this)};
let q = objLit.dumpThis;
objLit.dumpThis();
 q = objLit.dumpThis;
q();
typeof q;

// function reference
let pFunt = objLit.printName;
pFunt.prototype;
let willNm = {name:'will'};
let newFunc = pFunt.bind(willNm);
newFunc();

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
let  rand = new Person('Rand McNally', 33, 'M');

Object.getPrototypeOf(rand);

let cat = {
    breed: 'dog cat',
    makeSound: function () {
        console.log(this.sound)
    }
};

let myCat = Object.create(cat);
myCat.sound = 'Woof Woof';
myCat.makeSound();

var dog = {
    breed:'cat dog',
    name:'woa'};

//The Object.create() method creates a new object with the specified prototype object and properties.
var myDog =Object.create(dog);

dog.isPrototypeOf(myDog);

myDog.printNm  = function () { console.log(this.name);};
//add function to prototype
dog.printBreed = function () {console.log(this.breed);};
//call on mydog
myDog.printBreed();
//call on dog
dog.printBreed();

// don't use this example
// Shape - superclass
let Shape = function () {
    this.x = 0;
    this.y = 0;
};

// superclass method
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
};

// Rectangle - subclass
 var Rectangle =function () {
    Shape.call(this); // call super constructor.
};

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
    rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
    rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
//If you wish to inherit from multiple objects, then mixins are a possibility.
// don't use this example






let aDog =Object.create(dog);

aDog.printNm = function () { console.log(this.name);};
aDog.sound = function () { console.log('wooo wooo')};
dog.isPrototypeOf(aDog);
//write your onwn Object create
//bad perf setPrototypeOf
function ObjCreate(proto) {
  const obj = {};
  Object.setPrototypeOf(obj,proto);
  return obj;
}
let cow ={
    type : 'milk',
    init: function (breed) {
        this.breed = breed;
        return this;
    }
};
let  milkCow = Object.create(cow).init('jersey');
milkCow.color = 'brown';
milkCow.sound = function () {
    console.log('moo');
};
milkCow.whatColor = function () {
    console.log( this.color)
};


milkCow.sound();
milkCow.whatColor();


class Name {
    constructor() {
        this.first = 'Billy';
        this.middle = 'Bob';
        this.last = 'Smith';
    }

    sayName() {
        "use strict";
        return ` nombre is ${this.first} ${this.middle} ${this.last}`;
    }
}
Name.birthday = '1900';
// create a staic fuction on the class
Name.printBirthday = function (){console.log('Your bithday', this.birthday)};

// let newName = new Name();
// newName.printName();
//
// newName.constructor.printBirthday(); //works
// typeof Name;
// typeof newName.constructor
// typeof newName.constructor.prototype;
// typeof newName
// newName.printBirthday(); // throws an error

let printName = function () {
    return ` nombre is ${this.first} ${this.middle} ${this.last}`;
};
//pojo
let names = {first: 'James', middle: 'Tiberius', last: 'Kirk'};
names.captainName = printName;


let captain = Object.create(names);
captain.captainName();
names.firstName = function(){console.log(`first name is ${this.first}`)};
     function Animal (sound) {
         this.sound = sound;
     }

Animal.prototype.say = function (){ console.log(`this is the sound ${this.sound}`)};
let ana = new Animal('woof');
ana.say();
//static function
Animal.prototype.kind = 'dog';
Animal.prototype.kindOf = function(){console.log(`this is the kind ${this.kind}`)};
//
ana.kindOf();
Object.getOwnPropertyDescriptor(Animal.prototype,'kind');
//create your own new
function createObj(constructor) {
    let obj = {}; // 1 create new obj
    Object.setPrototypeOf(obj,constructor.prototype); // 2set prototype
    //var arg = Array.from(arguments);
    let argsA = Array.prototype.slice.apply(arguments);

    return constructor.apply(obj,argsA.slice(1)) || obj; // 3 execute constructor with this of new obj(i.e apply) 4 ret new obj

}
var myNewAna1 = createObj(Animal, 'mewow');
myNewAna1.say();
function Silly (sound) {
    this.sound = sound;
    return {
        goofy:true
    }
}
myNewAna1 = createObj(Animal, 'mewow');
myNewAna1.say();
function Silly (sound) {
    this.sound = sound;
    return {
        goofy:true
    }
}

var thing = createObj(Silly,'mewow');
console.log(' Hello from obj constructor', thing );
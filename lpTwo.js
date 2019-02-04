/**
 * Created by rob on 6/24/2017.
 */
var dog = {
    breed:'cat dog',
    name:'woa'};
    //The Object.create() method creates a new object with the specified prototype object and properties.
    let myDog = Object.create(dog);

dog.isPrototypeOf(myDog);

myDog.printNm  = function () { console.log(this.name);};
//add function to prototype
dog.printBreed = function () {console.log(this.breed);};
//call on mydog
myDog.printBreed();
//call on dog
dog.printBreed();


function Animal (sound) {
    this.sound = sound;
}
var ana = new Animal('woof');
ana.say();
Animal.prototype.kind = 'dog';
Animal.prototype.kindOf = function(){console.log(`this is the kind ${this.kind}`)};
//
ana.kindOf();
ana.say = function(){console.log(`this is the sound ${this.sound}`)};
ana.say();
var a2 = Object.create(Animal.prototype);
a2.kindOf();



var myNewAna = createObj(Animal,'mewow');
myNewAna.kindOf();

function Silly (sound) {
    this.sound = sound;
    return {
        goofy:true
    }
}

function createObj(constructor) {
    let obj = {}; // 1 create new obj
    Object.setPrototypeOf(obj,constructor.prototype); // 2set prototype
    //var arg = Array.from(arguments);
    let argsA = Array.prototype.slice.apply(arguments);

    return constructor.apply(obj,argsA.slice(1)) || obj; // 3 execute constructor with this of new obj(i.e apply) 4 ret new obj

}

var thing = createObj(Silly,'mewow');
console.log(' Hello from obj constructor', thing );
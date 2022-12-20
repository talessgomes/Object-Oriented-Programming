function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log("Woof!")
}


// Only change code above this line

let beagle = new Dog();
console.log(beagle instanceof Animal); //true
console.log(beagle.constructor); //[Function: Dog]
beagle.bark(); //Woolf!
beagle.eat();  //nom nom nom
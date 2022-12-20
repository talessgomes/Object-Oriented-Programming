function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line



let duck = new Bird();
Bird.prototype.constructor = Bird;
duck.constructor

let beagle = new Dog();
Dog.prototype.constructor = Dog;
beagle.constructor;

console.log(duck.constructor); // [Function: Bird]
console.log(beagle.constructor); // [Function: Dog]


/*Nesta atividade eu vou pegar o objecto da supertype de Animal e passar
para Dog e Bird. Mas a variável vai receber a key de Animal e função
de bird e dog */
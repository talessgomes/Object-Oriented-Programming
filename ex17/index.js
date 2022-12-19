function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

duck.eat(); //nom nom nom
beagle.eat(); //nom nom nom

console.log(duck instanceof Animal); //true
console.log(beagle instanceof Animal); //true


/*Vou criar um supertype chamado Animal, onde irei passar as informações
em cada variável. Assim criando novo objetos e definindo novos objectos */
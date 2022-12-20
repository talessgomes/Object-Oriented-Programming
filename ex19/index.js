function Animal() { }
Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("my name is " + this.name)
    }
};

function Dog(name) {
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
// Only change code below this line


let beagle = new Dog("Pochita");

beagle.eat(); //nom nom nom
beagle.describe(); // my name is Pochita


/*Neste exercício eu vou pegar o supertype de Animal, onde ele vai passar todas
as keys e vou poder pegar os valores usando a função dog.
Eu vou conseguir utilizar criando um object do prototype Animal,
assim ele vira o pai e o Dog o filho */
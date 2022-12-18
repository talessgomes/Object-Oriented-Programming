function Dog(name) {
    this.name = name;
}



Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

let pochita = new Dog("Pochita");

console.log(pochita); // { name: 'Pochita' }
pochita.eat(); // "nom nom nom"
pochita.describe(); // "My name is Pochita"


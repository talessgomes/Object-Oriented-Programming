function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");



console.log(beagle.numLegs);

/*prototype é usado para compartilhar alguma propriedade automaticamente,
ele é como um criador de objetos.
*/
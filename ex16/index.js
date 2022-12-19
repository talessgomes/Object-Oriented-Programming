function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");


Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);//true


/*Neste exercício eu vou estar pegando o prototype de beagle, que é Dog,
também vou pegar o prototype de Dog que é Object */
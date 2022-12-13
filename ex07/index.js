function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog();

console.log(terrier); // { name: undefined, color: undefined, numLegs: 4 }


/*Passando parâmetros na função, eu consigo deixar mais automatizado o meu
código */
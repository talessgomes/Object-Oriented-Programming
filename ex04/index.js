let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

console.log(dog.sayLegs());

/*Neste exercício é para que seja feito a troca do objeto dog por this
para referenciar a variável, isso já vai deixar o código mais prático */
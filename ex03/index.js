let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + dog.numLegs + " legs." }
};

console.log(dog.sayLegs());

/* Está função tem um retorno que eu consigo chamar usando diretamente o nome
da variável e o seu objeto */
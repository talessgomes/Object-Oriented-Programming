function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = []; //name
let prototypeProps = []//numlegs

// Only change code below this line

for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property)
    } else {
        prototypeProps.push(property);
    }
}

console.log(ownProps); //[ 'name' ]
console.log(prototypeProps);//[ 'numLegs' ]


/*Vou verificar se existi a propriedade colocada na variável beagle,
se não tiver, eu vou passar a propriedade que eu adicionei manualmente */
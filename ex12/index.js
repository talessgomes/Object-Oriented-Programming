function Dog(name) {
    this.name = name;
}

let rufus = new Dog("Rufus");

// Only change code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}

console.log(rufus.constructor === Dog); //true

/*Verificando se rufus pode é um cachorro. A função verifica se o constuctor
do canditado é igual a Dog e retorna true */
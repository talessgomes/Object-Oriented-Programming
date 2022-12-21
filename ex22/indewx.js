function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };



function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function() { return "Alas, this is a flightless bird.";}




// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
let bird = new Bird();
console.log(bird.fly());



/*Este exercício mostra que o javascript instância o objeto até ele encontrar
o primeiro, assim ele para. Como a primeira coisa que será analisada, vai ser
que a função penguin já existe a função fly, ele não vai precisar ir até
a função Bird, porque ele já encontrou o que precisava */
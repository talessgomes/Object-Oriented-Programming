let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            }
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Sing a awesome music!")
            };
        }
    }
})();

function Bird(name) {
    this.name = name;
};

let singingBird = new Bird("Pombo Cantor");

console.log(singingBird);

funModule.singMixin(singingBird); //passando a função de voar

console.log(singingBird.sing()); // Flying, wooosh!
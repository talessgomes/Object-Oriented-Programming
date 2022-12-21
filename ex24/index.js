function Bird() {
    let weight = 15;

    this.getWeight = function () {
        return weight;
    };
}

let ducky = new Bird(16);
console.log(ducky.getWeight()); // 15


/*A função de getWeight vai fazer com que o número de weight se torne privado,
ou seja, o número não vai mudar */
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Only change code below this line

let glideMixin = function (obj) {
    obj.glide = function () {
        console.log("I'm a " + this.name + " and i know glide!");
    }
}

glideMixin(bird);
glideMixin(boat);

console.log(bird); // { name: 'Donald', numLegs: 2, glide: [Function] }
bird.glide(); // I'm a Donald and i know glide!

console.log(boat); // { name: 'Warrior', type: 'race-boat', glide: [Function] }
boat.glide(); // I'm a Warrior and i know glide!


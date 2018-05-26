var LivingCreature = require("./class.js")
module.exports = class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = Math.round(Math.random() * 4);

    }

    bazmanal() {

        this.multiply++;
        var norVandak = this.yntrelVandak(0)[Math.floor(Math.random()* this.yntrelVandak(0).lenght)];//esi poxel em  var nortex = Math.random(this.yntrelVandak(0));

        if (this.multiply >= 5 && norVandak) {
             console.log(norVandak);
            var norXot = new Grass(norVandak[0], norVandak[1]);
             console.log(norVandak[0]);
            grassArr.push(norXot);
           
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }

}
var LivingCreature = require("./class.js")
module.exports = class Xotaker extends LivingCreature {
    constructor(x, y, ser) {
        super(x, y, ser);
        this.ser = (ser == 0 ? "arakan" : "igakan");


    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    sharjvel() {
        // var nortex = Math.random(this.yntrelVandak(0));
        var nortex = this.yntrelVandak(0)[Math.floor(Math.random() * this.yntrelVandak(0).lenght)];

        if (nortex) {
            matrix[this.y][this.x] = 0;
            this.x = nortex[0];
            this.y = nortex[1];
            matrix[nortex[1]][nortex[0]] = 2;
            this.energy -= 1;
        }
    }
    utel() {
        //var nortex = Math.random(this.yntrelVandak(1));
        var nortex = this.yntrelVandak(1)[Math.floor(Math.random() * this.yntrelVandak(1).lenght)];


        if (nortex) {
            matrix[this.y][this.x] = 0;
            this.x = nortex[0];
            this.y = nortex[1];
            matrix[nortex[1]][nortex[0]] = 2;
            for (var i in grassArr) {
                if (nortex[0] == grassArr[i].x && nortex[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    this.energy += 2;
                    break;
                }

            }
        }
    }

    bazmanal() {
        if (this.ser == "arakan") {
            // var norVandak = random(this.yntrelVandak(2.5));
            var norVandak = this.yntrelVandak(2.5)[Math.floor(Math.random() * this.yntrelVandak(2.5).lenght)];


            if (this.energy >= 15 && norVandak) {
               // var Vandak = random(this.yntrelVandak(0));
                var Vandak = this.yntrelVandak(0)[Math.floor(Math.random() * this.yntrelVandak(0).lenght)];

                var norxotutox = new Xotaker(Vandak[0], Vandak[1]);
                xotakerArr.push(norxotutox);
                matrix[Vandak[1]][Vandak[0]] = 0;

                this.energy = 6;

            }
        };
        if (this.ser == "igakan") {
           // var norVandak = random(this.yntrelVandak(2));
            var norVandak = this.yntrelVandak(2)[Math.floor(Math.random()* this.yntrelVandak(2).lenght)];


            if (this.energy >= 15 && norVandak) {
                var Vandak = random(this.yntrelVandak(0));
                var norxotutox = new Xotaker(Vandak[0], Vandak[1]);
                xotakerArr.push(norxotutox);
                matrix[Vandak[1]][Vandak[0]] = 0;

                this.energy = 6;
            }



        }

    }
    mernel() {
        for (var i in xotakerArr)
            if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y && this.energy < 1) {
                xotakerArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;

            }

    }

}
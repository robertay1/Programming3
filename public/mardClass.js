var LivingCreature = require("./class.js")
module.exports = class Mard extends LivingCreature {
    constructor(x, y, ser) {
        super(x, y, ser);
        this.energy = 8;
        this.ser = (ser == 0 ? "arakan" : "igakan");
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],

        ];
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
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }

    sharjvel() {

        this.stanalNorKordinatner();
        var nortex = random(this.yntrelVandak(0));
       

        if (nortex) {
            matrix[this.y][this.x] = 0;
            this.x = nortex[0];
            this.y = nortex[1];
            matrix[this.y][this.x] = 4;
            matrix[nortex[1]][nortex[0]] = 4;
            this.energy -= 1;
        }
    }
    xpel() {
        this.stanalNorKordinatner();

        
        var nortex2 = random(this.yntrelVandak(3));

     
        
        if (nortex2) {
            matrix[this.y][this.x] = 0;
            this.x = nortex2[0];
            this.y = nortex2[1];
            matrix[this.y][this.x] = 4;
            for (var i in Gaylarr) {
                if (this.x == Gaylarr[i].x && this.y == Gaylarr[i].y) {
                    Gaylarr.splice(i, 1);
                    this.energy += 1;

                }

            }
        }
    }

    bazmanal() {
        if (this.ser == "arakan"){
        var norVandak = random(this.yntrelVandak(4.5));

        if (this.energy >= 10 && norVandak) {
            var Vandak = random(this.yntrelVandak(0));
            var NorMard = new Mard(Vandak[0], Vandak[1]);
            MardArr.push(NorMard);
            matrix[Vandak[1]][Vandak[0]] = 0;
            this.energy -= 4;
        }

    }
     if (this.ser == "igakan"){
        var norVandak = random(this.yntrelVandak(4));

        if (this.energy >= 10 && norVandak) {
            var Vandak = random(this.yntrelVandak(0));
            var NorMard = new Mard(Vandak[0], Vandak[1]);
            MardArr.push(NorMard);
            matrix[Vandak[1]][Vandak[0]] = 0;
            this.energy -= 4;
        }

    }

}
    mernel() {
        for (var i in MardArr)
            if (this.x == MardArr[i].x && this.y == MardArr[i].y && this.energy < 0) {
                MardArr.splice(i, 1);
                matrix[this.y][this.x] = 0;

            }

    }

}
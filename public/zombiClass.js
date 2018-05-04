var LivingCreature = require("./class.js")
module.exports = class zombi extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 50;

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
            matrix[this.y][this.x] = 5;
            matrix[nortex[1]][nortex[0]] = 5;
            this.energy -= 1;
        }
    }
    utel() {
        this.stanalNorKordinatner();

        var nortex = random(this.yntrelVandak(4));

        if (nortex) {
            matrix[this.y][this.x] = 0;
            this.x = nortex[0];
            this.y = nortex[1];
            matrix[this.y][this.x] = 5;
            for (var i in MardArr) {
                if (this.x == MardArr[i].x && this.y == MardArr[i].y) {
                    MardArr.splice(i, 1);
                    this.energy += 1;
                    break;
                }

            }
        }
    }
}
// Zombiner@ chen mernum ev chen shatanum:) 

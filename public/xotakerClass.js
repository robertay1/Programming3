class Xotaker extends LivingCreature {

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

        this.stanalNorKordinatner();
        var nortex = random(this.yntrelVandak(0));

        if (nortex) {
            matrix[this.y][this.x] = 0;
            this.x = nortex[0];
            this.y = nortex[1];
            matrix[this.y][this.x] = 2;
            matrix[nortex[1]][nortex[0]] = 2;
            this.energy -= 1;
        }
    }
    utel() {
        this.stanalNorKordinatner();

        var nortex = random(this.yntrelVandak(1));

        if (nortex) {
            matrix[this.y][this.x] = 0;
            this.x = nortex[0];
            this.y = nortex[1];
            matrix[this.y][this.x] = 2;
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    this.energy += 1;
                    break;
                }

            }
        }
    }

    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));

        if (this.energy >= 5 && norVandak) {
            var norxotutox = new Xotaker(norVandak[0], norVandak[1]);
            xotakerArr.push(norxotutox);
            matrix[norVandak[1]][norVandak[0]] = 0;
            this.energy -= 3;
        }

    }
    mernel() {
        for (var i in xotakerArr)
            if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y && this.energy < 1) {
                xotakerArr.splice(i, 1);
                matrix[this.y][this.x] = 0;

            }

    }

}
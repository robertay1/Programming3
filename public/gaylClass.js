class Gayl extends LivingCreature {

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
            matrix[this.y][this.x] = 3;
            matrix[nortex[1]][nortex[0]] = 3;
            this.energy -= 1;
        }
    }
    utel() {
        this.stanalNorKordinatner();

        var nortex = random(this.yntrelVandak(2));

        if (nortex) {
            matrix[this.y][this.x] = 0;
            this.x = nortex[0];
            this.y = nortex[1];
            matrix[this.y][this.x] = 3;
            for (var i in xotakerArr) {
                if (nortex[0] == xotakerArr[i].x && nortex[1] == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    this.energy += 2;
                    break;
                }

            }
        }
    }

    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));

        if (this.energy >= 6 && norVandak) {
            var norgayl = new Gayl(norVandak[0], norVandak[1]);
            Gaylarr.push(norgayl);
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.energy -= 3;
        }

    }
    mernel() {
        for (var i in Gaylarr)
            if (this.x == Gaylarr[i].x && this.y == Gaylarr[i].y && this.energy < 0) {
                Gaylarr.splice(i, 1);
                matrix[this.y][this.x] = 0;

            }

    }

}
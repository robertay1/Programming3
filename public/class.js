class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = Math.round(Math.random() * 7);
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {

        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));

        if (this.multiply >= 6 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }

}
//--------------------------------------------------------------
class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 6;
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

        var fond = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    fond.push(this.directions[i]);
                }
            }
        }
        return fond;
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
            if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y && this.energy < 0) {
                xotakerArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
            }

    }

}

//-----------------------------------------------------------------------------------

class Gayl {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 6;
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

        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    this.energy += 2;
                }

            }
        }
    }

    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));

        if (this.energy >= 8 && norVandak) {
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


//-----------------------------------------------------------------------------------

class Mard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
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

        var found = [];
        console.log(this.directions);
        for (var i in this.directions) {
            console.log(this.directions[i])
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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

        var nortex = random(this.yntrelVandak(2));
        var nortex2 = random(this.yntrelVandak(3));

        if (nortex) {
            matrix[this.y][this.x] = 0;
            this.x = nortex[0];
            this.y = nortex[1];
            matrix[this.y][this.x] = 4;
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    this.energy += 1;
                }

            }
        }
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
        var norVandak = random(this.yntrelVandak(0));

        if (this.energy >= 10 && norVandak) {
            var NorMard = new Mard(norVandak[0], norVandak[1]);
            MardArr.push(NorMard);
            matrix[norVandak[1]][norVandak[0]] = 0;
            this.energy -= 4;
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

//-----------------------------------------------------------------------------------------------

class zombi {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 50;
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

        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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
                }

            }
        }
    }
}
// Zombiner@ chen mernum ev chen shatanum:) 














































































// class zombi {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
        
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//             [this.x - 2, this.y + 2],
//             [this.x - 1, this.y + 2],
//             [this.x, this.y + 2],
//             [this.x + 1, this.y + 2],
//             [this.x + 2, this.y + 2],
//             [this.x - 2, this.y + 1],
//             [this.x - 2, this.y],
//             [this.x + 2, this.y + 1],
//             [this.x + 2, this.y],
//             [this.x - 2, this.y - 1],
//             [this.x - 2, this.y + 1],
//             [this.x - 2, this.y - 2],
//             [this.x - 1, this.y - 2],
//             [this.x, this.y - 2],
//             [this.x + 1, this.y - 2],
//             [this.x + 2, this.y - 2],

//         ];
//     }
//     stanalNorKordinatner() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1],
//             [this.x - 2, this.y + 2],
//             [this.x - 1, this.y + 2],
//             [this.x, this.y + 2],
//             [this.x + 1, this.y + 2],
//             [this.x + 2, this.y + 2],
//             [this.x - 2, this.y + 1],
//             [this.x - 2, this.y],
//             [this.x + 2, this.y + 1],
//             [this.x + 2, this.y],
//             [this.x - 2, this.y - 1],
//             [this.x - 2, this.y + 1],
//             [this.x - 2, this.y - 2],
//             [this.x - 1, this.y - 2],
//             [this.x, this.y - 2],
//             [this.x + 1, this.y - 2],
//             [this.x + 2, this.y - 2],
//         ];
//     }
//    yntrelVandak(ch) {
//         this.stanalNorKordinatner();

//         var found = [];
//         console.log(this.directions);
//         for (var i in this.directions) {
            
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

//                 if (matrix[y][x] == ch) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }
//     sharjvel() {

//         this.stanalNorKordinatner();
//         var nortex = random(this.yntrelVandak( Math.round(Math.random()*4)));

//         if (nortex) {
//             matrix[this.y][this.x] = 0;
//             this.x = nortex[0];
//             this.y = nortex[1];
//             matrix[this.y][this.x] = 5;
//             matrix[nortex[1]][nortex[0]] = 5;
//         }
//     }
//     utel(){
//         this.stanalNorKordinatner();

//         var nortex = random(this.yntrelVandak(1));
//         var nortex1 = random(this.yntrelVandak(2));
//         var nortex2 = random(this.yntrelVandak(3));
//         var nortex4 = random(this.yntrelVandak(4));
        

//           if (nortex) {
//             matrix[this.y][this.x] = 0;
//             this.x = nortex[0];
//             this.y = nortex[1];
//             matrix[this.y][this.x] = 5;
//             for (var i in grassArr) {
//                 if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
//                     grassArr.splice(i, 1);
                    
//                 }

//             }
//           }
//         if (nortex1) {
//             matrix[this.y][this.x] = 0;
//             this.x = nortex1[0];
//             this.y = nortex1[1];
//             matrix[this.y][this.x] = 5;
//             for (var i in xotakerArr) {
//                 if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
//                     xotakerArr.splice(i, 1);
                    
//                 }

//             }
//         }
//         if (nortex2) {
//             matrix[this.y][this.x] = 0;
//             this.x = nortex2[0];
//             this.y = nortex2[1];
//             matrix[this.y][this.x] = 5;
//             for (var i in Gaylarr) {
//                 if (this.x == Gaylarr[i].x && this.y == Gaylarr[i].y) {
//                     Gaylarr.splice(i, 1);
                    
//                 }

//             }
//         }
//         if (nortex4) {
//             matrix[this.y][this.x] = 0;
//             this.x = nortex4[0];
//             this.y = nortex4[1];
//             matrix[this.y][this.x] = 5;
//             for (var i in MardArr) {
//                 if (this.x == MardArr[i].x && this.y == MardArr[i].y) {
//                     MardArr.splice(i, 1);
                    
//                 }

//             }
//         }
//     }
//     bazmanal() {
//         var norVandak = random(this.yntrelVandak(0));

//         if (this.energy >= 10 && norVandak) {
//             var NorMard = new Mard(norVandak[0], norVandak[1]);
//             MardArr.push(NorMard);
//             matrix[norVandak[1]][norVandak[0]] = 0;
//             this.energy -= 4;
//         }

//     }
//     mernel() {
//         for (var i in MardArr)
//             if (this.x == MardArr[i].x && this.y == MardArr[i].y && this.energy < 0) {
//                 MardArr.splice(i, 1);
//                 matrix[this.y][this.x] = 0;
//             }

//     }
// }

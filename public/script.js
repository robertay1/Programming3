var n = 35;
var m = 35;

var matrix = [];





// function setup(){

// for (var i = 0; i < n; i++) {
//     matrix[i]=[];

//     for(var j =0;j< m;j++){
//         matrix[i][j] = Math.round(Math.random());
//     }
// }



// }
// console.log(matrix);
//-------------------------------------------------------


// var side = 70;

// var matrix = [
//     [1, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1],

// ]


// function setup() {
//     createCanvas(800, 800);
//     background('#acacac');
// };
// function draw() {
//     for (var y = 0; y < 10; y++) {
//         for (var x = 0; x < 10; x++) {
//             if (x == 0 || y == 0 ) {
//                strokeWeight(4);

//             }
//             else
//             {
//                 strokeWeight(1)
//             }
//               fill("white");

//                 rect(x * side, y * side, side, side);
//                 textSize(32);
//                 fill("black");
//                 text(x, y, x,[y],[x]);



//         }

//     }
// }
//----------------------------------------

// var matrix = [
//     [0, 0, 1, 0, 0],
//     [1, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0],
//     [0, 0, 1, 0, 0],
//     [1, 1, 0, 0, 0],
//     [1, 1, 2, 0, 0],
//     [1, 1, 0, 0, 0]
// ];

var side = 20;
var grassArr = [];
var xotakerArr = [];
var Gaylarr = [];
var MardArr = [];
var zombarr = [];

function setup() {
    for (var i = 0; i < n; i++) {
        matrix[i] = [];

        for (var j = 0; j < m; j++) {
            matrix[i][j] = Math.round(Math.random() * 4.505);
        }
    }
    console.log(matrix);

    frameRate(2);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x, y));
            }
            else if (matrix[y][x] == 3) {
                Gaylarr.push(new Gayl(x, y));
            }
            else if (matrix[y][x] == 4) {
                MardArr.push(new Mard(x, y));
            }
            else if (matrix[y][x] == 5) {
                zombarr.push(new zombi(x, y));
            }

        }
    }

}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();

    }
    for (var i in xotakerArr) {
        xotakerArr[i].sharjvel();
        xotakerArr[i].utel();
        xotakerArr[i].bazmanal();
        xotakerArr[i].mernel();

    }
    for (var i in Gaylarr) {
        Gaylarr[i].sharjvel();
        Gaylarr[i].utel();
        Gaylarr[i].bazmanal();
        Gaylarr[i].mernel();

    }
    for (var i in MardArr) {
        MardArr[i].sharjvel();
        MardArr[i].xpel();
        MardArr[i].bazmanal();
        MardArr[i].mernel();
    }
    for (var i in zombarr) {
        zombarr[i].sharjvel();
        zombarr[i].utel();
    }

}

console.log(matrix);

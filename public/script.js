var socket = io.connect('http://localhost:3000/');
socket.on('setup', function (data) {
    size = data.size;
    side = data.side;
})
matrix = []
var size1 = 40;
var side1 = 5;
function setup(){
    createCanvas(size1 * side1, size1 * side1);
}
function draw(){
    if (matrix.length>0)
    {
        background("#acacac")
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
    }
}
socket.on('draw', function (data) {
    matrix = data;
    console.log(data)
})



// var grassArr = [];
// var xotakerArr = [];
// var Gaylarr = [];
// var MardArr = [];
// var zombarr = [];











// console.log(matrix);











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
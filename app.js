var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var zombi = require("./public/zombiClass.js");
var Grass = require("./public/xotClass.js");
var Xotaker = require("./public/xotakerClass.js");
var Mard = require("./public/mardClass.js");
var Gayl = require("./public/gaylClass.js");
var LivingCreature = require("./public/class.js");
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});

var n = 40;
var m = 40;
var side = 15;



global.grassArr = [];
global.MardArr = [];
global.zombarr = [];
global.Gaylarr = [];
global.xotakerArr = [];
global.matrix = []; 
//console.log(matrix);


    for (var i = 0; i < n; i++) {
        matrix[i] = [];

        for (var j = 0; j < m; j++) {
            matrix[i][j] = Math.round(Math.random() * 4.505);
        }
    }
    // frameRate(2000);
    // createCanvas(matrix[0].length * side, matrix.length * side);
    // background('#acacac');


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                global.grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                var r = (Math.round(Math.random())) / 2;
                global.xotakerArr.push(new Xotaker(x, y, r));
                matrix[y][x] += r;
            }
            else if (matrix[y][x] == 3) {
                var r = (Math.round(Math.random())) / 2;
                global.Gaylarr.push(new Gayl(x, y));
                matrix[y][x] += r;
            }
            else if (matrix[y][x] == 4) {
                var r = (Math.round(Math.random())) / 2;
                global.MardArr.push(new Mard(x, y));
                matrix[y][x] += r;
            }
            else if (matrix[y][x] == 5) {
                global.zombarr.push(new zombi(x, y));
            }

        }
    }

io.on('connection', function (socket) {
    socket.emit('setup', { size: matrix.length, side: side })
    // for (var i in matrix) {
    socket.emit('draw', matrix);
    //}
    // socket.emit('draw', function (data) {
    //     matrix.push(data);
    //     io.sockets.emit('display matrix', data);
    // })
});



setInterval(function draw() {

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


},1000);

//setInterval(function(){console.log(matrix)},1000)
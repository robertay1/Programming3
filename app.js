var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var fs = require('fs');
var Grass = require("./public/class.grass.js");
var Xotaker = require("./public/class.xotaker.js");
var Gishatich = require("./public/class.gishatich.js");
var Mard = require("./public/class.mard.js");
var Mardaker = require("./public/class.mardaker.js");

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});

global.grassArr = [];
global.xotakerArr = [];
global.gishatichArr = [];
global.mardArr = [];
global.mardakerArr = [];
global.n = 35;
global.m = 35;
global.side = 15;
global.matrix = [];

global.exanak = "Գարուն";
io.emit("send weather", exanak);

global.cnvacXoteriQanak = 0;
global.xotakerArakan = 0;
global.xotakerIgakan = 0;

function genMatrix(n, m) {
    var matrix = [];
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {
            var r = Math.random() * 100;
            if (r < 20) r = 0;
            else if (r < 55) r = 1;
            else if (r < 85) r = 2;
            else if (r < 95) r = 3;
            else if (r < 99) r = 4;
            else if (r < 100) r = 5;
            matrix[y][x] = r;
        }
    }
    return matrix;
}

matrix = genMatrix(n, m);

for (var y in matrix) {
    for (var x in matrix[y]) {
        if (matrix[y][x] == 1) {
            grassArr.push(new Grass(x * 1, y * 1, 1));
            cnvacXoteriQanak++;
        }
        else if (matrix[y][x] == 2) {
            var ser = (Math.round(Math.random())) / 2;
            xotakerArr.push(new Xotaker(x * 1, y * 1, 2 + ser, ser));
            matrix[y][x] += ser;
            if (ser == 0) xotakerArakan++;
            else xotakerIgakan++;
        }
        else if (matrix[y][x] == 3) {
            var ser = (Math.round(Math.random())) / 2;
            gishatichArr.push(new Gishatich(x * 1, y * 1, 3 + ser, ser));
            matrix[y][x] += ser;
        }
        else if (matrix[y][x] == 4) {
            var ser = (Math.round(Math.random())) / 2;
            mardArr.push(new Mard(x * 1, y * 1, 4 + ser, ser));
            matrix[y][x] += ser;
        }
        else if (matrix[y][x] == 5) {
            var ser = (Math.round(Math.random())) / 2;
            mardakerArr.push(new Mardaker(x * 1, y * 1, 5 + ser, ser));
            matrix[y][x] += ser;
        }
    }
}

io.on("connection", function (socket) {

    setInterval(function () {

        for (var i in grassArr) {
            if (exanak == "Գարուն" || exanak == "Ամառ") {
                grassArr[i].multiply = 2*grassArr[i].multiply;
            }
            grassArr[i].mul();
        }

        for (var i in xotakerArr) {
            if (exanak == "Գարուն" || exanak == "Ամառ") {
                xotakerArr[i].energy = 32;
            }
            else if (exanak == "Աշուն" || exanak == "Ձմեռ") {
                xotakerArr[i].speed = 4;
            }
            xotakerArr[i].bazmanal();
            xotakerArr[i].utel();
            xotakerArr[i].mahanal();
        }


        for (var i in gishatichArr) {
            if (exanak == "Աշուն" || exanak == "Ձմեռ") {
                gishatichArr[i].speed = 4;
            }
            gishatichArr[i].bazmanal();
            gishatichArr[i].utel();
            gishatichArr[i].mahanal();
        }


        for (var i in mardArr) {
            if (exanak == "Աշուն" || exanak == "Ձմեռ") {
                mardArr[i].speed = 16;
                mardArr[i].utelXotaker();
            }
            else if (exanak == "Գարուն" || exanak == "Ամառ") {
                mardArr[i].utelXot();
            }
            mardArr[i].bazmanal();
            mardArr[i].mahanal();
        }

        for (var i in mardakerArr) {
            if (exanak == "Աշուն" || exanak == "") {
                mardakerArr[i].mahanal();
            }
            else {
                mardakerArr[i].bazmanal();
                mardakerArr[i].utelGishatich();
                mardakerArr[i].utelMard();
                mardakerArr[i].mahanal();
            }
        }
        io.sockets.emit("send grassArr", grassArr);
        io.sockets.emit("send xotakerArr", xotakerArr);
        io.sockets.emit("send gishatichArr", gishatichArr);
        io.sockets.emit("send mardArr", mardArr);
        io.sockets.emit("send mardakerArr", mardakerArr);
        io.sockets.emit("send matrix", matrix);

    }, 1000);
});


io.on("new matrix", function (data) {
    matrix = data;
});
io.on("new grassArr", function (data) {
    grassArr = data;
});
io.on("new xotakerArr", function (data) {
    xotakerArr = data;
});
io.on("new gishatichArr", function (data) {
    gishatichArr = data;
});
io.on("new mardArr", function (data) {
    mardArr = data;
});
io.on("new mardakerArr", function (data) {
    mardakerArr = data;
})


var exanak = "Գարուն";
function poxelExanak() {
    if (exanak == "Գարուն") {
        exanak = "Ամառ";
    }
    else if (exanak == "Ամառ") {
        exanak = "Աշուն";
    }
    else if (exanak == "Աշուն") {
        exanak = "Ձմեռ";
    }
    else if (exanak == "Ձմեռ") {
        exanak = "Գարուն";
    }
    io.emit("send weather", exanak);

}
setInterval(poxelExanak, 5000);

var statistics = {
    "Grass_Born": cnvacXoteriQanak,
    "Xotaker_Arakan": xotakerArakan,
    "Xotaker_Igakan": xotakerIgakan,
    "Gishatich_Qanak": gishatichArr.length,
    "Mard_Qanak": mardArr.length,
    "Mardaker_Qanak": mardakerArr.length
}

setInterval(function () {
    statistics["Grass_Born"] = cnvacXoteriQanak;
    statistics["Xotaker_Arakan"] = xotakerArakan;
    statistics["Xotaker_Igakan"] = xotakerIgakan;
    statistics["Gishatich_Qanak"] = gishatichArr.length;
    statistics["Mard_Qanak"] = mardArr.length;
    statistics["Mardaker_Qanak"] = mardakerArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function (err) {
        if (err) throw err;
    })
}, 10000);






var button = [];
var ctx = [];
var bDisabled = [];
var isResult = false;
var content = [];

for (var i = 1; i < 10; i++)
    button[i] = document.getElementById('canvas' + i);

for (var i = 1; i < 10; i++)
    ctx[i] = button[i].getContext('2d');

for (var i = 1; i < 10; i++)
    bDisabled[i] = false;

function loop(x) {
    if (!bDisabled[x]) {
        bDisabled = true;
    }
}


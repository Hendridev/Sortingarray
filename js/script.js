const inputUser = document.querySelector('.input');
const btn = document.querySelector('.sort');
const output = document.querySelector('#output');
const method = document.querySelector('#method');
let arr = [];
let newarr = [];



document.querySelector('.num').addEventListener('click', () => {
    function number(el) {
        let num = '';
        for (let i = 1; i <= 2; i++) {
            num += Math.floor(Math.random() * el);
        }
        return num;
    }
    inputUser.value = [number(10), number(16), number(6), number(14), number(8)];
});

document.querySelector('.nam').onclick = () => {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    function random() {
        var text = '';
        for (var i = 0; i < Math.floor(Math.random() * 10 + 1); i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        };
        return text;
    }
    inputUser.value = [random(), random(), random(), random(), random()];
}

document.querySelector('.reset').addEventListener('click', () => {
    arr = [];
    output.value = '';
    inputUser.value = '';
});


function pushValue() {
    let ambilData = inputUser.value;
    const data = ambilData.split(',');
    arr.push(data);
};


function conc() {
    let newarry = arr.reduce((awal, akhir) => {
        return awal.concat(akhir);
    });
    arr.length == 0 ? newarr.push(arr) : newarr.push(newarry);
};

function sortTime() {
    newarr.forEach((el) => {
        el.sort((a, b) => {
            return a - b;
        });
    });
};

function localcomp() {
    newarr.forEach((el) => {
        el.sort((a, b) => {
            return a.localeCompare(b);
        });
    });
};

btn.addEventListener('click', () => {
    pushValue();
    conc();
    if (method.value == "number") {
        sortTime();
    } else {
        localcomp();
    }
    const hasil = newarr[newarr.length - 1].toString();
    output.value = hasil;
    // software and website optimize
    newarr.length > 0 ? newarr.splice(0, 1) : '';
});
var inputVal;
var total = 0;
function funcInput(arg) {
    inputVal = parseInt(arg.value);
}
function cal(func, num) {
    return func(num);
}

function increase(num) {
    total = num + 1;
}

function decrease(num) {
    total =  num - 1;
}

window.onload = function() {
    var input = document.querySelector('#input');
    var btnIncrease = document.querySelector('#btn-increase');
    var btnDecrease = document.querySelector('#btn-decrease');

    btnIncrease.onclick = function() {
        if(input.value.length === 0) {
            checkError();
        } else {
            cal(increase, inputVal);
            input.value = total;
            inputVal = total;
        }
    };

    btnDecrease.onclick = function() {
        if(input.value.length === 0) {
            checkError();
        } else {
            cal(decrease, inputVal);
            input.value = total;
            inputVal = total;
        }
    };

    function checkError() {
        alert('숫자를 입력하세요.');
        input.focus();
    }
};


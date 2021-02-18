function numbering() {
    for(var i=0; i < 10; i++) {
        document.write(i + '<br>');
    }
}

for(var i=0; i < 2; i++) {
    numbering();
}


function getMemberA() {
    return 'Admin';
}
function getMemberB() {
    return 'Tester';
}

console.log(getMemberA());
console.log(getMemberB());

function getArg(arg) {
    return arg * 1000;
}

console.log(getArg(1));
console.log(getArg(2));

function getArg2(arg1, arg2) {
    return arg1 + arg2;
}

console.log(getArg2(10,20));
console.log(getArg2(20,40));

test = function() {
    for(var i=0; i < 10; i++) {
        document.write(i + 'Test<br>');
    }
}

test();

(function(){
    console.log('익명 함수');
})();
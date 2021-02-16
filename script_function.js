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
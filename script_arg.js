function sum() {
    var _sum = 0;
    for(var i=0; i < arguments.length; i++) {
        console.log(i + ' : ' + arguments[i]);
        _sum += arguments[i];
    }
    return _sum;
}

console.log('Result : ' + sum(1,2,3,4,5));
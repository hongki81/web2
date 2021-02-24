var object1 = {
    val1 : 10,
    val2 : 20,
    val3 : 30
};

var object2 = {
    v1 : 15,
    v2 : 25,
    v3 : 95,
    v4 : 85,
    v5 : 55
};

function sum() {
    var _sum = 0;
    for(var key in this) {
        _sum += this[key];
    }
    return _sum;
}

console.log(sum.apply(object1));
console.log(sum.apply(object2));
object1 = {
    val1 : 10,
    val2 : 20,
    val3 : 30
};

object2 = {
    v1 : 15,
    v2 : 25,
    v3 : 95,
    v4 : 85,
    v5 : 55
};

function sum() {
    var _sum = 0;
    for(name in this) {
        _sum += this[name];
    }
    return _sum;
}

console.log(sum.apply(object1));
console.log(sum.apply(object2));
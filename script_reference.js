var a = {
    'id' : 1
};
var b = a;
b.id = 3;

console.log(a.id);


var c = 1;
function ref(item) {
    item = 2;
}
ref(c);
console.log(c);
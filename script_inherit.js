function person(name) {
    this.name = name;
}

person.prototype.name = null;
person.prototype.introduce = function() {
    return 'My name is ' + this.name;
};

var p1 = new person('Admin');
console.log(p1.introduce());

function manager(name) {
    this.name = name;
}
manager.prototype = new person();
manager.prototype.coding = function() {
    return 'Hello World!'
};

var p2 = new manager('Master');
console.log(p2.introduce());
console.log(p2.coding());

// Prototype
function Ultra() {
    this.name = 'smith';
}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();
Super.prototype.ultraProp = false;

function Sub() {}
Sub.prototype = new Super();

var o = new Sub();
console.log(o.ultraProp);
console.log(o.name);

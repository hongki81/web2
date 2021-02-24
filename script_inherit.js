function person(name) {
    this.name = name;
}

person.prototype.name = null;
person.prototype.introduce = function() {
    return 'My name is ' + this.name;
}

var p1 = new person('Admin');
console.log(p1.introduce());

function manager(name) {
    this.name = name;
}
manager.prototype = new person();

var p2 = new manager('Master');
console.log(p2.introduce());
var person = {};
person.myName = 'admin';
person.mySelfIntroduce = function() {
  return 'My name is ' + this.myName;
};
console.log(person.mySelfIntroduce());

var objPerson1 = {
    'name' : 'master',
    'introduce' : function() {
        return 'My name is ' + this.name;
    }
};
console.log(objPerson1.introduce());

function personA(name) {
    this.name = name;
    this.introduce = function() {
        return 'My name is ' + this.name;
    }
}
var p1 = new personA('tester');
var p2 = new personA('web');

console.log(p1);
console.log(p1.introduce());

console.log(p2);
console.log(p2.introduce());

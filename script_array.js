var member = ['Admin', 'Tester', 'User'];
var tester = ['Web1', 'Web2', 'Web3', 'Web4'];
var arrayA = ['a', 'b', 'c'];

console.log(member);
console.log('Array Total : ' + member.length);

for(var i=0; i < member.length; i++) {
    document.write((i+1) + ' - Member Name : ' + member[i] + '<br>');
}

function getMember() {
    return member;
}

members = getMember();

for(var i=0; i < members.length; i++) {
    document.write(members[i].toUpperCase() + '<br>');
}

for(var i=0; i < tester.length; i++) {
    member.push(tester[i]);
}

console.log(members);
document.write(members);

member = member.concat(['Web5', 'Tester2']);

member.unshift('Master');

console.log(member);

arrayA.splice(1,0,'d');

console.log(arrayA);

arrayA.splice(2,1,'x','y');

console.log(arrayA);

member.shift();
member.pop();

console.log(member);

arrayA.sort();

console.log(arrayA);

arrayA.reverse();

console.log(arrayA);

/*
var arr1 = new Array('Jane', 'Smith', 'John', 'Roy', 'Tom' ,'Brown');
function getRandomArray(arr) {
    var index = Math.floor(Math.random() * arr.length);

    console.log(index);
    return arr[index];
}

console.log(getRandomArray(arr1));
*/

var arr1 = ['Jane', 'Smith', 'John', 'Roy', 'Tom' ,'Brown'];
var arr2 = ['red', 'blue', 'yellow', 'green'];
var arr3 = ['bread', 'water', 'banana', 'apple', 'grape', 'sugar', 'cookie'];

Array.prototype.random = function() {
    var index = Math.floor(Math.random() * this.length);

    //console.log(index + 1);

    return this[index];
};
var user = new Array();
var color = new Array();
var food = new Array();
user = arr1;
color = arr2;
food = arr3;

console.log(user.random() + ' / ' + color.random() + ' / ' + food.random());
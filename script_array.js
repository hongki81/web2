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
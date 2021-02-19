function cal2(mode) {
    var a = {
        'plus' : function(left,right){
            return left + right
        },
        'minus' : function(left,right){
            return left - right
        }
    };

    return a[mode];
}

console.log(cal2(['plus'])(2,2));
console.log(cal2(['minus'])(4,2));

var process = [
    function(input){return input + 10},
    function(input){return input * input},
    function(input){return input / 2}
];

var input = 6;

for(var i=0; i < process.length; i++) {
    input = process[i](input);
}

console.log(input);

var numbers = [30,20,10,1,2,3,4,5,6,7,8,9];
function sortNumber(a,b) {
    return a-b;
}
numbers.sort(sortNumber);

console.log(numbers);
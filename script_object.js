var score = {
    'John' : 100,
    'Smith' : 60,
    'Jane' : 45,
    'Tom' : 77
};

//console.log(score);
//console.log(score['Tom']);

var total = 0;
for(var key in score) {
    console.log(key + ' : ' + score[key]);
    total += score[key];
}

console.log('총원 : ' + Object.keys(score).length);
console.log('총점 : ' + total);
console.log('평균 : ' + total / Object.keys(score).length);

var grades = {
    'list' : {
        'John' : 100,
        'Smith' : 60,
        'Jane' : 45,
        'Tom' : 77
    },
    'func' : function() {
        console.log(this.list);

        for(var item in this.list) {
            console.log(item, this.list[item]);
        }
    }
};

console.log(grades['list']);
grades.func();

Object.prototype.contain = function(item) {
    for(var key in this) {
        if(this[key] === item) {
            return true;
        }
    }
    return false;
}

var a = {'name' : 'Smith', 'city' : 'Seoul'};
console.log(a.contain('James'));

var b = ['Smith', 'Jane', 'Tom'];
console.log(b.contain('Tom'));

function hasOwnProp(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}

hasOwnProp(a);
hasOwnProp(b);



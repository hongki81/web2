console.log(typeof "1");
console.log(typeof 1);
console.log('text');
console.log('text\'s');
console.log('Hello!\nWorld');
console.log('Hello! World'.length);
var t = 'Hello! World'.replace(' ','');
console.log(t.length);
console.log(t.indexOf('o'));
console.log(1 == 1);
console.log(1 == 2);
console.log('one' == 'ONE');
console.log('one' == 'one');


var items = [];
var itemSort = [];
var highIndex;
var lowIndex;

function randomNumber() {
    for(var i=0; i < 10; i++) {
        items[i] = Math.floor(Math.random() * 100) + 1;
        itemSort[i] = items[i];
    }

    itemSort.sort(sortItem);

    //console.log(items);
    //console.log(itemSort);

    for(var i=0; i < items.length; i++) {
        if(items[i] === itemSort[0]) {
            lowIndex = i;
        } else if(items[i] === itemSort[itemSort.length - 1]) {
            highIndex = i;
        }
    }
}

function sortItem(a,b) {
    if(a === b) {
        return randomNumber();
    } else {
        return a - b;
    }
}

randomNumber();


console.log(items[lowIndex] + ' / ' + lowIndex);
console.log(items[highIndex] + ' / ' + highIndex);

document.write('랜덤으로 추출된 숫자 : [' + items + ']<br>');
document.write('가장 높은 숫자 : ' + items[highIndex] + ', Index : '+ highIndex +'<br>');
document.write('가장 낮은 숫자 : ' + items[lowIndex] + ', Index : '+ lowIndex +'<br>');

function movie(title) {
    return {
        get_title : function() {
            return title;
        },
        set_title : function(_title) {
            if(typeof _title === 'string') {
                title = _title;
            } else {
                console.log('제목은 문자열이어야 합니다.');
            }
        }
    }
}

var ghost = movie('ghost in the shell');
var matrix = movie('matrix');

console.log(ghost.get_title());
console.log(matrix.get_title());

ghost.set_title(666);
matrix.set_title('메트릭스');

console.log(ghost.get_title());
console.log(matrix.get_title());

var arr = [];
for(var i=0; i < 5; i++) {
    arr[i] = function() {
        console.log(i);
    }
}
for(var index in arr) {
    console.log(arr[index]());
}
(function(){
    var MYAPP = {};
    MYAPP.cal = {
        'left' : null,
        'right' : null
    };
    MYAPP.pos = {
        'left' : null,
        'right' : null
    };

    MYAPP.cal.left = 10;
    MYAPP.cal.right = 20;

    function sum() {
        return MYAPP.cal.left + MYAPP.cal.right;
    }
    console.log(sum());
}());

var j = 5;

function a1() {
    var j = 10;
    a2();
}
function a2() {
    console.log(j);
}

a1();
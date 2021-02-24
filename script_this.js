function func() {
    if(window === this) console.log('window === this');
}
func();

var ob = {
    func : function() {
        if(ob === this) console.log('ob === this');
    }
};
ob.func();

var funcThis = null;

function func2() {
    funcThis = this;
}
var o1 = func2();
if(funcThis === window) console.log('window');

var o2 = new func2();
if(funcThis === o2) console.log('o2');

var a1 = {};
var a2 = {};
function func3() {
    switch(this) {
        case a1:
            console.log('this = a1');
            break;
        case a2:
            console.log('this = a2');
            break;
        case window:
            console.log('this = window');
            break;
    }
}

func3();
func3(a1);
func3(a2);
func3.apply(a1);
func3.apply(a2);
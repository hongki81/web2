if(true){
    console.log('result : true');
}

if(false){
    console.log('result : true');
}

if(false) {
    console.log(1);
} else if(true) {
    console.log(2);
} else if(true) {
    console.log(3);
} else {
    console.log(4);
}

var aa = 1;
if(aa === 1) {
    console.log('success');
} else {
    console.log('wrong');
}

var id = prompt('아이디를 입력하세요.');
var pw = prompt('비밀번호를 입력하세요.');

if(id === 'admin') {
    console.log('아이디가 일치합니다.');

    if(pw === 'admin') {
        console.log(id+'님 '+'인증에 성공하였습니다.');
    } else {
        console.log('비밀번호가 틀렸습니다.');
    }
} else {
    console.log('아이디가 일치하지 않습니다.');
}

if(id == 'admin' && pw === 'admin') {
    console.log(id+'님 '+'인증에 성공하였습니다.');
} else {
    console.log('아이디 또는 비밀번호가 일치하지 않습니다.');
}

if(id == 'admin' || id == 'tester' || id == 'abcd') {
    console.log('인증되었습니다.');
} else {
    console.log('아이디가 일치하지 않습니다.');
}

var b;

if(!b) {
    console.log('값이 할당되어 있지 않음');
}
if(!null) {
    console.log('null');
}
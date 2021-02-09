function change(status) {
    var target = document.querySelector('body');

    if(status == 'night') {
        target.style.backgroundColor = "black";
        target.style.color = "white";
    } else if(status == 'day') {
        target.style.backgroundColor = "white";
        target.style.color = "black";
    } else {
        alert("error");
    }
}

var bodyObject = {
    setLinkColor:function(theme){
        var links = document.querySelectorAll('a');

        var i = 0;
        while(i < links.length) {
            if(theme == 'black') {
                links[i].style.color = "yellow";
            } else {
                links[i].style.color = "blue";
            }
            i++;
        }
    }
};

function setLink(theme){
    var links = document.querySelectorAll('a');

    var i = 0;
    while(i < links.length) {
        if(theme == 'black') {
            links[i].style.color = "yellow";
        } else {
            links[i].style.color = "blue";
        }
        i++;
    }
}

function changeTheme(self){
    var target = document.querySelector('body');

    if(self.value === 'black') {
        target.style.backgroundColor = "black";
        target.style.color = "white";

        bodyObject.setLinkColor(self.value);

        self.value = 'white';
    } else {
        target.style.backgroundColor = "white";
        target.style.color = "black";

        bodyObject.setLinkColor(self.value);

        self.value = 'black';
    }
}
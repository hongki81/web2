function navi(target) {
    fetch(target).then(function(response){
        response.text().then(function(text){
            document.querySelector('article').innerHTML = text;
        })
    });
}
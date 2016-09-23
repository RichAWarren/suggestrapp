function getUserSuggestions () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            if ('http://suggestr.com:8000/api/user-suggestions' !== xhr.responseURL) {
                window.location.href = xhr.responseURL;
            } else {
                console.log(JSON.parse(xhr.response))
            }
        }
    }
    xhr.open('get', '/api/user-suggestions');
    xhr.withCredentials = true;
    xhr.send();
}

getUserSuggestions();

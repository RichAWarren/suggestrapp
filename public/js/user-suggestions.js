function getUserSuggestions () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            console.log('server responded with: ' + xhr.responseText);
        }
    }
    xhr.open('get', '/api/user-suggestions');
    xhr.withCredentials = true;
    xhr.send();
}

getUserSuggestions();

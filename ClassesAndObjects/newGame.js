
function loadJokeUsingXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText;
            response = JSON.parse(response);
            console.log(response.value);
            document.getElementById("joke-line").innerHTML =
                response.value;
        }
    };
    xhttp.open("GET", "https://api.chucknorris.io/jokes/random", true);
    xhttp.send();
}
var apiURL = "https://jsonplaceholder.typicode.com/posts/";
function updatePostUsingXML() {
    postOne;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            document.getElementById("update-message").innerText = "The Post has been Updated";
        }
    };
    xhttp.open("PUT", `${apiURL}${postOne.id}`, true);
    xhttp.send(JSON.stringify(postOne));
};
function deletePostUsingXML() {
    var postID = 1;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            document.getElementById("delete-message").innerText = "The Post has been Deleted";
        }
    };
    xhttp.open("DELETE", `${apiURL}${postID}`, true);
    xhttp.send();
};
function addPostUsingXML() {
    postToAdd 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
            document.getElementById("add-message").innerHTML = "The Post has been Added";
        }
    };
    xhttp.open("POST", apiURL, true);
    xhttp.send(JSON.stringify(postToAdd));
};

/// PART TWO

var apiURL = "https://jsonplaceholder.typicode.com/users/";
function loadAllPostsUsingFetch() {
    fetch(apiURL)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log('Error: ' + error));

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var users = JSON.parse(this.responseText);
            for (var index = 0; index < users.length; index++) {
                var paragraph = document.createElement('p');
                var textContent = document.createTextNode('Username: ' + users[index].username + ' ' + 'Name: ' + users[index].name + ' ' + 'Email adress: ' + users[index].email);
                paragraph.append(textContent);

                if (index % 2 === 0)
                    paragraph.style.backgroundColor = 'cyan';
                document.getElementById('containerID').appendChild(paragraph);
            }
        }
    };
    xhttp.open("GET", apiURL, true);
    xhttp.send();
}
var root = "https://jsonplaceholder.typicode.com/users/"
function addPostUsingFetch() {
    var user = {
        "id": 11,
        "name": "Adam Lewinson",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    };
    fetch(`${root}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(user => console.log(user))
        .catch(error => console.log('Error: ' + error));
};
var root2 = "https://jsonplaceholder.typicode.com/users/1"
function updatePostUsingFetch() {
    var user = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "New Username",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    };
    fetch(`${root2}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(user => console.log(user))
        .catch(error => console.log('Error: ' + error));
}
function deletePostUsingFetch() {
    fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'DELETE',
    })
    console.log('User was deleted')
};
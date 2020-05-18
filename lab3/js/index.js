function checkCookie() {
    let cookie = document.cookie;
    if (cookie !== "") {
        document.location.replace("/Cookie/Task1.html");
    } else {
        // alert("not find cookie");
        console.log("not found cookie");
    }
}

function signIn() {
    let userName = document.getElementById("userName").value;
    setCookie(userName, 31);
}

function setCookie(value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "; expires=" + date.toUTCString();
    document.cookie = "UserName=" + value + expires + "; path=/";
}

function signOut() {
    setCookie('', -1);
    document.location.replace("/Cookie/index.html");
}

function addButton() {
    let btn = document.createElement("input");
    btn.setAttribute("type", "submit");
    btn.setAttribute("onclick", "signOut()");
    btn.setAttribute("value", "Log out");
    document.getElementById("inputForm").appendChild(btn);
}
function validateCreds(){
    var warningPar = document.getElementById("errorPar");
    var mail = document.getElementById("email");
    var password = document.getElementById("pswd");
    if (checkUser(mail.value, password.value) === false) {
        warningPar.innerHTML = "Incorrect username or password!";
        warningPar.style.color = '#FF0000';
        email.value = "";
        password.value = "";
        return false;
    }
    return true;
}

function checkUser(mail, password) {
    return false;
}

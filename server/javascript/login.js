function validateCreds(){
    var warningPar = document.getElementById("errorPar");
    var mail = document.getElementById("email");
    var password = document.getElementById("pswd");
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        var xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(this.responseText == "OK") {
                document.getElementById("loginForm").submit();
            } else {
                warningPar.innerHTML = "Incorrect username or password!";
                warningPar.style.color = '#FF0000';
//                email.value = "";
                email.value = this.responseText;
                password.value = "";
            }
        }
    }
    xmlhttp.open("POST", "xmlResponse/verifyLogin.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("mail=" + mail.value + "&pswd=" + password.value);
}

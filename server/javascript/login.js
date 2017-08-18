/**
 * Set all events
 */
//login button validates credentials
var loginBt = document.getElementById("loginButton");
loginBt.onclick = validateCreds;

//forgot password modifies page for email only (the link is not followed)
var loginBt = document.getElementById("fgtPswdLink");
loginBt.onclick = function(event) {
                      event.preventDefault();
                      displayForgotPassword();
                  }

/**
 * Function to validate user credentials against db
 */
function validateCreds(){
    var mail = document.getElementById("email");
    var password = document.getElementById("pswd");

//value filled check
    if (mail.value.length === 0 || password.value.length === 0) {
        setWarnPar("All fields must be filled", false);
        return;
    }

//email syntax check
    var at = '@';
    if (mail.value.indexOf(at) === -1
        || mail.value.indexOf(at) === 0
        || mail.value.indexOf(at) === (mail.value.length - 1)
      ) {
        setWarnPar("Invalid email syntax", true);
        return;
    }

//credential check - AJAX
    if (window.XMLHttpRequest) {
        //code for IE7+, Firefox, Chrome, Opera, Safari
        var xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //action on response
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(this.responseText == "OK") {
                document.getElementById("loginForm").submit();
            } else if(this.responseText == "NOT OK") {
                setWarnPar("Incorrect username or password!", true);
            } else {
                setWarnPar("Error with database", false);
            }
        }
    }
    xmlhttp.open("POST", "xmlResponse/verifyLogin.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("mail=" + mail.value + "&pswd=" + password.value);
}

function displayForgotPassword() {
    return false;
}

//displays a warning string in the top paragraph
function setWarnPar(warning, reset) {
    var warningPar = document.getElementById("errorPar");
    warningPar.innerHTML = warning;
    warningPar.style.color = '#FF0000';
    if (reset === true) {
        email.value = "";
        password.value = "";
    }
}

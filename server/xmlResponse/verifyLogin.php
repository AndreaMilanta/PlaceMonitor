<?php
    if(   array_key_exists("mail", $_POST) == true
       && array_key_exists("pswd", $_POST) == true
      ) {
        $mail = htmlspecialchars($_POST["mail"]);
        $pswd = htmlspecialchars($_POST["pswd"]);
//TODO Check user credentials on DB
//TODO Default php for common stuff
        if ($mail == "email" && $pswd == "pass") {
            echo "OK";
        } else {
            echo "NOT OK";
        }
    }
    else {
        echo "NOT OK";
    }
?>

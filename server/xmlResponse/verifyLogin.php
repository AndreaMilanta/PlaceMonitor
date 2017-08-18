<?php
//include
    require $_SERVER["DOCUMENT_ROOT"] . '/php/common.php';

    if(   array_key_exists("mail", $_POST) == true
       && array_key_exists("pswd", $_POST) == true
      ) {
        $mail = htmlspecialchars($_POST["mail"]);
        $pswd = htmlspecialchars($_POST["pswd"]);

//TODO Check user credentials on DB
        $conn = dbConnect($db);
        if($conn == NULL){
            echo "dbError";
        }
        $query = "SELECT * FROM user WHERE email = '$mail' AND password = SHA('$pswd')";
        $result = mysqli_query($conn, $query);
        $user = mysqli_fetch_array($result);
        if(empty($user)) {
            echo "NOT OK";
        } else {
            echo "OK";
        }
        mysqli_close($conn);
    } else {
        echo "missing data";
    }
?>

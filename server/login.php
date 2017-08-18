<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
<!--    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta hhttp-equiv="X-UA-Compatible" content="ie=edge">
-->
    <title>PlaceMonitor Login</title>
<!--    <?php
        require $_SERVER["DOCUMENT_ROOT"] . '/php/common.php';
        $conn = dbConnect($db);
     ?>
-->
</head>
<body>
    <h3>Welcome to Place Monitor</h3>
    <p id="errorPar">please insert your credentials</p>
    <form action="home.php" method="post" id="loginForm">
        email: <br>
        <input type="email" name="email" placeholder="example@test.com" id="email"/>  </br>
        password:  <br>
        <input type="password" name="pswd" placeholder="password" id="pswd"/>
        <br>
    </form>
    <button id="loginButton" >login</button>
    <button id="resetButton" hidden >reset password</button>
    <br>
    <a id="fgtPswdLink" href="#">forgot password?</a>

    <!-- INCLUDES! -->
    <script src="javascript/login.js"></script>

</body>
</html>

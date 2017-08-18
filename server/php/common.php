<?php
//TODO Default php for common stuff
    $db = array('host' => 'localhost',
                'user' => 'Reader',
                'pswd' => 'reader',
                'dbname' => 'PlaceMonitor'
            );

    function dbConnect($db){
        $_conn = mysqli_connect($db['host'], $db['user'], $db['pswd'], $db['dbname']);
        if(mysqli_connect_errno())
            return NULL;
        return $_conn;
    }

    $error_reporting = E_ALL | E_STRICT;
?>

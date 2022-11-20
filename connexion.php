<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>connexion</title>
</head>
<body>
<h1>connexion</h1>
<?php
$login = $_POST['login'];
$password = $_POST['password'];


var_dump($password ." ". $login);

    $login_normal = "user";
	$login_admin = "admin";
	$password = "ajax";

    if( isset($_POST['login']) && isset($_POST['password']) ){

        if($_POST['login'] == $login_normal && $_POST['password'] == $password){
            session_start();
            $_SESSION['user'] = $login_normal;
            echo "Success";
        }
else if ($_POST['login'] == $login_admin && $_POST['password'] == $password){
            session_start();
            $_SESSION['user'] = $login_admin;
            echo "Success";
	}
        else{
            echo "Failed";
        }
    }
?>
<!--<script src="js/ajax.js"></script>-->

</body>
</html>

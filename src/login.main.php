<?php
session_start();

include("includes/config.php");
include("includes/LoginUser.class.php");

//Instans av klassen Users
$user = new LoginUser();

//Variabel för meddelanden
$message = "";

//Om logga in-knappen klickas loggas användaren in om uppgifterna stämmer 
if (isset($_POST["loginBtn"])) {
    if (!empty($_POST["username"]) && !empty($_POST["password"])) {
        $username = $_POST["username"];
        $password = $_POST["password"];

        if ($user->loginUser($username, $password)) {
            session_start();
            $_SESSION["cv_username"] = $username;
            header("Location: loggedin.main.php");
        } else {
            $message = "<p class='errorText'>Felaktigt användarnamn eller lösenord</p>";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="sv">
 
 <head>
     <meta charset='utf-8'>
     <meta http-equiv='X-UA-Compatible' content='IE=edge'>
     <title>CV | Selma Kohnic</title>
     <meta name='viewport' content='width=device-width, initial-scale=1'>
     <!-- Ikoner -->
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">

     <!-- Stilmall -->
     <link rel="stylesheet" type="text/css" href="css/style.css">
 </head>

 <body>
     <div id="wrapper">
         <!-- Formulär för inloggning -->
         <form method="post" action="login.main.php" id="formSignIn" name="form">
             <label>
                 Användarnamn: *<br />
                 <input type="text" name="username" class="inputField" />
             </label>
             <p>
                 <label>
                     Lösenord: *<br />
                     <input type="password" name="password" class="inputField" />
                 </label>
             </p>
             <input type="checkbox" name="komihag" value="komihag" id="checkBox"><label for="checkBox" id="checkBoxText">Kom
                 ihåg mig</label><br />
             <div id="message"></div>
             <?= $message; ?>
             <input type="submit" name="loginBtn" value="Logga in" id="loginBtn" />

             <a href="#" title="Glömt lösenordet?" id="forgotPsw">Glömt lösenordet?</a>
         </form>
     </div>

     <footer class="regularFooter">
         <!-- Copyright -->
         <p id="copyright">&copy; Selma Kohnic 2019</p>
     </footer>
 </body>

 </html>

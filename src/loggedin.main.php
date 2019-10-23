<!DOCTYPE html>
<html>
<?php
include("includes/config.php");
include("includes/LoginUser.class.php");

//Instans av klassen LoginUser
$user = new LoginUser();

//Variabler för användarnamn och meddelanden
//$username = $_SESSION["cv_username"];
?>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>CV | Selma Kohnic</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <!-- Ikoner -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css"
        integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>

    <!-- Stilmall -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>
    <div id="bg_top">
        <header>
        </header>
    </div>

    <div id="wrapperLoggedIn">
        <h1>Inloggad</h1>
        <p>Text text text</p>

        <!-- Personuppgifter -->
        <section>
            <h2>Personuppgifter</h2>
            <!-- Utskrift av personuppgifter -->
            <table>
                <thead>
                    <tr>
                        <th>Namn</th>
                        <th>Personnr.</th>
                        <th>Adress</th>
                        <th>Postnr.</th>
                        <th>Stad</th>
                        <th>E-mail</th>
                        <th>Telefon</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="aboutOutput"></tbody>
            </table>

            <!-- Uppdatering av personuppgifer -->
            <div id="updateAbout"></div>
        </section>

        <!-- Arbetslivserfarenhet -->
        <section>
            <h2>Arbetslivserfarenhet</h2>
            <!-- Utskrift av jobb -->
            <table>
                <thead>
                    <tr>
                        <th>Varaktighet</th>
                        <th>Företag</th>
                        <th>Roll</th>
                        <th>Beskrivning</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="jobsOutput"></tbody>
            </table>

            <!-- Uppdatering av jobb -->
            <div id="updateJobs"></div>

            <div>
                <h3>Lägg till jobb</h3>
                <form>
                    <label>
                        Varaktighet: <br>
                        <input type='text' name='cv_duration' id='cv_duration' class='inputField' required />
                    </label>
                    <label class='rightLabel'>
                        Företag: <br>
                        <input type='text' name='cv_company' id='cv_company' class='inputField' required />
                    </label>
                    <label>
                        Roll: <br>
                        <input type='text' name='cv_role' id='cv_role' class='inputField' required />
                    </label>
                    <label class="rightLabel">
                        Beskrivning: <br>
                        <input type='text' name='cv_description' id='cv_description' class='inputField' required />
                    </label>
                    <input type='submit' value='Lägg till' class='formBtn' name='formBtn' onClick='addJob();'>
            </div>
            </form>
        </section>

        <!-- Utbildning -->
        <section>
            <h2>Utbildning</h2>
            <!-- Utskrift av utbildningar -->
            <table>
                <thead>
                    <tr>
                        <th>Varaktighet</th>
                        <th>Lärosäte</th>
                        <th>Typ</th>
                        <th>Beskrivning</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="educationsOutput"></tbody>
            </table>

            <!-- Uppdatering av utbildning -->
            <div id="updateEducations"></div>

            <div>
                <h3>Lägg till utbildning</h3>
                <form>
                    <label>
                        Varaktighet: <br>
                        <input type='text' name='cv_durationE' id='cv_durationE' class='inputField' required />
                    </label>
                    <label class='rightLabel'>
                        Lärosäte: <br>
                        <input type='text' name='cv_nameE' id='cv_nameE' class='inputField' required />
                    </label>
                    <label>
                        Typ: <br>
                        <input type='text' name='cv_typeE' id='cv_typeE' class='inputField' required />
                    </label>
                    <label class="rightLabel">
                        Beskrivning: <br>
                        <input type='text' name='cv_descriptionE' id='cv_descriptionE' class='inputField' required />
                    </label>
                    <input type='submit' value='Lägg till' class='formBtn' name='formBtn' onClick='addEducation();'>
            </div>
            </form>
        </section>

        <!-- Webbplatser -->
        <section>
            <h2>Webbplatser</h2>
            <!-- Utskrift av webbplatser -->
            <table>
                <thead>
                    <tr>
                        <th>Titel</th>
                        <th>Länk</th>
                        <th>Beskrivning</th>
                        <th>Bild</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="websitesOutput"></tbody>
            </table>

            <!-- Uppdatering av webbplats -->
            <div id="updateWebsites"></div>

            <div>
                <h3>Lägg till webbplats</h3>
                <form>
                    <label>
                        Titel: <br>
                        <input type='text' name='cv_titleW' id='cv_titleW' class='inputField' required />
                    </label>
                    <label class='rightLabel'>
                        Länk: <br>
                        <input type='text' name='cv_urlW' id='cv_urlW' class='inputField' required />
                    </label>
                    <label>
                        Beskrivning: <br>
                        <input type='text' name='cv_descriptionW' id='cv_descriptionW' class='inputField' required />
                    </label>
                    <label class="rightLabel">
                        Bildnamn (sealwebbyra.jpg): <br>
                        <input type='text' name='cv_imageW' id='cv_imageW' class='inputField' value="sealwebbyra.jpg" required />
                    </label>
                    <input type='submit' value='Lägg till' class='formBtn' name='formBtn' onClick='addWebsite();'>
            </div>
            </form>
        </section>
    </div>

    <footer>
        <p id="copyright">&copy; Selma Kohnic 2019</p>
    </footer>
    <script src="js/main.js"></script>
</body>

</html>
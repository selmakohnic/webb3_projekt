<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>CV | Selma Kohnic</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <!-- Ikoner -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css"
        integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">

    <!-- Stilmall -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>
    <div id="bg_top">
        <header>
            <!-- Meny -->
            <nav>
                <ul>
                    <li><a href="#aboutTitle" title="Om mig">Om mig</a></li>
                    <li><a href="#jobsTitle" title="Arbetslivserfarenhet">Arbetslivserfarenhet</a></li>
                    <li><a href="#educationsTitle" title="Utbildningar">Utbildningar</a></li>
                    <li><a href="#websitesTitle" title="Webbplatser">Webbplatser</a></li>
                    <li><a href="#contactTitle" title="Kontakt">Kontakt</a></li>
                    <li><a href="login.main.php" title="Logga in">Logga in</a></li>
                </ul>
            </nav>

            <!-- Bild och kort presentation -->
            <img src="images/selmakohnic.jpg" alt="Selma Kohnic" title="Selma Kohnic">

            <div>
                <h1>Hej, mitt namn är <span class="highlight">Selma Kohnić</span>.</h1>
                <h2>Jag är en <span class="highlight">kreativ</span> person som just nu studerar <span
                        class="highlight">webbutveckling</span> på Mittuniversitetet. Sedan tidigare är jag utbildad
                    inom <span class="highlight">UX-design</span> och har därför ett stort intresse för <span
                        class="highlight">människor</span>
                    och <span class="highlight">teknik</span> i samspel. På denna sida kan du läsa mer om mig!</h2>
            </div>

            <div id="arrow">
                <a href="#aboutTitle" title=""><span class="fas fa-angle-down"></span></a>
            </div>
        </header>
    </div>

    <div id="wrapper">
        <!-- Om mig -->
        <h2 id="aboutTitle">Om mig</h2>
        <div id="aboutMe"></div>
        <div id="aboutMeInfo">
            <p>Jag är en färdigutbildad interaktionsdesigner som just nu utbildar mig till webbutvecklare på
                Mittuniversitetet.
                Interaktionsdesign kändes som ett självklart val med kombinationen av förståelsen av användare och
                utveckling av produkter eller tjänster. Vidare kompletteras denna tidigare kunskap av min nuvarande
                utbildning med ren och skär kodning där användarupplevelse är i fokus. Vid sidan av studierna, då
                tid har funnits, har jag jobbat med olika frilansuppdrag, däribland utveckling av webbplatser,
                utvärderingar
                och grafisk formgivning. Som person är jag ambitiös, lättsam, kreativ och älskar allt som har
                med teknik och människor i samspel att göra. Mina tidigare erfarenheter har lärt mig vikten av
                disciplin, empati
                och att få med glädje i allt man gör.</p>
        </div>

        <!-- Arbetslivserfarenhet -->
        <h2 id="jobsTitle">Arbetslivserfarenhet</h2>
        <div id="jobs"></div>

        <!-- Utbildningar -->
        <h2 id="educationsTitle">Utbildningar</h2>
        <div id="educations"></div>

        <!-- Webbplatser -->
        <h2 id="websitesTitle">Webbplatser</h2>
        <div id="websites"></div>
    </div>

    <footer>
        <form id="contactForm">
            <h2 id="contactTitle">Kontakt</h2>
            <i>Fält markerade med * är obligatoriska</i>
            <div>
                <p>
                    <label>
                        Namn: *<br />
                        <input type="text" name="namn" placeholder="Förnamn Efternamn" autofocus required
                            class="inputText" />
                    </label>
                </p>
                <p>
                    <label>
                        Företag: *<br />
                        <input type="text" name="company" placeholder="Företagsnamn" required class="inputText" />
                    </label>
                </p>
                <p>
                    <label>
                        E-postadress: *<br />
                        <input type="email" name="e-post" placeholder="namn@domän.se" required class="inputText" />
                    </label>
                </p>
                <p>
                    <label>
                        Telefonnummer: *<br />
                        <input type="tel" name="telefonnummer" required class="inputText" />
                    </label>
                </p>
                <label>
                    Meddelande:
                </label>
                <textarea name="meddelande" cols="50" rows="6" class="inputText"></textarea>
                <br />
                <div id="btn"><input type="submit" name="skicka" value="Skicka" id="formSendBtn" /></div>
            </div>
        </form>

        <p id="copyright">&copy; Selma Kohnic 2019</p>
    </footer>
    <script src="js/start.js"></script>
</body>

</html>
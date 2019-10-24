"use strict";

//Variabler
const urlWebsitesLoggedIn = "http://localhost/Webbutveckling3/projekt_api/cv_api.php/websites";

//Hämtar alla webbplatser och skriver ut dessa
function getWebsites() {
    //Använder fetch för att hämta JSON
    fetch(urlWebsitesLoggedIn)
        .then((res) => res.json())
        .then((data) => {
            let output = "";    //Variabel till utskrift

            //Varje element i JSON-fil skrivs ut med hjälp av en forEach-loop
            data.forEach(function (website) {
                let link = website.url;
                link = link.substr(0,30);
                output += `<tr>
                    <td>${website.title}</td>
                    <td>${link}[...]</td>
                    <td>${website.description}</td>
                    <td>${website.image}</td>
                    <td id='${website.id}' class='editBtn' onClick='updateFormWebsite(this.id);'><i class="fas fa-edit"></i></td>
                    <td id='${website.id}' class='editBtn' onClick='deleteWebsite(this.id);'><i class="fas fa-trash-alt"></i></td>
                </tr>`;
            })
            //Utskrift
            document.getElementById("websitesOutput").innerHTML = output;
        })
}

//Skriver ut inmatningsfält med webbplatsen som ska uppdateras
function updateFormWebsite(id) {
    const urlWebsitesUpdate = `${urlWebsitesLoggedIn}/${id}`;   //URL med id

    fetch(urlWebsitesUpdate)
        .then((res) => res.json())
        .then((data) => {
            let output = "<h3>Ändra webbplatser</h3>";    //Variabel till utskrift

            //Varje element i JSON-fil skrivs ut med hjälp av en forEach-loop
            data.forEach(function (website) {
                output += `<form>
                <label>
                    Titel: <br>
                    <input type='text' name='cv_titleUW' id='cv_titleUW' class='inputField' value='${website.title}' required />
                </label>
                <label class='rightLabel'>
                    Länk: <br>
                    <input type='text' name='cv_urlUW' id='cv_urlUW' class='inputField' value='${website.url}' required />
                </label>
                <label>
                    Beskrivning: <br>
                    <input type='text' name='cv_descriptionUW' id='cv_descriptionUW' class='inputField' value='${website.description}' required />
                </label>
                <label class="rightLabel">
                    Bildlänk: <br>
                    <input type='text' name='cv_imageUW' id='cv_imageUW' class='inputField' value='${website.image}' required />
                </label>
                <div id='msgWU'></div>
                <input type='submit' value='Spara' class='formBtn' name='formBtn' onClick='updateWebsite(${id})'>
                </form>`;
            })
            //Utskrift
            document.getElementById("updateWebsites").innerHTML = output;
        })
}

//Uppdatering av webbplats genom att värden hämtas från inmatningsfälten
function updateWebsite(id) {
    const urlWebsitesUpdate = `${urlWebsitesLoggedIn}/${id}`;   //URL med id

    //Värden i inmatningsfälten sparas i variabler
    let title = document.getElementById("cv_titleUW").value;
    let url = document.getElementById("cv_urlUW").value;
    let description = document.getElementById("cv_descriptionUW").value;
    let image = document.getElementById("cv_imageUW").value;

    //Kontroll av innehållet i inmatningsfälten. Är de tomma skrivs ett felmeddelande ut, är dem inte det sparas informationen
    if (title == "" || title == null && url == "" || url == null && description == "" || description == null
    || image == null && image == "") {
        document.getElementById("msgWU").innerHTML = "Fyll i alla fält!";
    }
    else {
        let jsonStr = JSON.stringify({
            "title": title,
            "url": url,
            "description": description,
            "image": image
        });

        fetch(urlWebsitesUpdate, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonStr
        }).then((res) => res.json())
            .then((data) => location.reload(true))
            .catch((err) => console.log(err))
    }
}

//Lägger till en webbplats
function addWebsite() {
    //Värden i inmatningsfälten sparas i variabler
    let title = document.getElementById("cv_titleW").value;
    let url = document.getElementById("cv_urlW").value;
    let description = document.getElementById("cv_descriptionW").value;
    let image = document.getElementById("cv_imageW").value;

    //Kontroll av innehållet i inmatningsfälten. Är de tomma skrivs ett felmeddelande ut, är dem inte det sparas informationen
    if (title == "" || title == null && url == "" || url == null && description == "" || description == null
    || image == null && image == "") {
        document.getElementById("msgW").innerHTML = "Fyll i alla fält!";
    }
    else {
        let jsonStr = JSON.stringify({
            "title": title,
            "url": url,
            "description": description,
            "image": image
        });

        fetch(urlWebsitesLoggedIn, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonStr
        }).then((res) => res.json())
            .then((data) => location.reload(true))
            .catch((err) => console.log(err))
    }
}

//Raderar en webbplats
function deleteWebsite(id) {
    if (confirm("Är du säker på att du vill ta bort webbplatsen?")) {
        const urlWebsitesDelete = `${urlWebsitesLoggedIn}/${id}`;   //URL med id

        fetch(urlWebsitesDelete, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
            .then((data) => location.reload(true))
            .catch((err) => console.log(err))
    }
}
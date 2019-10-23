"use strict";

//Variabler
const urlEducationsLoggedIn = "http://studenter.miun.se/~seko1800/dt173g/projekt/api/cv_api.php/educations";

//Hämtar alla utbildningar och skriver ut dessa
function getEducations() {
    //Använder fetch för att hämta JSON
    fetch(urlEducationsLoggedIn)
        .then((res) => res.json())
        .then((data) => {
            let output = "";    //Variabel till utskrift

            //Varje element i JSON-fil skrivs ut med hjälp av en forEach-loop
            data.forEach(function (education) {
                output += `<tr>
                    <td>${education.duration}</td>
                    <td>${education.name}</td>
                    <td>${education.type}</td>
                    <td>${education.description}</td>
                    <td id='${education.id}' class='editBtn' onClick='updateFormEducation(this.id);'><i class="fas fa-edit"></i></td>
                    <td id='${education.id}' class='editBtn' onClick='deleteEducation(this.id);'><i class="fas fa-trash-alt"></i></td>
                </tr>`;
            })
            //Utskrift
            document.getElementById("educationsOutput").innerHTML = output;
        })
}

//Skriver ut inmatningsfält med utbildningen som ska uppdateras
function updateFormEducation(id) {
    const urlEducationsUpdate = `${urlEducationsLoggedIn}/${id}`;

    fetch(urlEducationsUpdate)
        .then((res) => res.json())
        .then((data) => {
            let output = "<h3>Ändra utbildning</h3>";    //Variabel till utskrift

            //Varje element i JSON-fil skrivs ut med hjälp av en forEach-loop
            data.forEach(function (education) {
                output += `<form>
                <label>
                    Varaktighet: <br>
                    <input type='text' name='cv_durationUE' id='cv_durationUE' class='inputField' value='${education.duration}' required />
                </label>
                <label class='rightLabel'>
                    Lärosäte: <br>
                    <input type='text' name='cv_nameUE' id='cv_nameUE' class='inputField' value='${education.name}' required />
                </label>
                <label>
                    Typ: <br>
                    <input type='text' name='cv_typeUE' id='cv_typeUE' class='inputField' value='${education.type}' required />
                </label>
                <label class="rightLabel">
                    Beskrivning: <br>
                    <input type='text' name='cv_descriptionUE' id='cv_descriptionUE' class='inputField' value='${education.description}' required />
                </label>
                <input type='submit' value='Spara' class='formBtn' name='formBtn' onClick='updateEducation(${id})'>
                </form>`;
            })
            //Utskrift
            document.getElementById("updateEducations").innerHTML = output;
        })
}

//Uppdatering av utbildning genom att värden hämtas från inmatningsfälten
function updateEducation(id) {
    const urlEducationsUpdate = `${urlEducationsLoggedIn}/${id}`;

    //Värden i inmatningsfälten sparas i variabler
    let duration = document.getElementById("cv_durationUE").value;
    let name = document.getElementById("cv_nameUE").value;
    let type = document.getElementById("cv_typeUE").value;
    let description = document.getElementById("cv_descriptionUE").value;

    //Kontroll av innehållet i inmatningsfälten. Är de tomma skrivs ett felmeddelande ut, är dem inte det sparas informationen
    if (duration == "" || duration == null && name == "" || name == null && type == "" || type == null
    || description == null && description == "") {
        //document.getElementById("msg").innerHTML = "Fyll i alla fält!";
        console.log("Fel");
    }
    else {
        let jsonStr = JSON.stringify({
            "duration": duration,
            "name": name,
            "type": type,
            "description": description
        });

        fetch(urlEducationsUpdate, {
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

//Lägger till en utbildning
function addEducation() {
    //Värden i inmatningsfälten sparas i variabler
    let duration = document.getElementById("cv_durationE").value;
    let name = document.getElementById("cv_nameE").value;
    let type = document.getElementById("cv_typeE").value;
    let description = document.getElementById("cv_descriptionE").value;

    //Kontroll av innehållet i inmatningsfälten. Är de tomma skrivs ett felmeddelande ut, är dem inte det sparas informationen
    if (duration == "" || duration == null && name == "" || name == null && type == "" || type == null
    || description == null && description == "") {
        //document.getElementById("msg").innerHTML = "Fyll i alla fält!";
        console.log("Fel");
    }
    else {
        let jsonStr = JSON.stringify({
            "duration": duration,
            "name": name,
            "type": type,
            "description": description
        });

        fetch(urlEducationsLoggedIn, {
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

//Raderar en utbildning
function deleteEducation(id) {
    const urlEducationsDelete = `${urlEducationsLoggedIn}/${id}`;

    fetch(urlEducationsDelete, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json())
        .then((data) => location.reload(true))
        .catch((err) => console.log(err))
}
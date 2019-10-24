"use strict";

//Variabler
const urlJobsLoggedIn = "http://localhost/Webbutveckling3/projekt_api/cv_api.php/jobs";

//Hämtar alla jobb och skriver ut dessa
function getJobs() {
    //Använder fetch för att hämta JSON
    fetch(urlJobsLoggedIn)
        .then((res) => res.json())
        .then((data) => {
            let output = "";    //Variabel till utskrift

            //Varje element i JSON-fil skrivs ut med hjälp av en forEach-loop
            data.forEach(function (job) {
                output += `<tr>
                    <td>${job.duration}</td>
                    <td>${job.company}</td>
                    <td>${job.role}</td>
                    <td>${job.description}</td>
                    <td id='${job.id}' class='editBtn' onClick='updateFormJob(this.id);'><i class="fas fa-edit"></i></td>
                    <td id='${job.id}' class='editBtn' onClick='deleteJob(this.id);'><i class="fas fa-trash-alt"></i></td>
                </tr>`;
            })
            //Utskrift
            document.getElementById("jobsOutput").innerHTML = output;
        })
}

//Skriver ut inmatningsfält med jobbet som ska uppdateras
function updateFormJob(id) {
    const urlJobsUpdate = `${urlJobsLoggedIn}/${id}`;

    fetch(urlJobsUpdate)
        .then((res) => res.json())
        .then((data) => {
            let output = "<h3>Ändra jobb</h3>";    //Variabel till utskrift

            //Varje element i JSON-fil skrivs ut med hjälp av en forEach-loop
            data.forEach(function (job) {
                output += `<form>
                <label>
                    Varaktighet: <br>
                    <input type='text' name='cv_durationU' id='cv_durationU' class='inputField' value='${job.duration}' required />
                </label>
                <label class='rightLabel'>
                    Företag: <br>
                    <input type='text' name='cv_companyU' id='cv_companyU' class='inputField' value='${job.company}' required />
                </label>
                <label>
                    Roll: <br>
                    <input type='text' name='cv_roleU' id='cv_roleU' class='inputField' value='${job.role}' required />
                </label>
                <label class="rightLabel">
                    Beskrivning: <br>
                    <input type='text' name='cv_descriptionU' id='cv_descriptionU' class='inputField' value='${job.description}' required />
                </label>
                <div id='msgJU'></div>
                <input type='submit' value='Spara' class='formBtn' name='formBtn' onClick='updateJob(${id})'>
                </form>`;
            })
            //Utskrift
            document.getElementById("updateJobs").innerHTML = output;
        })
}

//Uppdatering av jobb genom att värden hämtas från inmatningsfälten
function updateJob(id) {
    const urlJobsUpdate = `${urlJobsLoggedIn}/${id}`;   //URL med id

    //Värden i inmatningsfälten sparas i variabler
    let duration = document.getElementById("cv_durationU").value;
    let company = document.getElementById("cv_companyU").value;
    let role = document.getElementById("cv_roleU").value;
    let description = document.getElementById("cv_descriptionU").value;

    //Kontroll av innehållet i inmatningsfälten. Är de tomma skrivs ett felmeddelande ut, är dem inte det sparas informationen
    if (duration == "" || duration == null && company == "" || company == null && role == "" || role == null
    || description == null && description == "") {
        document.getElementById("msgJU").innerHTML = "Fyll i alla fält!";
    }
    else {
        let jsonStr = JSON.stringify({
            "duration": duration,
            "company": company,
            "role": role,
            "description": description
        });

        fetch(urlJobsUpdate, {
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

//Lägger till ett jobb
function addJob() {
    //Värden i inmatningsfälten sparas i variabler
    let duration = document.getElementById("cv_duration").value;
    let company = document.getElementById("cv_company").value;
    let role = document.getElementById("cv_role").value;
    let description = document.getElementById("cv_description").value;

    //Kontroll av innehållet i inmatningsfälten. Är de tomma skrivs ett felmeddelande ut, är dem inte det sparas informationen
    if (duration == "" || duration == null && company == "" || company == null && role == "" || role == null
    || description == null && description == "") {
        document.getElementById("msgJ").innerHTML = "Fyll i alla fält!";
    }
    else {
        let jsonStr = JSON.stringify({
            "duration": duration,
            "company": company,
            "role": role,
            "description": description
        });

        fetch(urlJobsLoggedIn, {
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

//Raderar ett jobb
function deleteJob(id) {
    if (confirm("Är du säker på att du vill ta bort jobbet?")) {
        const urlJobsDelete = `${urlJobsLoggedIn}/${id}`;   //URL med id

        fetch(urlJobsDelete, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
            .then((data) => location.reload(true))
            .catch((err) => console.log(err))
        }
}
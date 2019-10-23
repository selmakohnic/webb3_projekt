"use strict";

//Variabler
const urlAboutLoggedIn = "http://studenter.miun.se/~seko1800/dt173g/projekt/api/cv_api.php/about";

//Hämtar alla personuppgifter och skriver ut dessa
function getUserInfo() {
    //Använder fetch för att hämta JSON
    fetch(urlAboutLoggedIn)
        .then((res) => res.json())
        .then((data) => {
            let output = "";    //Variabel till utskrift

            //Varje element i JSON-fil skrivs ut med hjälp av en forEach-loop
            data.forEach(function (user) {
                output += `<tr>
                    <td>${user.name}</td>
                    <td>${user.personal_id}</td>
                    <td>${user.address}</td>
                    <td>${user.zip_code}</td>
                    <td>${user.city}</td>
                    <td>${user.email}</td>
                    <td>0${user.phone}</td>
                    <td id='${user.id}' class='editBtn' onClick='updateFormUser(this.id);'><i class="fas fa-edit"></i></td>
                </tr>`;
            })
            //Utskrift
            document.getElementById("aboutOutput").innerHTML = output;
        })
}

//Skriver ut inmatningsfält med personuppgifterna som ska uppdateras
function updateFormUser(id) {
    const urlAboutUpdate = `${urlAboutLoggedIn}/${id}`;

    fetch(urlAboutUpdate)
        .then((res) => res.json())
        .then((data) => {
            let output = "<h3>Ändra personuppgifter</h3>";    //Variabel till utskrift

            //Varje element i JSON-fil skrivs ut med hjälp av en forEach-loop
            data.forEach(function (user) {
                output += `<form>
                <label>
                    Namn: <br>
                    <input type='text' name='cv_name' id='cv_name' class='inputField' value='${user.name}' required />
                </label>
                <label class='rightLabel'>
                    Adress: <br>
                    <input type='text' name='cv_address' id='cv_address' class='inputField' value='${user.address}' required />
                </label>
                <label>
                    Postnummer: <br>
                    <input type='text' name='cv_zip_code' id='cv_zip_code' class='inputField' value='${user.zip_code}' required />
                </label>
                <label class="rightLabel">
                    Stad: <br>
                    <input type='text' name='cv_city' id='cv_city' class='inputField' value='${user.city}' required />
                </label>
                <label>
                    E-mail: <br>
                    <input type='text' name='cv_email' id='cv_email' class='inputField' value='${user.email}' required />
                </label>
                <label class="rightLabel">
                    Telefonnummer: <br>
                    <input type='text' name='cv_phone' id='cv_phone' class='inputField' value='0${user.phone}' required />
                </label>
                <input type='submit' value='Spara' class='formBtn' name='formBtn' onClick='updateAbout(${id})'>
                </form>`;
            })
            //Utskrift
            document.getElementById("updateAbout").innerHTML = output;
        })
}

//Uppdatering av personuppgifterna genom att värden hämtas från inmatningsfälten
function updateAbout(id) {
    const urlAboutUpdate = `${urlAboutLoggedIn}/${id}`;

    //Värden i inmatningsfälten sparas i variabler
    let name = document.getElementById("cv_name").value;
    let address = document.getElementById("cv_address").value;
    let zip_code = document.getElementById("cv_zip_code").value;
    let city = document.getElementById("cv_city").value;
    let email = document.getElementById("cv_email").value;
    let phone = document.getElementById("cv_phone").value;

    //Kontroll av innehållet i inmatningsfälten. Är de tomma skrivs ett felmeddelande ut, är dem inte det sparas informationen
    if (name == "" || name == null && address == "" || address == null && zip_code == "" || zip_code == null
    || city == null && city == "" || email == null && email == "" || phone == null && phone == "") {
        //document.getElementById("msg").innerHTML = "Fyll i alla fält!";
        console.log("Fel");
    }
    else {
        let jsonStr = JSON.stringify({
            "name": name,
            "address": address,
            "zip_code": zip_code,
            "city": city,
            "email": email,
            "phone": phone
        });

        fetch(urlAboutUpdate, {
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
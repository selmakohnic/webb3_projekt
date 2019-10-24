"use strict";

//Variabler
const urlAbout = "http://localhost/Webbutveckling3/projekt_api/cv_api.php/about";
const urlJobs = "http://localhost/Webbutveckling3/projekt_api/cv_api.php/jobs";
const urlEducations = "http://localhost/Webbutveckling3/projekt_api/cv_api.php/educations";
const urlWebsites = "http://localhost/Webbutveckling3/projekt_api/cv_api.php/websites";

//Händelsehanterare
window.onload = init;

//Anropar funktioner som behövs direkt
function init() {
    getUserInfo();
    getJobs();
    getEducations();
    getWebsites();
}

//Hamburgarmeny som öppnas och stängs
function toggleMenu(){
    $("#globalNav").toggle(),$(".hamburgerMenu").toggleClass("hMenuClose")
}

//Hämtar alla personuppgifter och skriver ut dessa
function getUserInfo() {
    //Använder fetch för att hämta JSON
    fetch(urlAbout)
        .then((res) => res.json())
        .then((data) => {
            let output = "";    //Variabel till utskrift

            //Varje element i JSON-fil skrivs ut med hjälp av en forEach-loop
            data.forEach(function (user) {
                output += `<h3>${user.name}</h3>
                <ul>
                    <li><i class="fas fa-user"></i> ${user.personal_id}</li>
                    <li><i class="fas fa-map-marker-alt"></i> ${user.address}<br><span id='address'>${user.zip_code} ${user.city}</span></li>
                    <li><i class="fas fa-envelope"></i> ${user.email}</li>
                    <li><i class="fas fa-phone"></i> 0${user.phone}</li>
                </ul>`;
            })
            //Utskrift
            document.getElementById("aboutMe").innerHTML = output;
        })
}

//Hämtar alla jobb och skriver ut dem
function getJobs() {
    //Använder fetch för att hämta JSON
    fetch(urlJobs)
        .then((res) => res.json())
        .then((data) => {
            let output = "";    //Variabel till utskrift
            let counter = 0;    //Räknare

            output += "<div class='timeline'>";
            //Varje element i JSON-fil skrivs ut med hjälp av en forEach-loop
            data.forEach(function (job) {
                counter += 1;

                //Varannant stycke om jobb får en viss typ av klass
                if (counter%2 == 0) {
                    output += `<div class='container left'>
                        <div class="content">
                            <h3>${job.duration}</h3>
                            <h2>${job.company}</h2>
                            <b>${job.role}</b>
                            <p>${job.description}</p>
                        </div>
                    </div>`;
                }
                else {
                    output += `<div class="container right">
                        <div class="content">
                            <h3>${job.duration}</h3>
                            <h2>${job.company}</h2>
                            <b>${job.role}</b>
                            <p>${job.description}</p>
                        </div>
                    </div>`;
                }
            })
            output += "</div>";
            //Utskrift
            document.getElementById("jobs").innerHTML = output;
        })
}

//Hämtar alla utbildningar och skriver ut dem
function getEducations() {
    //Använder fetch för att hämta JSON
    fetch(urlEducations)
        .then((res) => res.json())
        .then((data) => {
            let output = "";    //Variabel till utskrift

            output += "<div class='timelineEducation education'>";
            //Varje element i JSON-fil skrivs ut med hjälp av en forEach-loop
            data.forEach(function (education) {
                output += `<div class='containerEducation leftEducation education'>
                    <div class="contentEducation">                            
                        <h3>${education.duration}</h3>
                        <b>${education.type}</b>
                    </div>
                </div>`;
                
                output += `<div class="containerEducation rightEducation education">
                    <div class="contentEducation">
                        <h2>${education.name}</h2>
                        <p>${education.description}</p>
                    </div>                    
                </div>`;
            })
            output += "</div>";
            //Utskrift
            document.getElementById("educations").innerHTML = output;
        })
}

//Hämtar alla webbplatser och skriver ut dessa
function getWebsites() {
    //Använder fetch för att hämta JSON
    fetch(urlWebsites)
        .then((res) => res.json())
        .then((data) => {
            let output = "";    //Variabel till utskrift

            //Varje element i JSON-fil skrivs ut med hjälp av en forEach-loop
            data.forEach(function (website) {
                output += `
                    <figure>
                    <h2>${website.title}</h2>
                    <a href='${website.url}' title='${website.title}' target='_blank'><img src='images/${website.image}' alt='${website.title}' title='${website.title}'></a>
                        <figcaption><p>${website.description}</p></figcaption>
                    </figure>`;
            })
            //Utskrift
            document.getElementById("websites").innerHTML = output;
        })
}
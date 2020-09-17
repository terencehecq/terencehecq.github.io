// Function generate My Work card
const appendHere = document.getElementById("MyWorkCards");

function generateWork(imgFileName, imgAlt, gitHubUrl, workUrl, title, techs ){

    let newCard = document.createElement("article");
    newCard.classList.add("card");
    let stockTechs = "";

    techs.forEach(tech => {
        stockTechs += `<img src="assets/img/${tech}" alt="logo ${tech}">\n`
    });

    newCard.innerHTML = `<div class="pic">
                            <img src="assets/img/${imgFileName}" alt="${imgAlt}">
                            <div class="visit">
                                <a href="${gitHubUrl}" target="_blank" rel="noopener"><i class="fab fa-github"></i></a>
                                <a href="${workUrl}" target="_blank" rel="noopener"><i class="fas fa-globe-americas"></i></a>
                            </div>
                        </div>
                        <div class="text">
                            <h2>${title}</h2>
                            <div class="tech">`
                                + 
                                stockTechs
                                +
                            `</div>
                        </div>`;


    appendHere.appendChild(newCard);

}

// generateWork("burger.png", "Bear burger", "https://github.com/terencehecq/restaurant-css-framework", "https://terencehecq.github.io/restaurant-css-framework/", "Bear Burger", ['css', 'html'] )
// generateWork("burger.png", "Bear burger", "https://github.com/terencehecq/restaurant-css-framework", "https://terencehecq.github.io/restaurant-css-framework/", "Bear Burger", ['css', 'html'] )
// generateWork("burger.png", "Bear burger", "https://github.com/terencehecq/restaurant-css-framework", "https://terencehecq.github.io/restaurant-css-framework/", "Bear Burger", ['css', 'html'] )



// Smooth scroll 

// Elements which trigger smooth scroll
const logoLink = document.getElementById("logoLink")
const down = document.getElementById("down");
const skillsLink = document.getElementById("skillsLink");
const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const myWorkLink = document.getElementById("myWorkLink");
const contactLink = document.getElementById("contactLink");

// Sections where to point
const aboutPos = document.getElementById("about").offsetTop;
const workPos = document.getElementById("myWork").offsetTop;
const contactPos = document.getElementById("contact").offsetTop;
const skillsPos = document.getElementById("skills").offsetTop;

const smoothElems = [
    [logoLink, 0],
    [down, skillsPos-100],
    [homeLink, 0],
    [skillsLink, skillsPos-100],
    [aboutLink, aboutPos-90],
    [myWorkLink, workPos+40],
    [contactLink, contactPos],
]

smoothElems.forEach((item) => {
    item[0].addEventListener("click", () => {

        window.scrollTo({top: item[1], behavior: 'smooth'})
    })
})



let burgerButton = document.querySelector("#burger>button");
let menu = document.querySelector("nav>ul");

burgerButton.addEventListener("click", ()=>{
    menu.classList.toggle("visible")
    burgerButton.classList.toggle("is-active")
})


// burger.addEventListener("click", ()=>{
//     menu.classList.toggle("visible")

//     menu.classList.contains("visible") ? burger.innerHTML = `<i class="fas fa-times"></i>`: burger.innerHTML = `<i class="fas fa-bars"></i>`
// })

// menu.classList.contains("visible") ? burger.innerHTML = `<i class="fas fa-times"></i>`: burger.innerHTML = `<i class="fas fa-bars"></i>`


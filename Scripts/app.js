function postForm(){
    document.getElementById("aForm").submit();
}

function setDelay(){
    console.log("Name: " + document.forms["aForm"]["name"].value);
    console.log("Number: " + document.forms["aForm"]["number"].value);
    console.log("Email: " + document.forms["aForm"]["email"].value);
    console.log("Comments: " + document.forms["aForm"]["comments"].value);
    setTimeout("postForm()", 3000);
}

var welcomeMsg = "You have arrived at the WEBD 6201 Lab 1 Website for Matthew Ware and Irina Nazarova, Weclome to our website.  We have included links to our projects, services, about us, and a way to contact us.  Enjoy!";
var aboutMatt = "I am a Durham College student in the Computer Programmer Analyst three year diploma.  I have a BA in Philosophy, a BSc in Psychology with a minor in Physics, a BA in Adult Education and Digital Technology, and hope to achieve another BSc in Computer Science.";
var aboutIrina = "I am a Durham College student in ....";
var projectsMatt = "The top three projects by Matt include a website to sort notes, a site to take notes for my next book, and my database program.";
var projectsIrina = "The top three projects by Irina include...";
var servicesMsg = "The top three services offered by Matt include programming, web development, and databases.  The three top services offered by Irina include ...";

function loadAbout(){
    document.getElementById("aboutMatt").innerHTML = aboutMatt;
    document.getElementById("aboutIrina").innerHTML = aboutIrina;
}

function loadHome(){
    document.getElementById("homepage").innerHTML = welcomeMsg;
}

function loadProjects(){
    document.getElementById("projectsMatt").innerHTML = projectsMatt;
    document.getElementById("projectsIrina").innerHTML = projectsIrina;
}

function loadServices(){
    document.getElementById("services").innerHTML = servicesMsg;
}

function navOnLoad(){
    const productName = document.getElementsByClassName("products");
    productName[0].innerHTML = "Projects";
    // document.appendChild(htmlToAdd);
}
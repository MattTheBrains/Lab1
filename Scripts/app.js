function postForm(){
    console.log("Name: " + document.forms["aForm"]["name"].value);
    console.log("Number: " + document.forms["aForm"]["number"].value);
    console.log("Email: " + document.forms["aForm"]["email"].value);
    console.log("Comments: " + document.forms["aForm"]["comments"].value);
    setTimeout(document.getElementById("aForm").submit(), 3000);
}
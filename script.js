function showMessage() { 
    alert("Hello! Welcome to my website."); 
    }
function changeBgColor() { 
    document.body.style.backgroundColor = "lightblue"; 
    }
function displayGreeting() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("greeting").innerHTML = "Hello, " + name + "! Welcom to my website!"; 
    }    

function changeBgColorUser() {
    let color = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = color;
}

function changeheadingsize() {
    let size = document.getElementById("sizeInput").value;
    document.getElementById("myH").style.fontSize = size+"px";
}
function changeheadingcolor() {
    let hcolor = document.getElementById("headingcolorInput").value;
    document.getElementById("myH").style.color = hcolor;
}
function checkAge(){
    let age = document.getElementById("ageInput").value;
    if (age>= 18) {
        alert("You're an adult!");
    } else {
        alert("You're still a kid!");
    }
}
function favorite(){
    document.getElementById("likeordislike").textContent = "You liked the img"
}
function unfavorite(){
    document.getElementById("likeordislike").textContent = ""
}

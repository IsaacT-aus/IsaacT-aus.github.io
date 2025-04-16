function happymood() {
    document.body.style.backgroundColor = "blue";
    document.getElementById("sadgura").style.visibility = 'hidden';
    document.getElementById("happygura").style.visibility = 'visible';
}
function sadmood() {
    document.body.style.backgroundColor = "red";
    document.getElementById("sadgura").style.visibility = 'visible';
    document.getElementById("happygura").style.visibility = 'hidden';
}

document.addEventListener("DOMContentLoaded", function() {
    //load the name into the input
    document.getElementById("nameInput").value = localStorage.getItem("name");
    document.getElementById("sessionInput").value = localStorage.getItem("session");
})

document.getElementById("saveName").addEventListener("click", function () {
    //save the name
    var name = document.getElementById("nameInput").value;
    var session = document.getElementById("sessionInput").value;

    localStorage.setItem("name", name);
    localStorage.setItem("session", session);
    
    })
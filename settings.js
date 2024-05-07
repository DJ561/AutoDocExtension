document.addEventListener("DOMContentLoaded", function() {
    //load the name into the input
    let username
    let session

    chrome.storage.local.get(["username", "session"], function(result) {
        console.log(result)
        console.log(result.username)
        username = result.username
        session = result.session
        document.getElementById("nameInput").value = username
        document.getElementById("sessionInput").value = session

    })
})

document.getElementById("saveName").addEventListener("click", function () {
    //save the name
    let username = document.getElementById("nameInput").value;
    let session = document.getElementById("sessionInput").value;

    chrome.storage.local.set({
        "username" : username,
        "session": session
    }).then(()=>{

    })
    window.location.href = "popup.html";
    })




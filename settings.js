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
    
    })


document.getElementById("advanced").addEventListener("change", function () {

    
    if (document.getElementById("advanced").checked) {

        //remove all the old nodes

        document.getElementById("sessionInput").style.display = "none";
        document.getElementById("nameInput").style.display = "none";
        document.getElementById("saveName").style.display = "none";
        document.getElementById("sessionLabel").style.display = "none";
        document.getElementById("nameLabel").style.display = "none";

        //add new form fields to the page

        var AdvancedInput = document.createElement("textarea");
        AdvancedInput.id = "advancedInput";
        AdvancedInput.rows = 10;
        AdvancedInput.style.resize = "none";
        AdvancedInput.style.width = "320px";
        AdvancedInput.style.boxSizing = "border-box";
        AdvancedInput.style.display = "block";
        AdvancedInput.style.margin = "0 auto";
        AdvancedInput.value = "🚧work in progress🚧 \nadvanced mode dosent do anything rn :(";
        document.body.appendChild(AdvancedInput);
    }

    else {
        
        document.getElementById("sessionInput").style.display = "block";
        document.getElementById("nameInput").style.display = "block";
        document.getElementById("saveName").style.display = "block";
        document.getElementById("defaultDocNameInput").style.display = "block";
        document.getElementById("defaultDocNameLabel").style.display = "block";
        document.getElementById("sessionLabel").style.display = "block";
        document.getElementById("nameLabel").style.display = "block";
        
        var AdvancedInput = document.getElementById("advancedInput");
        AdvancedInput.remove();
        

    }
})


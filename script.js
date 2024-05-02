document.addEventListener("DOMContentLoaded", function() {
    const genBtn = document.getElementById("Genre");
    const questBtn = document.getElementById("Quest");
    const civBtn = document.getElementById("Civ");
    const settingsBtn = document.getElementById("Settings");

    var url = "https://script.google.com/macros/s/AKfycbzUI1wJNw9sYF9wxPYvWbom8WVf8oxAgD8CEeCt7wk/dev"

    if (genBtn) {
        genBtn.addEventListener("click", function () {
            console.log("Genre button clicked");
    
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("data", "?subject=genre&name=Testname");

            xhr.onload = function () {
                console.log(xhr.status);
                console.log(xhr.responseText);
                //chrome.tabs.create({ url: xhr.responseText });
                }
            
            xhr.send();
        });

    }

    if (questBtn) {
        questBtn.addEventListener("click", function () {
            console.log("Quest button clicked");
        });
    }

    if (civBtn) {
        civBtn.addEventListener("click", function () {
            console.log("Civ button clicked");
        });

    }

    if (settingsBtn) {
        settingsBtn.addEventListener("click", function () {
            console.log("Settings button clicked");
        });
    }
});


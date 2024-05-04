var winId
let username = "Placeholder";
let session = "Placeholder";


chrome.windows.getCurrent( function(window) {
    winId = window.id;
});


chrome.storage.local.get(["username", "session"], function(result) {
    username = result.username
    session = result.session
})

document.addEventListener("DOMContentLoaded", function() {
    
    const url = "https://script.google.com/macros/s/AKfycbzIwFJtzOoa9Rv8plt9PQRxOOMafj-Q8nGBeD8vJTzsf5X5i2lAR_jxlK9SP7qJjL5p/exec"
    const genBtn = document.getElementById("Genre");
    const questBtn = document.getElementById("Quest");
    const civBtn = document.getElementById("Civ");
    const settingsBtn = document.getElementById("Settings");


    if (genBtn) {
        genBtn.addEventListener("click", function () {

            var xhr = new XMLHttpRequest();
            xhr.open("GET", url+"?subject=Genre&session="+ session +"&name="+username, true);
        
            xhr.onload = function () {
                console.log(xhr.status);
                console.log(xhr.responseText);
                var regex = /^https:\/\/docs\.google\.com\//;
                if (regex.test(xhr.responseText)) {
                    chrome.tabs.create({ url: xhr.responseText });
                } else {
                    //alert("Error: "+xhr.responseText);
                    chrome.tabs.create({ url : url+"?nodoc=true"});
                }
            };

            xhr.send();
        });
        }

    if (questBtn) {
        questBtn.addEventListener("click", function () {

            var xhr = new XMLHttpRequest();
            xhr.open("GET", url+"?subject=Quest&name="+username+"&session="+session, true);
        
            xhr.onload = function () {
                console.log(xhr.status);
                console.log(xhr.responseText);
                var regex = /^https:\/\/docs\.google\.com\//;
                if (regex.test(xhr.responseText)) {
                    chrome.tabs.create({ url: xhr.responseText });
                } else {
                    //alert("Error: "+xhr.responseText);
                    chrome.tabs.create({ url : url+"?nodoc=true"});
                }
            };

            xhr.send();
        });
        };
    

    if (civBtn) {
        civBtn.addEventListener("click", function () {

            var xhr = new XMLHttpRequest();
            xhr.open("GET", url+"?subject=Civ&name="+username+"&session="+session, true);
        
            xhr.onload = function () {
                console.log(xhr.status);
                console.log(xhr.responseText);
                var regex = /^https:\/\/docs\.google\.com\//;
                if (regex.test(xhr.responseText)) {
                    chrome.tabs.create({ url: xhr.responseText });
                } else {
                    //alert("Error: "+xhr.responseText);
                    chrome.tabs.create({ url : url+"?nodoc=true"});
                }
            };

            xhr.send();
        });
    }

    if (settingsBtn) {
        settingsBtn.addEventListener("click", function () { 
            chrome.sidePanel.open({ windowId: winId });

        });
    }
});
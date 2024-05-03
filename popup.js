var winId

chrome.windows.getCurrent( function(window) {
    winId = window.id;
});




document.addEventListener("DOMContentLoaded", function() {

    
    const url = "https://script.google.com/macros/s/AKfycbzIwFJtzOoa9Rv8plt9PQRxOOMafj-Q8nGBeD8vJTzsf5X5i2lAR_jxlK9SP7qJjL5p/exec"
    const genBtn = document.getElementById("Genre");
    const questBtn = document.getElementById("Quest");
    const civBtn = document.getElementById("Civ");
    const settingsBtn = document.getElementById("Settings");
    var username = "Placeholder";
    var session = "Placeholder";

    chrome.commands.onCommand.addListener((command) => {
        //alert(command);
        if (command === "open-settings") {
            document.location.href = "settings.html";
        }
        
        if (command === "make-doc") {
                    
            username = localStorage.getItem("name");
            session = localStorage.getItem("session");

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
        }

        }

    );

    if (genBtn) {
        genBtn.addEventListener("click", function () {
        
            username = localStorage.getItem("name");
            session = localStorage.getItem("session");

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

            username = localStorage.getItem("name");
            session = localStorage.getItem("session");

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

            username = localStorage.getItem("name");
            session = localStorage.getItem("session");

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
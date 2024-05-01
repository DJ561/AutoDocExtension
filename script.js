document.addEventListener("DOMContentLoaded", function() {
    const genBtn = document.getElementById("Genre");
    const questBtn = document.getElementById("Quest");
    const civBtn = document.getElementById("Civ");
    const settingsBtn = document.getElementById("Settings");

    if (genBtn) {
        genBtn.addEventListener("click", function () {
            fetch("https://script.google.com/macros/s/AKfycbzs7-wkULZVs3QqzGf9ZDXnzgXVbifISA9ywenFwuzx/dev")
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));
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


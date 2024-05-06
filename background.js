chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    chrome.storage.local.get(["username", "session"], function(result) {
        console.log(result)
        console.log(result.username)
        var username = result.username
        var session = result.session
        const url = "https://script.google.com/macros/s/AKfycbwXVB2f_GRDQQZBT5Gx4cb13obuA1cmF90dpdH6UAb4YWSE2FCi6cNlFji_BSr9FGK_/exec"

        //parse the message and get the subject and challenge
        var subject = message.message.subject;
        var challenge = message.message.challenge;

        //replace & in the challenge so it dosent break the url

        challenge = challenge.replace(/&/g, "%26");
    
        console.log("Subject: " + subject);
        console.log("Challenge: " + challenge);
    
        console.log("Message from content script:", message.message);
    
        fetch(url+"?subject="+subject+"&session="+ session +"&name="+username+"&docname="+challenge)
        .then(response => response.text())
        .then(text => {
            var regex = /^https:\/\/docs\.google\.com\//;
            if (regex.test(text)) {
                chrome.tabs.create({ url: text });
            } else {
                //alert("Error: "+xhr.responseText);
                chrome.tabs.create({ url : url+"?nodoc=true"});
            }
        });
    })
    return true
});
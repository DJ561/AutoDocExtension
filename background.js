chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    chrome.storage.local.get(["username", "session"], function(result) {
        console.log(result)
        console.log(result.username)
        var username = result.username
        var session = result.session
        const url = "https://script.google.com/macros/s/AKfycbzUI1wJNw9sYF9wxPYvWbom8WVf8oxAgD8CEeCt7wk/dev"

        //parse the message and get the subject and challenge
        var subject = message.message.subject;
        var challenge = message.message.challenge;
    
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
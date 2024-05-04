setInterval(function(){
    var existingElement = document.getElementsByClassName('card-content')[0];
    var challange = existingElement.children[0];
    var btn = document.createElement("button");
    btn.textContent = "Make Doc";
    btn.onclick = function() {
        chrome.runtime.sendMessage({message: {"subject": subject, "challenge": challange.innerHTML}},
        function(response) {
        });
    }
    if (!challange.innerHTML.match(/^Session\s+\d+,\s+Week\s+\d+$/i) & existingElement.children[1].innerHTML != "Make Doc") {
        challange.parentNode.insertBefore(btn, challange.nextSibling);
        var subject = existingElement.children[4].lastElementChild.innerHTML.match(/(?<=<\/svg>)\s*([A-Za-z\s]+)/)[1]
    }


}, 1000);

document.addEventListener("DOMContentLoaded", function() {
    chrome.runtime.sendMessage({action: "getTextCount"}, function(response) {
        document.getElementById("count").textContent = response;
    });
});

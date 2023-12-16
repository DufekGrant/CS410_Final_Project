
chrome.runtime.onMessage.addListener(function (request,sender,sendResponse){
    if (request.message === "message sent") {
        const text = Array.from(querySelectorAll('')).map();
        sendResponse(text)
    }
})
// var app = chrome.runtime.getBackgroundPage();

function AddToCart() {
 chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
    chrome.tabs.executeScript(null, { file: "autoCart.js" });
});
}

document.getElementById('clickme').addEventListener('click', AddToCart);

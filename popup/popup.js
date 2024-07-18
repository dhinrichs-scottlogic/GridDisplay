function init() {
    const starToggle = document.getElementById("starGrid");

    starToggle
    .addEventListener("change",
        evt => browser.runtime.sendMessage({ action: "setState", value: starToggle.checked })
    );

    const onStatusChange = (message) => (message, sender, sendResponse) => {
        if (message.extensionState !== undefined) {
            starToggle.checked = message.extensionState;
        }
    };

    // Handle the initial message when the popup is opened
    browser.runtime.sendMessage({ action: "getState" }, onStatusChange);

    // Listen for messages from the background script
    browser.runtime.onMessage.addListener(onStatusChange);
}

window.addEventListener("load", init);
import { settingsStorage } from "settings";
import * as messaging from "messaging";

settingsStorage.setItem("name", JSON.stringify({ name: "DM" }));
messaging.peerSocket.addEventListener("open", (evt) => {
    console.log("Companion Socket Open");
});

messaging.peerSocket.addEventListener("error", (err) => {
    console.error(`Connection error: ${err.code} - ${err.message}`);
});

settingsStorage.addEventListener("change", (evt) => {
    sendMessage(evt.key, evt.newValue);
});

function sendMessage(evtKey, evtNewValue) {

    let data = {
        type: "userInput",
        payload: {
            key: evtKey,
            newValue: evtNewValue
        }
    }

    if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
        // Send the data to peer as a message
        messaging.peerSocket.send(data);
    } else {
        messaging.peerSocket.onopen = function () {
            messaging.peerSocket.send(data);
        }
    }
}
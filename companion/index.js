import * as messaging from "messaging";
import { settingsStorage } from "settings";



settingsStorage.addEventListener("change", (evt) => {
    if (evt.oldValue !== evt.newValue) {
        sendMessage(evt.key, evt.newValue);
    }
});

function sendMessage(evtKey, evtNewValue) {
    if (evtNewValue) {
        sendData({
            key: evtKey,
            value: JSON.parse(evtNewValue)
        });
    }
}

function sendData(data) {
    if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
        // Send the data to peer as a message
        messaging.peerSocket.send(data);
    } else {
        // Wait for the connection to open and try again
        messaging.peerSocket.onopen = function () {
            messaging.peerSocket.send(data);
        }
    }
}
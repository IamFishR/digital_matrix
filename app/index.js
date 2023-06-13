import clock from "clock";
import * as document from "document";
import DM from "../common";
import * as messaging from "messaging";

// Tick every second
clock.granularity = "seconds";

let hourHand = document.getElementById("hours");
let minHand = document.getElementById("mins");
let secHand = document.getElementById("secs");
let date = document.getElementById('date');
let weekday = document.getElementById('weekday');
let month = document.getElementById('month');
let name = document.getElementById('name');
let sec_handle = document.getElementById('sec_handle');
const weekdayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const monthfullNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemver", "December"];

// Returns an angle (0-360) for the current hour in the day, including minutes
function hoursToAngle(hours, minutes) {
    let hourAngle = (360 / 12) * hours;
    let minAngle = (360 / 12 / 60) * minutes;
    return hourAngle + minAngle;
}

// Returns an angle (0-360) for minutes
function minutesToAngle(minutes) {
    return (360 / 60) * minutes;
}

// Returns an angle (0-360) for seconds
function secondsToAngle(seconds) {
    return (360 / 60) * seconds;
}

// Rotate the hands every tick
function updateClock() {
    let today = new Date();
    let hours = today.getHours() % 12;
    let mins = today.getMinutes();
    let secs = today.getSeconds();

    hourHand.groupTransform.rotate.angle = hoursToAngle(hours, mins);
    minHand.groupTransform.rotate.angle = minutesToAngle(mins);
    secHand.groupTransform.rotate.angle = secondsToAngle(secs);
    date.text = `${DM.zeroPad(today.getDate())}`;
    // add MON, TUE, WED, etc. to the date
    weekday.text = `${weekdayNames[today.getDay()]}`;
    month.text = `${monthfullNames[today.getMonth()]}`;
}

// Update the clock every tick event
clock.addEventListener("tick", updateClock);

// clock face without always on display mode show the clock face
if (DM.isAODAvailable()) {
    console.log("AOD is available");
    DM.display.addEventListener("change", () => {
        console.log("Display: " + DM.display.on);
        if (DM.display.on) {
            updateClock();
        }
    });
}

messaging.peerSocket.addEventListener("message", function (evt) {
    if (evt.data && evt.data.type === "userInput") {
        let value = evt.data.payload.newValue;
        if (evt.data.payload.key === 'name' && (value !== '' || value !== null)) {
            name.text = JSON.parse(value).name;
        }

        if (evt.data.payload.key == "color" && (value != '' || value != null)) {
            sec_handle.style.fill = JSON.parse(value);
        }
    }
});
import { display } from "display";
const DM = {
    zeroPad: (num) => {
        if (num < 10) {
            num = `0${num}`
        }
        return num
    },
    isAODAvailable: () => {
        return (typeof (display) !== "undefined" && display.aodAvailable && display.aodActive)
    },
}

export default DM;
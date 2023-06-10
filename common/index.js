const DM = {
    zeroPad: (num) => {
        if (num < 10) {
            num = `0${num}`
        }
        return num
    }
}

export default DM;
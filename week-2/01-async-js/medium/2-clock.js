/* Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM) */

function showTimeInIST(format) {
    const date = new Date();
    let hours = 0;
    let minutes = 0;
    let time = 0;

    if (date.getUTCMinutes() + 30 > 60) {
        hours = format === '24Hrs' ? (date.getUTCHours() + 6) % 24 :
            (date.getUTCHours() + 6) % 12;
        minutes = date.getUTCMinutes() + 30 - 60;
    } else {
        hours = format === '24Hrs' ? (date.getUTCHours()) % 24 + 5 : (date.getUTCHours()) % 12 + 5
        minutes = date.getUTCMinutes() + 30;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    time = `${hours}:${minutes}:${date.getUTCSeconds()}`;
    console.log(time);
}

setInterval(function () {
    showTimeInIST('24Hrs');
}, 1000);


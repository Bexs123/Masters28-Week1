//Activity
// Let's create an alarm

// create a key called weekendAlarm, with a value saying
// "no alarm needed" and a key called weekday Alarm, with a value
// saying "get up at 7am".

// create a variable called day and one called alarm.

// If day is Saturday or Sunday, set alarm to wekendAlarm.
// If day is a weekday, set alarm to weekdayAlarm.

let alarm ="";
let day = "Saturday";

const alarmClock = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get Up at 7am"
};

if(day == "Saturday" || day == "Sunday") {
    alarm = alarmClock.weekendAlarm;
    console.log(`Good Morning: ${alarm}`)
} else {
    alarm = alarmClock.weekdayAlarm;
    console.log(`Good Morning: ${alarm}`)
}
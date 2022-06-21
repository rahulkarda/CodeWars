/*
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

*/


//Answer

function formatDuration(seconds) {
    if (seconds === 0) { return 'now'; }

    let years = Math.floor(seconds / (60 * 60 * 24 * 365));
    let days = Math.floor(seconds / (60 * 60 * 24)) % 365;
    let hours = Math.floor(seconds / (60 * 60)) % 24;
    let minutes = Math.floor(seconds / 60) % 60;
    var seconds = seconds % 60;

    let duration = [years, days, hours, minutes, seconds];
    let units = ['year', 'day', 'hour', 'minute', 'second'];

    let linked = duration.map(function (el, ind) {
        if (el > 1) { return el + ' ' + units[ind] + 's' }
        if (el === 1) { return el + ' ' + units[ind] }
    }).filter(el => el !== undefined);

    if (linked.length > 1) {
        let last = linked.pop();
        return linked.join(', ') + ' and ' + last;
    } else {
        return linked[0];
    }
}

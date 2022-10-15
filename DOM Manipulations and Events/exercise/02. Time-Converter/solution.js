// function attachEventsListeners() {

//     let inputDays = document.getElementById('days');
//     let inputHours = document.getElementById('hours');
//     let inputMinutes = document.getElementById('minutes');
//     let inputSeconds = document.getElementById('seconds');

//     let buttons = document.querySelectorAll('input[type=button]')

//     for (button of buttons) {
//         button.addEventListener('click', (e) => {
//             if (e.target.id === 'daysBtn') {
//                 inputHours.value = Number(inputDays.value) * 24;
//                 inputMinutes.value = Number(inputDays.value) * 1440;
//                 inputSeconds.value = Number(inputDays.value) * 86400;

//             } else if (e.target.id === 'hoursBtn') {
//                 inputDays.value = Number(inputHours.value) / 24;
//                 inputMinutes.value = Number(inputHours.value) * 60;
//                 inputSeconds.value = Number(inputHours.value) * 3600;

//             } else if (e.target.id === 'minutesBtn') {
//                 inputDays.value = Number(inputMinutes.value) / 1440;
//                 inputHours.value = Number(inputMinutes.value) / 60;
//                 inputSeconds.value = Number(inputMinutes.value) * 60;

//             } else if (e.target.id === 'secondsBtn') {
//                 inputDays.value = Number(inputSeconds.value) / 86400;
//                 inputHours.value = Number(inputSeconds.value) / 3600;
//                 inputMinutes.value = Number(inputSeconds.value) / 60;

//             }
//         }
//         )
//     }
// }



function attachEventsListeners() {

    let inputDays = document.getElementById('days');
    let inputHours = document.getElementById('hours');
    let inputMinutes = document.getElementById('minutes');
    let inputSeconds = document.getElementById('seconds');

    let rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };

    document.getElementById('daysBtn').addEventListener('click', onConvert);
    document.getElementById('hoursBtn').addEventListener('click', onConvert);
    document.getElementById('minutesBtn').addEventListener('click', onConvert);
    document.getElementById('secondsBtn').addEventListener('click', onConvert);

    function convert(value, units){
        let days = value / rations[units]

        return {
            days: days,
            hours: days * rations.hours,
            minutes: days* rations.minutes,
            seconds: days* rations.seconds,
        };

    }

    function onConvert(event) {
        let input = event.target.parentElement.querySelector('input[type="text"]');
        let time = convert(Number(input.value), input.id);

        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;

    };

}
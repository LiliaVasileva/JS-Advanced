function attachEventsListeners() {

    let inputDays = document.getElementById('days');
    let inputHours = document.getElementById('hours');
    let inputMinutes = document.getElementById('minutes');
    let inputSeconds = document.getElementById('seconds');

    let buttons = document.querySelectorAll('input[type=button]')

    for (button of buttons) {
        button.addEventListener('click', (e) => {
            if (e.target.id === 'daysBtn') {
                inputHours.value = Number(inputDays.value) * 24;
                inputMinutes.value = Number(inputDays.value) * 1440;
                inputSeconds.value = Number(inputDays.value) * 86400;

            } else if (e.target.id === 'hoursBtn') {
                inputDays.value = Number(inputHours.value) / 24;
                inputMinutes.value = Number(inputHours.value) * 60;
                inputSeconds.value = Number(inputHours.value) * 3600;

            } else if (e.target.id === 'minutesBtn') {
                inputDays.value = Number(inputMinutes.value) / 1440;
                inputHours.value = Number(inputMinutes.value) / 60;
                inputSeconds.value = Number(inputMinutes.value) * 60;

            } else if (e.target.id === 'secondsBtn') {
                inputDays.value = Number(inputSeconds.value) / 86400;
                inputHours.value = Number(inputSeconds.value) / 3600;
                inputMinutes.value = Number(inputSeconds.value) / 60;

            }
        }
        )
    }
}

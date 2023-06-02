// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const dataTimePic = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
            window.alert("Please choose a date in the future");
        } else {
            startBtn.disabled = false;
            dataTimePic.disabled = true;
        }
        
        
        startBtn.addEventListener('click', () => {
            startBtn.disabled = true;

            const interval = setInterval(updateInterval, 100);

            function updateInterval() {
                let delta = selectedDates[0].getTime() - new Date().getTime();
                if (delta <= 0) {
                    clearInterval(interval);
                } else {
                    const { days, hours, minutes, seconds } = convertMs(delta);
                    updateTimer(days, hours, minutes, seconds);
                }
            }


            function updateTimer(days, hours, minutes, seconds) {
                dataDays.textContent = padNumber(days);
                dataHours.textContent = padNumber(hours);
                dataMinutes.textContent = padNumber(minutes);
                dataSeconds.textContent = padNumber(seconds);
            }

            function padNumber(number) {
                return String(number).padStart(2, '0');
            }
        });
    },
};




let calendar = new flatpickr(dataTimePic, options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
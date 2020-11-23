
const days = document.querySelector('.value[data-value="days"]');
const hours = document.querySelector('.value[data-value="hours"]');
const mins = document.querySelector('.value[data-value="mins"]');
const secs = document.querySelector('.value[data-value="secs"]');

class CountdownTimer {
    constructor({ selector, targetDate, onTick }) {
        this.selector = selector;
        this.targetDate = targetDate;
        intervalId: null;
        this.onTick = onTick;
    }

    init() {
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    start() {
        const startDate = new Date(this.targetDate);

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startDate - currentTime;
            const time = this.getTimeComponents(deltaTime);
            this.onTick(time);
        }, 1000);
    }

    stop() {
        if (deltaTim < 0) {
            clearInterval(this.intervalId);
        }
    }
    pad(value) {
        return String(value).padStart(2, '0');
    }

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };

    }
}


const timer = new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Nov 28, 2020"),
    onTick: updateClockface,
});
function updateClockface(time) {
    days.textContent = `${time.days}`;
    hours.textContent = `${time.hours}`;
    mins.textContent = `${time.mins}`;
    secs.textContent = `${time.secs}`;
}

timer.start();











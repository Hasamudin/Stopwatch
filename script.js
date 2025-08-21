let startTime = 0;
let stopTime = 0;
let timerInterval;
let running = false;

let display = document.getElementById("display");
let startstop = document.getElementById("startstop");
let reset = document.getElementById("reset");

startstop.addEventListener("click", () => {
    if (!running) {
        startstop.textContent = "Stop";
        startTime = Date.now() - stopTime;
        timerInterval = setInterval(updateDisplay, 10);
        running = true;
    } else {
        startstop.textContent = "Start";
        clearInterval(timerInterval);
        running = false;
    }
});

reset.addEventListener("click", () => {
    clearInterval(timerInterval);
    running = false;
    startTime = 0;
    stopTime = 0;
    display.textContent = "00:00:00:000";
    startstop.textContent = "Start";
});

function updateDisplay() {
    stopTime = Date.now() - startTime;
    display.textContent = formatTime(stopTime);
}

function formatTime(time) {
    const milliseconds = Math.floor(time % 1000);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    return (
        (hours ? String(hours).padStart(2, "0") + ":" : "") +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0") + ":" +
        String(milliseconds).padStart(3, "0")
    );
}

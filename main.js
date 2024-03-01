// Get the start button and timer elements
var startButton = document.getElementById('start');
var workMinutes = document.getElementById('w_minutes');
var workSeconds = document.getElementById('w_seconds');

// Initialize timer variables
var timerInterval;
var isTimerRunning = false;

// Add event listener to the start button
startButton.addEventListener('click', function() {
    if (isTimerRunning) {
        // If the timer is running, pause it and change the button text to 'Start'
        clearInterval(timerInterval);
        startButton.textContent = 'Start';
    } else {
        // If the timer is not running, start it and change the button text to 'Pause'
        startButton.textContent = 'Pause';
        timerInterval = setInterval(function() {
            // Update the timer every second
            var minutes = parseInt(workMinutes.textContent);
            var seconds = parseInt(workSeconds.textContent);
            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
            }
            if (minutes < 0) {
                // Stop the timer when it reaches 0
                clearInterval(timerInterval);
                startButton.textContent = 'Start';
            } else {
                // Update the timer display
                workMinutes.textContent = minutes.toString().padStart(2, '0');
                workSeconds.textContent = seconds.toString().padStart(2, '0');
            }
        }, 1000);
    }
    // Toggle the timer running state
    isTimerRunning = !isTimerRunning;
});

let startTime = 0;
let interval;
let elapsed = 0;
let running = false;

// Function to format time into HH:MM:SS
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

// Start the stopwatch
function startStopwatch() {
  if (!running) {
    startTime = Date.now() - elapsed; // Resume from where paused
    interval = setInterval(() => {
      elapsed = Date.now() - startTime;
      document.getElementById("display").textContent = formatTime(elapsed);
    }, 1000); // Update every second
    running = true;
  }
}

// Pause the stopwatch
function pauseStopwatch() {
  if (running) {
    clearInterval(interval); // Stops the interval
    running = false;
  }
}

// Reset everything
function resetStopwatch() {
  clearInterval(interval); // Stop interval
  elapsed = 0;
  running = false;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = ""; // Clear lap list
}

// Record current time as a lap
function recordLap() {
  if (running) {
    const lapTime = formatTime(elapsed);
    const lapItem = document.createElement("li"); // Create new list item
    lapItem.textContent = `Lap - ${lapTime}`;
    document.getElementById("laps").appendChild(lapItem); // Add to lap list
  }
}

function updateTime() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    const timeElement = document.getElementById("time");
    timeElement.innerText = timeString;
}

setInterval(updateTime, 1000);
// script.js

// Function to display current date and time in UTC
function displayDateTime() {
    const now = new Date();
    const utcDateTime = now.toUTCString(); // Convert to UTC
    const formattedDateTime = utcDateTime.replace(/ GMT$/, ''); // Remove GMT part
    document.getElementById('dateTime').innerText = formattedDateTime;
}

// Function to initialize the interactive features
function init() {
    displayDateTime(); // Display current date and time
}

// Run the initialization function when the window loads
window.onload = init;
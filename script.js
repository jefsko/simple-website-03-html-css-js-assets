/* 
This file adds behavior to the web page using JavaScript.
In this example, it shows the current time when the button is clicked.
*/

// This function runs when the button is clicked
function showTime() {

    // Get the current date and time
    const now = new Date();

    // Convert the time to a readable format
    const timeString = now.toLocaleTimeString();

    // Find the paragraph where we want to display the time
    const display = document.getElementById("time-display");

    // Update the text on the page
    display.textContent = "Current time: " + timeString;
}

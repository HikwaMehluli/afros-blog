document.addEventListener("DOMContentLoaded", function () {
    'use strict';

    // Get the Current Hour of User's Device
    let hr = new Date().getHours();

    // Get the "Greet User" element
    let welcome = document.getElementById("greet-user");

    // Set the greeting based on the hour range
    if (hr >= 1 && hr <= 5) {
        welcome.innerHTML = "Night Owl Reading!";
    } else if (hr >= 6 && hr <= 11) {
        welcome.innerHTML = "Good morning!";
    } else if (hr >= 12 && hr <= 16) {
        welcome.innerHTML = "Good Afternoon!";
    } else {
        welcome.innerHTML = "Good Evening!";
    }
});
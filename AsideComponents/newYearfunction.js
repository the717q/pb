export default function countdownToNewYear(header) {
    var now = new Date();
    var newYearDate = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0); // January 1st of next year

    var countdownInterval = setInterval(function() {
        var currentTime = new Date();
        var timeRemaining = newYearDate - currentTime;
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        header.innerHTML = "Time until New Year: " + '<span>' + days.toString().padStart(2, '0') + ' Days ' + '(' + days.toString().padStart(2, '0') + ':' + hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0') + ')' + '</span>' ;
        

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            header.innerHTML = "Happy New Year!";
        }
    }, 1000); // Update every 1000 milliseconds (1 second)
}

// Call the function to start the countdown


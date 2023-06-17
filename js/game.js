// Get the pipe, hole and gyro elements
var pipe = document.getElementById('pipe');
var pipeDown = document.getElementById('pipe-up');

var gyro = document.getElementById('gyro');
var up = 0;
var counter = 0;




pipe.addEventListener('animationiteration', () => {
    var randomPipeUp = ((Math.random() * 150) + 250);
    pipe.style.height = randomPipeUp + 'px';
    counter++;
});


var randomPipeUp = 0;
// Set an interval to simulate gravity on the gyro
setInterval(function () {
    // Get the current 'top' style value of the gyro
    var gyroTop = parseInt(window.getComputedStyle(gyro).getPropertyValue('top'));
    // If not jumping, make the gyro fall (increase 'top' value)
    if (up == 0) {
        gyro.style.top = (gyroTop + 3) + 'px';
    }
    // Get the current 'left' and 'top' style value of the pipe and hole
    var pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue('left'));
    var pipeDownLeft = parseInt(window.getComputedStyle(pipeDown).getPropertyValue('left'));
    var pipeDownHeight = parseInt(window.getComputedStyle(pipeDown).getPropertyValue('top'));
    // Collision detection: Check if gyro hits the ground or enters the area of the pipe where the hole is not present
    if ((gyroTop > 480) || ((pipeLeft < 20) && (pipeLeft > - 50) && (gyroTop < randomPipeUp) || (pipeDownLeft < 20 ) && (pipeDownLeft > -50) && (pipeDownHeight > gyroTop))) {
        alert('Game over! u scored = ' + (counter - 1)); // If collision is detected, end the game and show the score
        gyro.style.top = 250 + 'px';  // Reset gyro position
        counter = 0; // Reset the counter
    }
}, 10);



// Function to make the gyro jump
function fly() {
    up = 1;
    upCount = 0;
    // Set an interval to make the gyro move upwards for a while when the jump function is triggered
    var flyInterval = setInterval(function () {
        var gyroTop = parseInt(window.getComputedStyle(gyro).getPropertyValue('top'));
        // Only allow the gyro to move upwards if it's not already at the top of the screen and upCount is less than 15
        if ((gyroTop > 10) && (upCount < 15)) {
            gyro.style.top = (gyroTop - 3) + 'px';
        }
        // After 20 iterations, stop making the gyro jump and fall down again
        if (upCount > 20) {
            clearInterval(flyInterval);
            up = 0;
            upCount = 0;
        }
        upCount++;
    }, 10);
}

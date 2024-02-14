function checkAnswer(selectedOption) {
    const correctOption = document.getElementById("option2"); // Change this to the correct option
    if (selectedOption === correctOption) {
        startCelebration();
    }
}

function startCelebration() {
    confetti.start();
    setTimeout(() => {
        confetti.stop();
        displayBirthdayMessage();
    }, 3000); // Adjust duration of confetti before displaying message
}

function displayBirthdayMessage() {
    const container = document.querySelector(".container");
    container.innerHTML = `
        <h1>Happy Birthday Mom!</h1>
        <p>Thank you for being the best mom ever!</p>
        <img src="balloons.gif" alt="Balloons" width="200">
        <audio autoplay>
            <source src="happy_birthday.mp3" type="audio/mpeg">
        </audio>
    `;
}

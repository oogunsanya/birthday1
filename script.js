function checkAnswer(selectedOption) {
    const correctOption = document.querySelectorAll('li')[0]; // Change this to the correct option
    if (selectedOption === correctOption) {
        startCelebration();
    }
}

function startCelebration() {
    const audio = document.getElementById('birthday-audio');
    const canvas = document.getElementById('confetti-canvas');
    const container = document.querySelector('.container');

    audio.play();
    
    confetti.create(canvas, {
        resize: true,
        useWorker: true
    })({ particleCount: 200, spread: 200 });
    
    setTimeout(() => {
        displayBirthdayMessage(container);
    }, 3000); // Adjust duration of confetti before displaying message
}

function displayBirthdayMessage(container) {
    container.innerHTML = `
        <h1>Happy Birthday Mom!</h1>
        <p>Thank you for being the best mom ever!</p>
        <img src="balloons.gif" alt="Balloons" width="200">
    `;
}

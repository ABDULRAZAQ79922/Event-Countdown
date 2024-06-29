document.addEventListener('DOMContentLoaded', function () {
    const countdownDisplay = document.getElementById('countdownDisplay');
    let countdownValue = 10;
  
    const countdownInterval = setInterval(() => {
      countdownValue--;
      countdownDisplay.textContent = `Countdown: ${countdownValue}`;
  
      if (countdownValue <= 0) {
        clearInterval(countdownInterval);
        explodeConfetti();
      }
    }, 1000);
  
    function explodeConfetti() {
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
      });
      countdownDisplay.textContent = 'Countdown Complete!';
    }
  });
  
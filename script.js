function checkSpeed() {
    const speedInput = document.getElementById('speedInput');
    const outputDiv = document.getElementById('output');
  
    const speed = parseFloat(speedInput.value);
  
    if (isNaN(speed)) {
      outputDiv.textContent = 'Please enter a valid speed.';
      return;
    }
  
    const speedLimit = 70;
    const demeritPointsPer5Km = 1;
    const excessSpeed = speed - speedLimit;
  
    if (excessSpeed <= 0) {
      outputDiv.textContent = 'Ok';
    } else {
      const demeritPoints = Math.floor(excessSpeed / 5) * demeritPointsPer5Km;
      if (demeritPoints > 12) {
        outputDiv.textContent = 'License suspended';
      } else {
        outputDiv.textContent = `Points: ${demeritPoints}`;
      }
    }
  }
  
  const checkSpeedButton = document.getElementById('checkSpeedButton');
  checkSpeedButton.addEventListener('click', checkSpeed);
  
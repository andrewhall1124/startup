const maxSpeedEl = document.querySelector(".max-speed");

function go(){
  countDown(5).then(() => {
    randomSpeeds(100);
  });

}

function countDown(numCount) {
  return new Promise((resolve) => {
    let count = numCount;
    const timer = setInterval(() => {
      maxSpeedEl.textContent = count;
      count--;
      if (count < 1) {
        clearInterval(timer);
        resolve();
      }
    }, 1000);
  });
}

function randomSpeeds(numSpeeds){
  let count = numSpeeds
  const timer = setInterval(() => {
    maxSpeedEl.textContent = getRandomSpeed();
    count--;
    if (count < 1) {
      clearInterval(timer);
      saveSpeed(maxSpeedEl.textContent);
    }
  }, 10);
}

function output(myOutput){
  maxSpeedEl.textContent = myOutput;
}

function getRandomSpeed(){
  return Math.round(Math.random()*100);
}

function getPlayerName() {
  return localStorage.getItem("username");
}

function saveSpeed(speed) {
  const userName = this.getPlayerName();
  let speeds = [];
  const speedsText = localStorage.getItem('speed');
  if (speedsText) {
    speeds = JSON.parse(speedsText);
  }
  speeds = this.updateScores(userName, speed, speeds);

  localStorage.setItem('speed', JSON.stringify(speeds));
}

function updateScores(userName, speed, speeds) {
  const date = new Date().toLocaleDateString();
  const newSpeed = { name: userName, speed: speed, date: date };

  let found = false;
  for (const [i, prevSpeed] of speeds.entries()) {
    if (speed > prevSpeed.speed) {
      speeds.splice(i, 0, newSpeed);
      found = true;
      break;
    }
  }

  if (!found) {
    speeds.push(newSpeed);
  }

  if (speeds.length > 10) {
    speeds.length = 10;
  }

  return speeds;
}
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
      localStorage.setItem("speed",maxSpeedEl.value);
    }
  }, 10);
}

function output(myOutput){
  maxSpeedEl.textContent = myOutput;
}

function getRandomSpeed(){
  return Math.round(Math.random()*100);
}
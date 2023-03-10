function loadHistory(){
  let speeds = [];
  const speedsText = localStorage.getItem("scores");
  speeds = JSON.parse(speedsText);
  console.log(speeds);

  const tableBodyEl = document.querySelector('#history');

  if (speeds.length) {
    for (const [i, speed] of speeds.entries()) {
      const positionTdEl = document.createElement('td');
      const scoreTdEl = document.createElement('td');
      const dateTdEl = document.createElement('td');

      positionTdEl.textContent = i + 1;
      scoreTdEl.textContent = speed.speed;
      dateTdEl.textContent = speed.date;

      const rowEl = document.createElement('tr');
      rowEl.appendChild(positionTdEl);
      rowEl.appendChild(scoreTdEl);
      rowEl.appendChild(dateTdEl);

      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
  }
}

loadHistory();

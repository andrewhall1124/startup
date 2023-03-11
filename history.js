function loadHistory(){
  let speeds = [];
  const speedsText = localStorage.getItem("speed");
  if(speedsText){
    speeds = JSON.parse(speedsText);
  }
  const tableBodyEl = document.querySelector('#history');

  if (speeds.length) {
    for (const [i, speed] of speeds.entries()) {
      const positionTdEl = document.createElement('td');
      const usernameTdEl = document.createElement("td");
      const speedTdEl = document.createElement('td');
      const dateTdEl = document.createElement('td');

      positionTdEl.textContent = i + 1;
      usernameTdEl.textContent = speed.name;
      speedTdEl.textContent = speed.speed  + " MPH";
      dateTdEl.textContent = speed.date;

      positionTdEl.className = "table-place";
      usernameTdEl.className = "table-name";
      speedTdEl.className = "table-speed";
      dateTdEl.className = "table-date";

      const rowEl = document.createElement('tr');
      rowEl.appendChild(positionTdEl);
      rowEl.appendChild(usernameTdEl);
      rowEl.appendChild(speedTdEl);
      rowEl.appendChild(dateTdEl);

      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
  }
  const numChildren = document.querySelectorAll('tr').length;
  for(i = numChildren; i > 6; i--){
    const rowEl = document.querySelector('#history');
    rowEl.removeChild(rowEl.lastElementChild);
  }
}

loadHistory();

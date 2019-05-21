'use strict';

const table = document.querySelector('table');
table.addEventListener('click', sortTable);

function sortTable(evnt) {
  const target = evnt.target;
  const index = target.cellIndex;
  const tbody = table.tBodies[0];
  const rowsArr = [].slice.call(tbody.rows);
  const type = target.classList[0];
  let compare;

  if (target.tagName !== 'TH') {
    return;
  }
  switch (type) {
    case 'number':
      compare = function(a, b) {
        return a.cells[index].innerHTML - b.cells[index].innerHTML;
      };
      break;
    case 'string':
      compare = function(a, b) {
        if (a.cells[index].innerHTML[0] > b.cells[index].innerHTML[0]) {
          return 1;
        } else {
          return -1;
        };
      };
  }
  rowsArr.sort(compare);
  table.removeChild(tbody);
  for (let i = 0; i < rowsArr.length; i++) {
    tbody.appendChild(rowsArr[i]);
  }
  table.appendChild(tbody);
}

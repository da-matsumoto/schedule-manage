const weeks = ['日', '月', '火', '水', '木', '金', '土'];
const year = 2022;

let scheduleHtml = '';
let daycount;
let monthCount;

scheduleHtml += '<table>';

// generate months
for (monthCount = 1; monthCount <= 12; monthCount++) {
  const endDate = new Date(year, monthCount, 0);
  const endDayCount = endDate.getDate();

  if (monthCount === 1) {
    scheduleHtml += '<tr>';
  }
  scheduleHtml += '<td colspan="' + endDayCount + '">' + monthCount + '</td>';
  if (monthCount === 12) {
    scheduleHtml += '</tr>';
  }
}

// generate weeks
for (monthCount = 1; monthCount <= 12; monthCount++) {
  const endDate = new Date(year, monthCount, 0);
  const endDayCount = endDate.getDate();
  const startDate = new Date(year, monthCount - 1, 1);
  const startWeek = startDate.getDay();

  if (monthCount === 1) {
    scheduleHtml += '<tr class="week">';
  }
  for (daycount = 0; daycount < endDayCount; daycount++) {
    const weekCount = (startWeek + daycount) % 7;
    scheduleHtml += '<td>' + weeks[weekCount] + '</td>';
  }
  if (monthCount === 12) {
    scheduleHtml += '</tr>';
  }
}

// generate days
for (monthCount = 1; monthCount <= 12; monthCount++) {
  const endDate = new Date(year, monthCount, 0);
  const endDayCount = endDate.getDate();

  if (monthCount === 1) {
    scheduleHtml += '<tr>';
  }
  for (daycount = 1; daycount <= endDayCount; daycount++) {
    scheduleHtml += '<td>' + daycount + '</td>';
  }
  if (monthCount === 12) {
    scheduleHtml += '</tr>';
  }
}



// scheduleHtml += '</table>';

document.querySelector('#schedule').innerHTML = scheduleHtml;
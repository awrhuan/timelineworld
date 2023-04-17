function convertYear(yearString) {
  const isBC = yearString.includes("a.C.");
  const numericYear = parseInt(yearString.replace(/\./g, '').replace(/[^\d]/g, ''), 10);

  return isBC ? -numericYear : numericYear;
}

function sortTimeline(ascending) {
  fetch('timeline.json')
    .then(response => response.json())
    .then(data => {
      data.sort((a, b) => {
        const aYear = convertYear(a.year);
        const bYear = convertYear(b.year);
        return ascending ? aYear - bYear : bYear - aYear;
      });

      renderTimeline(data);
    });
}

function renderTimeline(data) {
  const timeline = document.querySelector('.timeline');
  timeline.innerHTML = '';

  data.forEach((item, index) => {
    const li = document.createElement('li');

    const directionWrapper = document.createElement('div');
    const direction = index % 2 === 0 ? 'direction-r' : 'direction-l';
    directionWrapper.classList.add(direction);
    li.appendChild(directionWrapper);

    const flagWrapper = document.createElement('div');
    flagWrapper.classList.add('flag-wrapper');
    directionWrapper.appendChild(flagWrapper);

    const hexa = document.createElement('span');
    hexa.classList.add('hexa');
    flagWrapper.appendChild(hexa);

    const flag = document.createElement('span');
    flag.classList.add('flag');
    flag.innerHTML = item.title;
    flagWrapper.appendChild(flag);

    const timeWrapper = document.createElement('span');
    timeWrapper.classList.add('time-wrapper');
    flagWrapper.appendChild(timeWrapper);

    const time = document.createElement('span');
    time.classList.add('time');
    time.innerHTML = item.year;
    timeWrapper.appendChild(time);

    timeline.appendChild(li);
  });
}

sortTimeline(true); // Carrega a linha do tempo em ordem crescente por padrão

function sortData(data, ascending) {
  data.sort((a, b) => {
    const aYear = convertYear(a.year);
    const bYear = convertYear(b.year);
    return ascending ? aYear - bYear : bYear - aYear;
  });
}

function filterTimeline(searchQuery) {
  fetch('timeline.json')
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
      sortData(filteredData, true); // ordena em ordem crescente apenas os dados filtrados
      renderTimeline(filteredData);
    });
}


document.getElementById('searchInput').addEventListener('input', (event) => {
  filterTimeline(event.target.value);
});


document.getElementById('sortButton').addEventListener('click', () => {
  const currentOrder = document.getElementById('sortButton').getAttribute('data-order');
  const newOrder = currentOrder === 'asc' ? 'desc' : 'asc';

  document.getElementById('sortButton').setAttribute('data-order', newOrder);
  sortTimeline(newOrder === 'asc');
});

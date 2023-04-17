fetch('timeline.json')
.then(response => response.json())
.then(data => {
    const timeline = document.querySelector('.timeline');

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
});
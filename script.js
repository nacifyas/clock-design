setInterval(setClock, 1000)

const hourHand = document.querySelector('[hour-hand]');
const minuteHand = document.querySelector('[minute-hand]');
const secondHand = document.querySelector('[second-hand]');

function setClock() {
    const currentDate = new Date();
    
    // Ratios

    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    
    const secondAngle = secondRatio * 360;
    let minuteAngle = minuteRatio * (-127) - 26;
    let hourAngle = hourRatio * (121) + 29;

    // Checking part:

    // ToDo

    // Asignation part:

    setRotation(secondHand, secondAngle);
    setRotation(minuteHand, minuteAngle);
    setRotation(hourHand, hourAngle);
}

function setRotation(element, rotation) {
    element.style.setProperty('--rotation', rotation);
}

setClock();
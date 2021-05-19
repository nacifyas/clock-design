setInterval(setClock, 500)

const hourHand = document.querySelector('[hour-hand]');
const minuteHand = document.querySelector('[minute-hand]');
const secondHand = document.querySelector('[second-hand]');

function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12; 

    setRotation(secondHand, secondRatio)
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotation) {
    element.style.setProperty('--rotation', rotation * 360);
}

setClock();
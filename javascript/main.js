'use strict';

// VARIABLES

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// FONCTIONS

const setDate = function () {
    //récupération de l'heure
    const now = new Date();

    // secondes
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    // condition pour éviter l'animation qui retourne en arrière quand l'aiguille est sur 0
    if (secondsDegrees === 90) {
        secondHand.style.transition = 'all 0s';
    } else {
        secondHand.style.transition = 'all 0.05s';
        secondHand.style.transitionTimingFunction = 'cubic-bezier(0.1, 2.38, 0.8,-0.25)';
    }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // minutes
    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;
    if (minutesDegrees === 90) {
        minHand.style.transition = 'all 0s';
    } else {
        minHand.style.transition = 'all 0.05s';
    }
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // heures
    const hour = now.getHours();
    const hourDegrees = (hour / 12) * 360 + 90;
    if (hourDegrees === 90) {
        hourHand.style.transition = 'all 0s';
    } else {
        hourHand.style.transition = 'all 0.05s';
    }
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setDate, 1000);

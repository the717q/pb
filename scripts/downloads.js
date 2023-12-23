import countdownToNewYear from '../AsideComponents/newYearfunction.js';

const timer = document.getElementById('timer');
const linksSection = document.querySelector(".section-links");
const detailsSection = document.querySelector('.section-details');
const countDown = document.getElementById('countdown');


countdownToNewYear(countDown);

function updateTime() {
    const now = new Date();
    const day = now.getUTCDate();
    const year = now.getFullYear();
    const month = now.getUTCMonth() + 1
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the string with leading zeroes
    const clockStr = `Portugal, Lisbon ${day.toString()}-${month.toString()}-${year.toString()} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    timer.innerText = clockStr;
};

updateTime();
setInterval(updateTime, 1000);

const date = `<h3 style="margin: 0;">Local path and Website Details</h3><p style="margin-top: 0">Website Hosted at ${window.location.hostname}<br>Local Path: ${window.location.href}</p>`

detailsSection.insertAdjacentHTML('beforeend', date);
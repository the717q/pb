import countdownToNewYear from '../AsideComponents/newYearfunction.js';
import updateTime from '../AsideComponents/updateTime.js';

const projects = document.querySelector('.section-projects');
const countTimer = document.getElementById('timer');
const detailsSection = document.querySelector('.section-details');
const countDown = document.getElementById('countdown');

countdownToNewYear(countDown);

updateTime(countTimer);
    setInterval(function () {
      updateTime(countTimer);
    }, 1000);


const date = `<h3 style="margin: 0;">Local path and Website Details</h3><p style="margin-top: 0">Website Hosted at ${window.location.hostname}<br>Local Path: ${window.location.href}</p>`

detailsSection.insertAdjacentHTML('beforeend', date);
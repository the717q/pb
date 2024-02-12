import {apiData} from '../data/apiData.js';
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

const elements = apiData.map((element) => {
    return (
        `
        <section class="project">
            <h2 class="repo-name"><a href="${element[4]}" target="_blank">${element[1][0].toUpperCase() + element[1].slice(1)}</a></h2>
                <p><b>Data of creation:</b> ${element[2]}</p>
                <p><b>ID:</b> ${element[0]}</p>
                <p><b>Repository: </b>${element[3][0].toUpperCase() + element[3].slice(1)}</p>
            <hr>
        </section>`
    )
});

projects.insertAdjacentHTML('beforeend', elements.join(''));

const date = `<h3 style="margin: 0;">Local path and Website Details</h3><p style="margin-top: 0">Website Hosted at ${window.location.hostname}<br>Local Path: ${window.location.href}</p>`

detailsSection.insertAdjacentHTML('beforeend', date);


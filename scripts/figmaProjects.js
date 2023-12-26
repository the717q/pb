import countdownToNewYear from '../AsideComponents/newYearfunction.js';
import updateTime from '../AsideComponents/updateTime.js';

const countTimer = document.getElementById('timer');
const linksSection = document.querySelector(".section-links");
const detailsSection = document.querySelector('.section-details');
const countDown = document.getElementById('countdown');

countdownToNewYear(countDown);

updateTime(countTimer);
    setInterval(function () {
      updateTime(countTimer);
    }, 1000);

const figmaAPI = async (endpoint) => {
    const apikey = 'figd_mqcewIMfEhivtwOiu2FZVly-UARVUqhRmzuWsJa5';
    const request = await fetch(`https://api.figma.com/v1/${endpoint}/`, {
        method: 'GET',
        headers: {
            'X-Figma-Token': apikey,
        },
    })
    return request.json()
};

figmaAPI('me').then((response) => {
    aboutSection.insertAdjacentHTML('beforeend',
        `<p class="about"><b>Handler</b>: ${response.handle}</p>
        <p class="portfolio"><b>Email</b>: ${response.email}</p> 
        <p class="link"><b>Figma user ID</b>: ${response.id}</p>
        `
    )
}).catch((error) => {
    console.log(error)
});

const date = `<h3 style="margin: 0;">Local path and Website Details</h3><p style="margin-top: 0">Website Hosted at ${window.location.hostname}<br>Local Path: ${window.location.href}</p>`;

detailsSection.insertAdjacentHTML('beforeend', date);
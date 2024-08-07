import { experiences } from '../data/JobExperiencesData.js';
import countdownToNewYear from '../AsideComponents/newYearfunction.js';
import updateTime from '../AsideComponents/updateTime.js';
const countTimer = document.getElementById('timer');
const detailsSection = document.querySelector('.section-details');
const certificatesSection = document.querySelector('.section-certificates');
const countDown = document.getElementById('countdown');

countdownToNewYear(countDown);

updateTime(countTimer);
    setInterval(function () {
      updateTime(countTimer);
    }, 1000);

const filterExperiences = function(data, name) {
    return data.filter((certificate) => certificate.CompanyName === name)
};

const alticeExperience = filterExperiences(experiences, 'Altice Portugal')
const grupo8Experience = filterExperiences(experiences, 'Grupo8');
const BrainnestExperience = filterExperiences(experiences, 'Brainnest');
const HoteisRealExperience = filterExperiences(experiences, 'Hoteis Real Group');


const createElements = function(data) {
    return data.map((experiences) => {
        return (`<div class="experience-details"><h2>Company: <u>${experiences.CompanyName}</u></h2>
                    <p class="paragraph">Type: <b>${experiences.Role[0].toUpperCase() + experiences.Role.slice(1)}</b></p>
                    <p class="paragraph">Starting Date: <b>${experiences.Date.Beggining}</b></p>
                    <p class="paragraph">Ending Date: <b>${experiences.Date.End ? experiences.Date.End : 'Current'}</b></p>
                    <p>- ${experiences.Description.map((element) => element).join('<br>-')}</p>
                    </div><hr>`)
    }
)};

certificatesSection.insertAdjacentHTML('beforeend', createElements(alticeExperience).join(''));
certificatesSection.insertAdjacentHTML('beforeend', createElements(grupo8Experience).join(''));
certificatesSection.insertAdjacentHTML('beforeend', createElements(BrainnestExperience).join(''));
certificatesSection.insertAdjacentHTML('beforeend', createElements(HoteisRealExperience).join(''))  ;



const date = `<h3 style="margin: 0;">Local path and Website Details</h3><p style="margin-top: 0">Website Hosted at ${window.location.hostname}<br>Local Path: ${window.location.href}</p>`

detailsSection.insertAdjacentHTML('beforeend', date);


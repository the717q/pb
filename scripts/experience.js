import { experiences } from '../data/JobExperiencesData.js'

const certificatesSection = document.querySelector('.section-certificates')
const detailsSection = document.querySelector('.section-details')

const timer = document.getElementById('timer')

function updateTime() {
    const now = new Date();
    const day = now.getUTCDate()
    const year = now.getFullYear();
    const month = now.getUTCMonth() + 1
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the string with leading zeroes
    const clockStr = `${day.toString()}-${month.toString()}-${year.toString()} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    timer.innerText = clockStr;
}

updateTime();
setInterval(updateTime, 1000);

const filterExperiences = function(data, name) {
    return data.filter((certificate) => certificate.CompanyName === name)
}

const grupo8Experience = filterExperiences(experiences, 'Grupo8')
const BrainnestExperience = filterExperiences(experiences, 'Brainnest')
const HoteisRealExperience = filterExperiences(experiences, 'Hoteis Real Group')


const createElements = function(data) {
    return data.map((experiences) => {
        return (`<div class="experience-details"><h2>Company: <u>${experiences.CompanyName}</u></h2>
                    <p class="paragraph">Type: <b>${experiences.Role[0].toUpperCase() + experiences.Role.slice(1)}</b></p>
                    <p class="paragraph">Starting Date: <b>${experiences.Date.Beggining}</b></p>
                    <p class="paragraph">Date of Completion: <b>${experiences.Date.End}</b></p>
                    <p>- ${experiences.Description.map((element) => element).join('<br>-')}</p>
                    </div><hr>`)
    }
)}


certificatesSection.insertAdjacentHTML('beforeend', createElements(grupo8Experience).join(''))
certificatesSection.insertAdjacentHTML('beforeend', createElements(BrainnestExperience).join(''))
certificatesSection.insertAdjacentHTML('beforeend', createElements(HoteisRealExperience).join(''))  



const date = `<h3 style="margin: 0;">Details</h3><p style="margin-top: 0">Website Hosted at ${window.location.hostname}<br>Local Path: ${window.location.href}</p>`

detailsSection.insertAdjacentHTML('beforeend', date)


import { links } from "./data/links.js";

const timer = document.getElementById('timer')
const weathertemperature = document.getElementById('weather-temperature')
const weatherhumidity = document.getElementById('weather-humidity')
const location = document.getElementById('location')
const timezone = document.getElementById('timezone')
const linksSection = document.querySelector(".section-links");
const detailsSection = document.querySelector('.section-details')


function updateTime() {
    const now = new Date();
    const day = now.getUTCDate()
    const year = now.getFullYear();
    const month = now.getUTCMonth() + 1
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the string with leading zeroes
    const clockStr = `Portugal, Lisbon ${day.toString()}-${month.toString()}-${year.toString()} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    timer.innerText = clockStr;
}

updateTime();
setInterval(updateTime, 1000);


const elements = links.map((links) => {
  const keys = Object.keys(links);
  return `<div class="links"><p class=${keys[0]}>${links.website}</p>
    <a href=${links.url} class=${keys[1]} target="_blank"">${links.userName} </a></div>`
});

const date = `<h3>Local path and Website Details</h3><p>Website Hosted at ${window.location.hostname}<br>Local Path: ${window.location.href}</p>`

linksSection.insertAdjacentHTML("beforeend", elements.join(" "));
linksSection.insertAdjacentHTML('beforeend', '<hr>')
detailsSection.insertAdjacentHTML('beforeend', date)


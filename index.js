import { links } from "./data/links.js";
import countdownToNewYear from "./AsideComponents/newYearfunction.js";
import renderOnload from './AsideComponents/renderOnLoad.js';
import updateTime from './AsideComponents/updateTime.js'

const countTimer = document.getElementById("timer");
const linksSection = document.querySelector(".section-links");
const detailsSection = document.querySelector(".section-details");
const countDown = document.getElementById("countdown");

countdownToNewYear(countDown);

updateTime(countTimer);
    setInterval(function () {
      updateTime(countTimer);
    }, 1000);

const elements = links.map((links) => {
  const keys = Object.keys(links)
  return `<div class="links"><p class=${keys[0]}>${links.website}</p>
    <a href=${links.url} class=${keys[1]} target="_blank"">${links.userName} </a></div>`
})

const date = `<h3>Local path and Website Details</h3><p>Website Hosted at ${window.location.hostname}<br>Local Path: ${window.location.href}</p>`

linksSection.insertAdjacentHTML("beforeend", elements.join(" "))
linksSection.insertAdjacentHTML("beforeend", "<hr>")
detailsSection.insertAdjacentHTML("beforeend", date)

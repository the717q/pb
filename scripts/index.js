import { links } from "../data/links.js";

const linksSection = document.querySelector(".section-links");
const articleContainer = document.querySelector(".article-container");

const elements = links.map((links) => {
  const keys = Object.keys(links);
  return `<div class="links"><p class=${keys[0]}>${links.website}</p>
    <a href=${links.url} class=${keys[1]} target="_blank"">${links.userName} </a></div>`
});

const date = `<h3 style="margin: 0;">Details</h3><p style="margin-top: 0">Website Hosted at ${window.location.hostname}<br>Local Path: ${window.location.href}</p>`

linksSection.insertAdjacentHTML("beforeend", elements.join(" "));

linksSection.insertAdjacentHTML('afterend', date)

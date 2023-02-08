import { links } from "../data/links.js";


const linksSection = document.querySelector(".section-links");
const articleContainer = document.querySelector(".article-container");

const elements = links.map((links) => {
  const keys = Object.keys(links);
  return `<div class="links"><p class=${keys[0]}>${links.website}</p>
    <a href=${links.url} class=${keys[1]} target="_blank"">${links.userName} </a></div>`
});

console.log(linksSection)
const date = `<p>Website Hosted at ${window.location.hostname}<br>Local Path: ${window.location.href}</p>`


linksSection.insertAdjacentHTML("beforeend", elements.join(" "));

linksSection.insertAdjacentHTML('afterend', date)

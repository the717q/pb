import {blogs} from "../data/blogsData.js";
import countdownToNewYear from '../AsideComponents/newYearfunction.js';
import updateTime from '../AsideComponents/updateTime.js';
const detailsSection = document.querySelector(".section-details");

const blogsSection = document.querySelector('.section-blog');
const blogsmenu = document.querySelector('.blogs-menu');
const countTimer = document.getElementById('timer');
const countDown = document.getElementById('countdown');


const date = `<h3>Local path and Website Details</h3><p>Website Hosted at ${window.location.hostname}<br>Local Path: ${window.location.href}</p>`

detailsSection.insertAdjacentHTML("beforeend", date)

countdownToNewYear(countDown);

updateTime(countTimer);
    setInterval(function () {
      updateTime(countTimer);
    }, 1000);

    console.log(blogs[0].content.slice(0, 10))

const createElements = function(data) {
    
    return data.map((blogs) => {
        return (`<div class="certification-details"id=${blogs.name} ><h1>Name: ${blogs.name}</h1>
                    <h2 style="text-decoration: underline">${blogs.header}</h2>
                    <p>Date of Creation: ${blogs.dataofCreation}</p>
                    <h3>Keywords: ${blogs.keywords}</h3>
                    <a href= ${blogs.path}>Read More</a>
                </div><hr>`)
    }
)};

const createMenuElements = function(data) {
    return data.map((blogs) => {
        return (`<a href=#${blogs.name} class="blog-items">${blogs.name}</a>
        `)
    })
}

blogsmenu.insertAdjacentHTML('beforeend', createMenuElements(blogs).join(''))
blogsSection.insertAdjacentHTML('beforeend', createElements(blogs).join(''));


const menus = document.getElementsByClassName('blog-items');

const elementsArray = Array.from(menus);

elementsArray.map((items) => {
    if(items.innerHTML === 'Javascript') {
        items.style.color = '#F2AF13'
    }
    else if(items.innerHTML === 'Node.js') {
        items.style.color = '#04AA6D'
    }
});


console.log(arguments)
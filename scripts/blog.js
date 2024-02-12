import {blogs} from "../data/blogsData.js";

const blogsSection = document.querySelector('.section-blog')
const blogsmenu = document.querySelector('.blogs-menu')

const createElements = function(data) {
    return data.map((blogs) => {
        console.log(blogs.content.slice(0, 55))
        return (`<div class="certification-details"><h1>Name: ${blogs.name}</h1>
                    <h2>${blogs.content.slice(0, 55)}</h2>
                    <p class="paragraph">${blogs.content}</p>
                    <p>Date of Completion: ${blogs.dataofCreation}</p>
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


const menus = document.getElementsByClassName('blog-items')

const elementsArray = Array.from(menus);

console.log(elementsArray)

elementsArray.map((items) => {
    console.log(items.innerHTML)
    console.log(items)
    if(items.innerHTML === 'Javascript') {
        items.style.color = '#F2AF13'
    }
})
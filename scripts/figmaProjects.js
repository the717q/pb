const detailsSection = document.querySelector('.section-details')
const aboutSection = document.querySelector('.section-about')


const figmaAPI = async (endpoint) => {
    const apikey = 'figd_mqcewIMfEhivtwOiu2FZVly-UARVUqhRmzuWsJa5'
    const request = await fetch(`https://api.figma.com/v1/${endpoint}/`, {
        method: 'GET',
        headers: {
            'X-Figma-Token': apikey,
        },
    })
    const response = request.json()
    return response
}

figmaAPI('me').then((response) => {
    aboutSection.insertAdjacentHTML('beforeend',
        `<p class="about">${response.handle}</p>
        <p class="portfolio">${response.email}</p> 
        <p class="link">${response.id}</p>
        <hr>`
    )
}).catch((error) => {
    console.log(error)
})

const date = `<h3 style="margin: 0;">Details</h3><p style="margin-top: 0">Website Hosted at ${window.location.hostname}<br>Local Path: ${window.location.href}</p>`

detailsSection.insertAdjacentHTML('beforeend', date)
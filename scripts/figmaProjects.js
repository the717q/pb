const detailsSection = document.querySelector('.section-details')
const aboutSection = document.querySelector('.section-about')

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


const figmaAPI = async (endpoint) => {
    const apikey = 'figd_mqcewIMfEhivtwOiu2FZVly-UARVUqhRmzuWsJa5'
    const request = await fetch(`https://api.figma.com/v1/${endpoint}/`, {
        method: 'GET',
        headers: {
            'X-Figma-Token': apikey,
        },
    })
    return request.json()
}

figmaAPI('me').then((response) => {
    aboutSection.insertAdjacentHTML('beforeend',
        `<p class="about"><b>Handler</b>: ${response.handle}</p>
        <p class="portfolio"><b>Email</b>: ${response.email}</p> 
        <p class="link"><b>Figma user ID</b>: ${response.id}</p>
        `
    )
}).catch((error) => {
    console.log(error)
})

const date = `<h3 style="margin: 0;">Details</h3><p style="margin-top: 0">Website Hosted at ${window.location.hostname}<br>Local Path: ${window.location.href}</p>`

detailsSection.insertAdjacentHTML('beforeend', date)
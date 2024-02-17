const detailsSection = document.querySelector(".section-details");

const date = `<h3>Local path and Website Details</h3><p>Website Hosted at ${window.location.hostname}<br>Local Path: ${window.location.href}</p>`

detailsSection.insertAdjacentHTML("beforeend", date)

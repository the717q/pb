const detailsSection = document.querySelector(".section-details");

const date = `<h3>Local path and Website Details</h3><p>Website Hosted at ${window.location.hostname}<br>Local Path: ${window.location.href}</p>`

detailsSection.insertAdjacentHTML("beforeend", date)


console.log(document.querySelector(".slow-paragraph").textContent)

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.querySelector(".slow-paragraph").classList.remove(".slow-paragraph");
    }, 1000); // 1000 milliseconds = 1 second
  });


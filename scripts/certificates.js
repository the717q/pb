import { certificates } from "../data/certificatesData.js";

const certificatesSection = document.querySelector('.section-certificates')
const detailsSection = document.querySelector('.section-details')

const filterCertificates = function(data, type) {
    return data.filter((certificate) => certificate.type === type)
}

const ciscoCertificates = filterCertificates(certificates, 'cisco')
const linkedinCertificates = filterCertificates(certificates, 'linkedin')
const codecademyCertificates = filterCertificates(certificates, 'codecademy')
const EditCertificates = filterCertificates(certificates, 'EDIT - Disruptive Digital Education')
const brainnestCertificates = filterCertificates(certificates, 'brainnest')

const createElements = function(data) {
    return data.map((certificates) => {
        return (`<div class="certifica-details"><h2>Name: ${certificates.name}</h2>
                    <p class="paragraph">Type: <b>${certificates.type[0].toUpperCase() + certificates.type.slice(1)}</b></p> 
                    <p>Date of Completion: ${certificates.dateOfCompletion}</p>
                <h2></div><hr>`)
    }
)}

certificatesSection.insertAdjacentHTML('beforeend', createElements(ciscoCertificates).join(''))
certificatesSection.insertAdjacentHTML('beforeend', createElements(linkedinCertificates).join(''))
certificatesSection.insertAdjacentHTML('beforeend', createElements(codecademyCertificates).join(''))
certificatesSection.insertAdjacentHTML('beforeend', createElements(EditCertificates).join(''))
certificatesSection.insertAdjacentHTML('beforeend', createElements(brainnestCertificates).join(''))

const date = `<h2>Details</h2><p style="margin-top: 0">Website <b>Hosted</b> at ${window.location.hostname}<br>Local Path: ${window.location.href}</p>`

detailsSection.insertAdjacentHTML('beforeend', date)

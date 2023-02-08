import { certificates } from "../data/certificatesData.js";

console.log(certificates)

const certificatesSection = document.querySelector('.section-certificates')

const filterCertificates = function(data, type) {
    return data.filter((certificate) => certificate.type === type)
}

const linkedinCertificates = filterCertificates(certificates, 'linkedin')
const codecademyCertificates = filterCertificates(certificates, 'codecademy')
const EditCertificates = filterCertificates(certificates, 'EDIT')
const brainnestCertificates = filterCertificates(certificates, 'brainnest')

const createElements = function(data) {
    return data.map((certificates) => {
        return (`<h2>Name: ${certificates.name}</h2>
                    <p>Type: ${certificates.type}</p> 
                    <p>Date of Completion: ${certificates.dateOfCompletion}</p>
                <h2>`)
    }
    )}

certificatesSection.insertAdjacentHTML('beforeend', createElements(linkedinCertificates).join(''))
certificatesSection.insertAdjacentHTML('beforeend', createElements(codecademyCertificates).join(''))
certificatesSection.insertAdjacentHTML('beforeend', createElements(EditCertificates).join(''))
certificatesSection.insertAdjacentHTML('beforeend', createElements(brainnestCertificates).join(''))

const date = `<p>Website Hosted at ${window.location.hostname}<br>Local Path: ${window.location.href}</p>`

certificatesSection.insertAdjacentHTML('afterend', date)

const data = document.querySelector('.data-filtered')

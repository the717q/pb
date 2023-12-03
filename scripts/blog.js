import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { useEffect } from 'react';
import { BasicCard } from './BasicCard.js'

const linksSection = document.querySelector(".section-links");
const detailsSection = document.querySelector('.section-details')

const source = document.querySelector('#root')

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
    const clockStr = `Portugal, Lisbon ${day.toString()}-${month.toString()}-${year.toString()} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    timer.innerText = clockStr;
}

updateTime();
setInterval(updateTime, 1000);

function App() {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let url = 'https://dev.to/api/articles'

    function getSandboxes() {
      fetch(url).then((response) => {
        console.log(response)
        if(!response.ok) {
          setError(response.statusText)
        }
        else {
          return response.json()
        }
      }).then((data) => {
        console.log(data)
        setData(data)
        setError(null)
      }).catch((err) => {
        setError(err)
        setData(null)
      }).finally(() => {
        setloading(false)
      })
    }
    getSandboxes()
  }, [])

  const articlesArray = data?.map((article) => {
    return <BasicCard key={article.id}
    alt={article.alt}
    date={article.created_at}
    description={article.description}
    imgPath={article.cover_image}
    link="Read more"
    title={article.title}
    url={article.url}
    publicReactions={article.positive_reactions_count}
  />
  })

  if (!loading && !error) {
    return (
      <div className="App">
        <span class="dot"></span>
        <div className="articles">{data && articlesArray}</div>
      </div>
    );
  } else if (error) {
    return <div>There is a problem fetching the post data - {error}</div>;
  } else {
    return "Loading...";
  }
}

const root = createRoot(source);

root.render(<App />);

const date = `<h2>Details</h2><p>This Page is using the <strong>dev.to</strong> API</p><p style="margin-top: 0">Website <b>Hosted</b> at ${window.location.hostname}<br>Local Path: ${window.location.href}</p>`

detailsSection.insertAdjacentHTML('beforeend', date)

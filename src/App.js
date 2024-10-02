import React from 'react';
import './App.css';

const stories = [
  {
    id: 1, title: "U.S. presidents are older than ever while Canada's PMs are getting younger.Why ?", image: 'images/president-age.jpg', url: "https://www.cbc.ca/news/world/president-prime-minister-age-1.7131860"
  },
  {
    id: 2, title: "Is another pipe failure looming? A health check of Canada's water mains", image: 'images/pipe-health.jpg', url: "https://www.cbc.ca/news/canada/water-main-age-health-canada-1.7307124"
  },
  { id: 3, title: 'Live tracking wildfires in Canada', image: 'images/wildfires.jpg', url: "https://www.cbc.ca/newsinteractives/features/wildfires-tracker-canada" },
  { id: 4, title: 'Calculate how your mortgage will be affected as interest rates change', image: 'images/mortgage-calc.jpeg', url: "https://www.cbc.ca/news/business/mortgage-calculator-1.7007572" },
  { id: 5, title: 'Many workers hit the picket line in 2023. These 5 charts help contextualize a year of strikes', image: 'images/strikes.jpg', url: "https://www.cbc.ca/news/canada/year-of-strike-2023-historic-1.7042081" },
  { id: 5, title: "COVID-19's place in history of wars, tragedies and innovations", image: 'images/covid-history.jpg', url: 'https://today.yougov.com/health/articles/32202-covid-place-history' },
  { id: 6, title: 'Church and state: How important is religion to the American voter?', image: 'images/church-state.jpg', url: 'https://today.yougov.com/politics/articles/31507-church-and-state-just-how-important-religion-ameri' },
  { id: 7, title: 'How much money do Canadians think they can make in their life?', image: 'images/salary.jpg', url: 'https://today.yougov.com/economy/articles/28772-how-much-money-do-canadians-think-they-can-make-th' },
];

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Graeme Bruce</h1>
      </header>
      <p className="intro">A passionate digital communicator with a stellar track record of creating innovative digital content</p>
      <div className="story-links">
        {stories.map(story => (
          <a key={story.id} href={story.url}>
            <img src={story.image} alt={story.title} />
            <h2>{story.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default App;

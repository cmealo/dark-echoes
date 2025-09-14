import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // 1. State for list of episodes (imported data)
  const [episodes, setEpisodes] = useState(episodeList);

  // 2. State for selected episode (null at start)
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  // 3. Function to handle selecting an episode when clicked
  function handleSelectedEpisode(episode) {
    setSelectedEpisode(episode); // update state to the clicked episode
  }

  return (
    <div className="app">
      <h1>Dark Echoes</h1>

      {/* List → separate component */}
      <episodeList episodes={episodes} onSelect={handleSelectedEpisode} />

      {/* Detail → separate component */}
      <EpisodeDetail episode={selectedEpisode} />
    </div>
  );
}

/** Renders a list of episode names */
function episodeList({ episodes, onSelect }) {
  return (
    <ul>
      {episodes.map((episode, index) => (
        <li
          key={index}
          onClick={() => onSelect(episode)}
          style={{ cursor: "pointer" }}
        >
          {episode}
        </li>
      ))}
    </ul>
  );
}

/** Shows details for the selected episode (or a fallback message) */
function episodeDetail({ episode }) {
  if (!episode) return <p>Please select an episode.</p>;
  return (
    <div>
      <h2>{episode}</h2>
      <p>You picked {episode}!</p>
    </div>
  );
}

/* 

7. Add CSS styles in index.css for layout and spacing
*/

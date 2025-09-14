import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  function handleSelectedEpisode(episode) {
    setSelectedEpisode(episode);
  }

  return (
    <div className="app">
      <h1>Dark Echoes</h1>

      {/* List → separate component */}
      <EpisodeList episodes={episodes} onSelect={handleSelectedEpisode} />

      {/* Detail → separate component */}
      <EpisodeDetail episode={selectedEpisode} />
    </div>
  );
}

/** Renders a list of episode names */
function EpisodeList({ episodes, onSelect }) {
  return (
    <ul>
      {episodes.map((episode) => (
        <li
          key={episode.id} // better than index
          onClick={() => onSelect(episode)}
          style={{ cursor: "pointer" }}
        >
          {episode.title} {/* show the title field */}
        </li>
      ))}
    </ul>
  );
}

/** Shows details for the selected episode (or a fallback message) */
function EpisodeDetail({ episode }) {
  if (!episode) return <p>Please select an episode.</p>;
  return (
    <div>
      <h2>{episode.title}</h2>
      <p>{episode.description}</p>
      <p>Episode #{episode.id}</p>
    </div>
  );
}

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

      <div className="tv-layout">
        <div className="panel">
          <h2>Dark Echoes</h2>
          <div className="subhead">Episodes</div>
          <EpisodeList
            episodes={episodes}
            onSelect={handleSelectedEpisode}
            selectedId={selectedEpisode?.id}
          />
        </div>

        <div className="panel detail">
          <EpisodeDetail episode={selectedEpisode} />
        </div>
      </div>
    </div>
  );
}

/** Renders the list and highlights the selected row */
function EpisodeList({ episodes, onSelect, selectedId }) {
  return (
    <ul className="episode-list">
      {episodes.map((ep) => (
        <li
          key={ep.id}
          className={
            "episode-item" + (ep.id === selectedId ? " is-active" : "")
          }
          onClick={() => onSelect(ep)}
          style={{ cursor: "pointer" }}
        >
          {ep.title}
        </li>
      ))}
    </ul>
  );
}

/** Shows details for the selected episode (or a fallback message) */
function EpisodeDetail({ episode }) {
  if (!episode) return <p>Please select an episode.</p>;
  return (
    <>
      <h3>Episode {episode.id}</h3>
      <h4>{episode.title}</h4>
      <p>{episode.description}</p>
      <div className="watch-btn">Watch now</div>
    </>
  );
}

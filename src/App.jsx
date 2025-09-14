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

      {/* 4. Render list of episode titles */}
      <ul>
        {episodes.map((episode, index) => (
          <li
            key={index} // unique key (better: episode.id if available)
            onClick={() => handleSelectedEpisode(episode)}
          >
            {episode.title} {/* render the episode name */}
          </li>
        ))}
      </ul>

      {/* 5. Conditional render */}
      {/* 
        This uses the "ternary operator" (condition ? trueCase : falseCase).
        - If selectedEpisode is NOT null (truthy), show the episode details.
        - If selectedEpisode IS null (falsy), show the "Please select..." message.
      */}
      {selectedEpisode ? (
        // true case → an episode has been clicked
        <div>
          {/* show the selected episode’s info */}
          <h2>{selectedEpisode.title}</h2>
          <p>{selectedEpisode.description}</p>
          <p>Episode #{selectedEpisode.id}</p>
        </div>
      ) : (
        // false case → no episode selected yet
        <p>Please select an episode.</p>
      )}
    </div>
  );
}

/* 
6. Break out UI into components:
    - EpisodeList (renders list of titles)
    - EpisodeDetail (renders details for selected)
7. Add CSS styles in index.css for layout and spacing
*/

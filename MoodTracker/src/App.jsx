import React, { useState } from "react";

function App() {
  // State to store mood
  const [mood, setMood] = useState("😊");

  // Function to change mood
  const handleMoodChange = (newMood) => {
    setMood(newMood);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial"
      }}
    >
      <h1>Mood Tracker</h1>

      {/* Display Mood */}
      <h2>Your Mood: {mood}</h2>

      {/* Buttons */}
      <button onClick={() => handleMoodChange("😊")}>
        Happy
      </button>

      <button onClick={() => handleMoodChange("😢")}>
        Sad
      </button>

      <button onClick={() => handleMoodChange("😡")}>
        Angry
      </button>

      <button onClick={() => handleMoodChange("😎")}>
        Excited
      </button>
    </div>
  );
}

export default App;
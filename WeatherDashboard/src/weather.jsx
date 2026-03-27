import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "cb0a487a477075fbce461cd27c1ec587";

  const getWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      const result = await res.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      
      {/* Input */}
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Data */}
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>🌡️ Temp: {data.main.temp} °C</p>
          <p>🌥️ Weather: {data.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
import React, { useEffect, useState } from "react";
import "./App.css";
import UserGallery from "./components/UserGallery";

function App() {
  const [users, setUsers] = useState([]);
  const [numUsers, setNumUsers] = useState(4);
  const [showAddress, setShowAddress] = useState(true);
  const [showGeo, setShowGeo] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>

      <div className="controls">
        <label>
          Number of users:
          <input
            type="number"
            value={numUsers}
            onChange={(e) => setNumUsers(Number(e.target.value))}
            min="1"
            max="10"
          />
        </label>
        <label>
          Show Address:
          <input
            type="checkbox"
            checked={showAddress}
            onChange={(e) => setShowAddress(e.target.checked)}
          />
        </label>
        <label>
          Show Geo:
          <input
            type="checkbox"
            checked={showGeo}
            onChange={(e) => setShowGeo(e.target.checked)}
          />
        </label>
      </div>

      <UserGallery
        users={users.slice(0, numUsers)}
        showAddress={showAddress}
        showGeo={showGeo}
      />
    </div>
  );
}

export default App;

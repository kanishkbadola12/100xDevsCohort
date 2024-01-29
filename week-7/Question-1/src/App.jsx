import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";

function App() {
  const [gitHubInfo, setGitHubInfo] = useState({});

  const USERNAME = 'kanishkbadola12';

  useEffect(() => {
    fetch(`https://api.github.com/users/${USERNAME}`)
      .then(response => {
        response.json().then(data => {
          setGitHubInfo(data)
        })
      });
  }, []);

  return (
    <>
      <Card gitHubInfo={gitHubInfo}/>
    </>
  );
}

export default App;

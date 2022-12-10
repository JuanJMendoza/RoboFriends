import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorbBoundary from "../components/ErrorbBoundary";
import "./App.css";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [count, setCount] = useState(0);

  const onSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setRobots(data));
    console.log(count);
  }, [count]); // only run if count changes

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  if (robots.length === 0) {
    return <h1 className="f1 tc">Loading...</h1>;
  }

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <ErrorbBoundary>
          <CardList robots={filteredRobots} />
        </ErrorbBoundary>
      </Scroll>
    </div>
  );
};

export default App;

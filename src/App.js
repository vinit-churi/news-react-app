import "./App.scss";
// import Tem from "./components/Tem";
import React from "react";
import TemTwo from "./components/TemTwo";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
function App() {
  const [query, setQuery] = React.useState("");
  const [url, setUrl] = React.useState(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=c8ecc81fda1c46748c525dddc461c065"
  );
  const handleSearch = () => {
    // return;
    setUrl((url) =>
      encodeURI(
        `http://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&language=en&pageSize=21&apiKey=c8ecc81fda1c46748c525dddc461c065`
      )
    );
  };
  const handleChange = (e) => {
    let query = e.target.value;
    setQuery(query);
    console.log(query);
  };
  return (
    <>
      <Navbar handleSearch={handleSearch} handleChange={handleChange} />

      {/* <Tem></Tem> */}
      <TemTwo url={url} />
    </>
  );
}

export default App;

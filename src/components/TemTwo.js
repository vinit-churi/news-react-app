import React, { useEffect } from "react";
// import axios from "axios";
import limitWords from "./limit_words";
import "./TemTwo.scss";
const TemTwo = ({ url }) => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url)
        .then((data) => data.json())
        .then((data) => data.articles);
      console.log(result);
      setData(await result);
      //   setData(result.articles);
    };

    fetchData();
    console.log(url);
  }, [url]);
  return (
    <>
      <div className="temtwo-grid">
        {data.map((article, index) => {
          return (
            <>
              <a href={article?.url} key={index}>
                <div className="grid-items">
                  <div
                    className="image-background"
                    style={{ backgroundImage: `url(${article?.urlToImage})` }}
                  >
                    <div className="article-title">
                      {limitWords(article.title, 7)}
                    </div>
                  </div>
                </div>
              </a>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TemTwo;

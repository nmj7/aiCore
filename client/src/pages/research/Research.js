import React, { useState, useEffect } from "react";
import axios from "axios";
import ResearchItem from "./ResearchItem.js";
import "./researchItem.css";
import arxiv from "arxiv-api";

const Research = () => {
  const papers = arxiv
    .search({
      searchQueryParams: [
        {
          include: [
            { name: "Machine Learning" },
            { name: "Artificial Intelligence" },
          ],
        },
      ],
      start: 0,
      maxResults: 10,
    })
    .then((paper) => {
      console.log(paper[0]);
      console.table(paper);
      //show titles and summaries
      document.getElementById("titl1").innerHTML = paper[0].title;
      document.getElementById("des1").innerHTML = paper[0].summary;
      document.getElementById("auth1").innerHTML =
        "Author: " + paper[0].authors;
      document.getElementById("titl1").href = paper[0].links[1].href;
      console.log(paper[0].links[1].href);

      document.getElementById("titl2").innerHTML = paper[1].title;
      document.getElementById("titl2").href = paper[1].links[1].href;
      document.getElementById("des2").innerHTML = paper[1].summary;
      document.getElementById("auth2").innerHTML =
        "Author: " + paper[1].authors;
      document.getElementById("titl3").innerHTML = paper[2].title;
      document.getElementById("titl3").href = paper[2].links[1].href;
      document.getElementById("des3").innerHTML = paper[2].summary;
      document.getElementById("auth3").innerHTML =
        "Author: " + paper[2].authors;
      document.getElementById("titl4").innerHTML = paper[3].title;
      document.getElementById("titl4").href = paper[3].links[1].href;
      document.getElementById("des4").innerHTML = paper[3].summary;
      document.getElementById("auth4").innerHTML =
        "Author: " + paper[3].authors;
      document.getElementById("titl5").innerHTML = paper[4].title;
      document.getElementById("titl5").href = paper[4].links[1].href;
      document.getElementById("des5").innerHTML = paper[4].summary;
      document.getElementById("auth5").innerHTML =
        "Author: " + paper[4].authors;
      document.getElementById("titl6").innerHTML = paper[5].title;
      document.getElementById("titl6").href = paper[5].links[1].href;
      document.getElementById("des6").innerHTML = paper[5].summary;
      document.getElementById("auth6").innerHTML =
        "Author: " + paper[5].authors;
      document.getElementById("titl7").innerHTML = paper[6].title;
      document.getElementById("titl7").href = paper[6].links[1].href;
      document.getElementById("des7").innerHTML = paper[6].summary;
      document.getElementById("auth7").innerHTML =
        "Author: " + paper[6].authors;
      document.getElementById("titl8").innerHTML = paper[7].title;
      document.getElementById("titl8").href = paper[7].links[1].href;
      document.getElementById("des8").innerHTML = paper[7].summary;
      document.getElementById("auth8").innerHTML =
        "Author: " + paper[7].authors;
      document.getElementById("titl9").innerHTML = paper[8].title;
      document.getElementById("titl9").href = paper[0].links[1].href;
      document.getElementById("des9").innerHTML = paper[8].summary;
      document.getElementById("auth9").innerHTML =
        "Author: " + paper[8].authors;
    });
  return (
    <div>
      <div className="content">
        <h1>Enhance your knowledge!</h1>
        <h2 className="h">Check out these papers!</h2>
      </div>
      {/* {Object.entries(papers).forEach((paper) => { */}
      {/* return <ResearchItem title={paper.title} description={paper.summary} />; */}
      {/* })} */}
      <div>
        <div className="r-app">
          <div className="r-item">
            <br />
            <h2>
              {/* <a href={url} class="res" target="_blank"> */}
              <a class="res" id="titl1" target="_blank"></a>
            </h2>
            <br />
            <p class="des" id="des1"></p>
            <br />
            <h4 class="auth" id="auth1"></h4>
          </div>
        </div>

        <div>
          <div className="r-app">
            <div className="r-item">
              <br />
              <h2>
                {/* <a href={url} class="res" target="_blank"> */}
                <a class="res" href="/" id="titl2" target="_blank"></a>
              </h2>
              <br />
              <p class="des" id="des2"></p>
              <br />
              <h4 class="auth" id="auth2"></h4>
            </div>
          </div>
        </div>

        <div>
          <div className="r-app">
            <div className="r-item">
              <br />
              <h2>
                {/* <a href={url} class="res" target="_blank"> */}
                <a class="res" href="/" id="titl3" target="_blank"></a>
              </h2>
              <br />
              <p class="des" id="des3"></p>
              <br />
              <h4 class="auth" id="auth3"></h4>
            </div>
          </div>
        </div>

        <div>
          <div className="r-app">
            <div className="r-item">
              <br />
              <h2>
                {/* <a href={url} class="res" target="_blank"> */}
                <a class="res" href="/" id="titl4" target="_blank"></a>
              </h2>
              <br />
              <p class="des" id="des4"></p>
              <br />
              <h4 class="auth" id="auth4"></h4>
            </div>
          </div>
        </div>

        <div>
          <div className="r-app">
            <div className="r-item">
              <br />
              <h2>
                {/* <a href={url} class="res" target="_blank"> */}
                <a class="res" href="/" id="titl5" target="_blank"></a>
              </h2>
              <br />
              <p class="des" id="des5"></p>
              <br />
              <h4 class="auth" id="auth5"></h4>
            </div>
          </div>
        </div>

        <div>
          <div className="r-app">
            <div className="r-item">
              <br />
              <h2>
                {/* <a href={url} class="res" target="_blank"> */}
                <a class="res" href="/" id="titl6" target="_blank"></a>
              </h2>
              <br />
              <p class="des" id="des6"></p>
              <br />
              <h4 class="auth" id="auth6"></h4>
            </div>
          </div>
        </div>

        <div>
          <div className="r-app">
            <div className="r-item">
              <br />
              <h2>
                {/* <a href={url} class="res" target="_blank"> */}
                <a class="res" href="/" id="titl7" target="_blank"></a>
              </h2>
              <br />
              <p class="des" id="des7"></p>
              <br />
              <h4 class="auth" id="auth7"></h4>
            </div>
          </div>
        </div>

        <div>
          <div className="r-app">
            <div className="r-item">
              <br />
              <h2>
                {/* <a href={url} class="res" target="_blank"> */}
                <a class="res" href="/" id="titl8" target="_blank"></a>
              </h2>
              <br />
              <p class="des" id="des8"></p>
              <br />
              <h4 class="auth" id="auth8"></h4>
            </div>
          </div>
        </div>

        <div>
          <div className="r-app">
            <div className="r-item">
              <br />
              <h2>
                {/* <a href={url} class="res" target="_blank"> */}
                <a class="res" href="/" id="titl9" target="_blank"></a>
              </h2>
              <br />
              <p class="des" id="des9"></p>
              <br />
              <h4 class="auth" id="auth9"></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;

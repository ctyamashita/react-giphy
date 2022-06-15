import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  // using states on variables (helps rerender all components)
  const [ selectedGif, setSelectedGif ] = useState("5ntdy5Ban1dIY");
  // setSelectedGif is a method that allow us to reassign the value for selectedGif
  const [ gifIds, setGifIds ] = useState(["5ntdy5Ban1dIY", "TilmLMmWrRYYHjLfub", "kHrKpJiCbOmkWD4xT9"]);

  // Hard coded values
  // const selectedGif = "PnpkimJ5mrZRe";
  // const gifIds = ["5ntdy5Ban1dIY", "TilmLMmWrRYYHjLfub", "kHrKpJiCbOmkWD4xT9"];

  const fetchGiphyAPI = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const ids = res.data.map((gif) => gif.id);
      setGifIds(ids);
    });
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphyAPI={fetchGiphyAPI}/>
        <div className="selected-gif">
          <Gif id={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} setSelectedGif={setSelectedGif} />
      </div>
    </div>
  );
};

export default App;

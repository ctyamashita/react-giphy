import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  // const gifIds = ["5ntdy5Ban1dIY", "TilmLMmWrRYYHjLfub", "kHrKpJiCbOmkWD4xT9"];
  const { gifIds, setSelectedGif } = props;
  return (
    <div className="gif-list">
      { gifIds.map((gifId) => <Gif id={gifId} key={gifId} className="gif" setSelectedGif={setSelectedGif} />) }
    </div>
  );
};

export default GifList;

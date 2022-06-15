import React from 'react';

const Gif = (props) => {
  const { id, setSelectedGif } = props;
  const url = `https://media.giphy.com/media/${id}/giphy.gif`;

  const handleClick = () => {
    if (setSelectedGif) {
      setSelectedGif(id);
    }
  };

  return (
    <img onClick={handleClick} src={url} alt="gif" className="gif" />
  );
};

export default Gif;

// rsc shortcut React Stateless Component

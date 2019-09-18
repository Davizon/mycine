import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
    // eslint-disable-next-line arrow-parens
      .then(response => response.json())
    // eslint-disable-next-line arrow-parens
      .then(data => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;

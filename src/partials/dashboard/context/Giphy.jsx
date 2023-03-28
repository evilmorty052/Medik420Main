import React, { useContext, useState } from 'react';

export const GiphyContext = React.createContext(null);

export const GiphyContextProvider = (props) => {
  const [giphyState, setGiphyState] = useState(false);
  return (
    <GiphyContext.Provider value={{ giphyState, setGiphyState }}>
      {props.children}
    </GiphyContext.Provider>
  );
};

export const useGiphyContext = () => {
  return useContext(GiphyContext);
};

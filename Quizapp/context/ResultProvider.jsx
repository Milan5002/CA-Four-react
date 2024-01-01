
import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();


export const ResultProvider = ({ children }) => {
  const [correct, setCorrect] = useState(0);

  return (
    <ResultContext.Provider value={{ correct, setCorrect }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultValue = () => useContext(ResultContext);
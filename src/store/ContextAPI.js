import React, { createContext, useState } from 'react'


const defaultState = {
  light: false,
  animate: false
  // bookId: null,
}

export const ThemeContext = createContext(defaultState)

export const ThemeProvider = ({ children }) => {
  const [light, setLight] = useState(false);
  const [animate, setAnimate] = useState(false)
  // const [bookId, setBookId] = useState(null);
  return (
    <ThemeContext.Provider value={{ light, setLight, animate, setAnimate }} >
      {children}
    </ThemeContext.Provider>
  );
}
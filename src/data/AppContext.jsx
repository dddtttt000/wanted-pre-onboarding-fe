import React, { createContext, useReducer } from 'react';
import useLocalStorage from './useLocalStorage';

export const AppContext = createContext({
  username: '',
  isLoggedIn: false,
  setUsername: () => {},
  setIsLoggedIn: () => {},
});

export const AppContextProvider = (props) => {
  const [username, setUsername] = useLocalStorage('username', null);
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);

  return (
    <AppContext.Provider
      value={{
        username,
        isLoggedIn,
        setUsername,
        setIsLoggedIn,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

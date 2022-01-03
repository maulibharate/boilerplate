import React, { createContext, useReducer } from 'react'
import Router from '../../Routes/Router'

import './App.css'
import { initialState, reducer } from '../../reducer/UseReducer';

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
        <Router />
      </UserContext.Provider>
    </>
  )
}

export default App

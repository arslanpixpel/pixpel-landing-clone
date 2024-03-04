import React from 'react';
import Router from './routes';
import AppContextProvider from "./context/AppContext";
import './responsive.scss';
import './App.scss';

function App() {
  return (
    <>
      <AppContextProvider>
      <Router />
      </AppContextProvider>
    </>
  );
}

export default App;

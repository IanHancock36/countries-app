import React from 'react';
import logo from './logo.svg';
import './App.css';
import { initializeStore,Provider } from './store';
import  CountriesList  from './CountriesList'
const store = initializeStore()

function App() {
  return (
    <Provider value = {store}>
    <div className="App">
    <CountriesList/>
    </div>
    </Provider>
  );
}

export default App;

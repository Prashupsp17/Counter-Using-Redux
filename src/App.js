import React from 'react';
import Buttons from './Buttons';
import { Provider } from 'react-redux';
import appStore from './store';
import './App.css';

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <header className="App-header">
          Todo List App
          <Buttons />
        </header>
      </div>
      </Provider>
  );
}

export default App;

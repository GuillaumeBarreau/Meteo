import React from 'react';
import './App.css';
import Meteo from './screens/Meteo/Meteo';
import store from './store/configureStore'
import { Provider } from 'react-redux';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className="App">
          <Meteo />
        </div>
      </Provider>
    </React.StrictMode>
  );
}

export default App;

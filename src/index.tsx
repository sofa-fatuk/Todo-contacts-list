import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import store from './store'

const elementRoot = document.getElementById('root');

if (elementRoot) {
  const root = ReactDOM.createRoot(elementRoot);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
}

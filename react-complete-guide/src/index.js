import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// Here we render the root "App" component
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

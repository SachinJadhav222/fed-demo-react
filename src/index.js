import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//import App from './react-original/App';
//import App from './01_welcome/App';
//import App from './02_componentReuse/App';
//import App from './03_properties/App';
//import App from './04_events/App';
//import App from './05_states/App'
// import App from './06_ref/App';
import App from './07_propTypes/App';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

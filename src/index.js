import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

//import App from './react-original/App';
//import App from './fed/01_welcome/App';
//import App from './fed/02_componentReuse/App';
//import App from './fed/03_properties/App';
//import App from './fed/04_events/App';
//import App from './fed/05_states/App'
//import App from './fed/06_ref/App';
//import App from './fed/07_propTypes/App';
//import App from './fed/08_componentLifeCycle/App'
//import App from './fed/08a_componentLifeCycle/App'
//import App from './fed/09_composableComponents/App'
//import App from './fed/09a_composableComponents/App'
//import App from './fed/10_hoc/App'
//import App from './fed/11_renderProps/App'
//import App from './fed/12_formHandling/App'
//import App from './fed/13_reactrouter/App'

//import App from './practice/01_welcome/App'
//import App from './practice/02_componantReuse/App'
//import App from './practice/03_properties/App'
import App from './practice/04_events/App'
//import App from './practice/08_Pra_componantlifeCycle/App'
//import App from './practice/08a_Pra_componantLifeCycle/App'
//import App from './practice/09_Pra_composableComponants/App'
//import App from './practice/09a_Pra_composableComponantsJSON/App'
//import App from './practice/10_hoc/App'
//import App from './practice/11_renderProps/App'
//import App from "./practice/12_formHandling/App";
//import App from './practice/13_reactRouter/App'


ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

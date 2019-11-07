import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		alert("constructor called");
	}

	UNSAFE_componentWillMount() { // This is DEPRECATED.
		alert("component will mount");
	}

	componentDidMount() {
		console.log("component did mount");
		registerOnClickListener();
	}

	componentWillUnmount() {
		alert("component will unmount");
	}

	render() {
		console.log("Inside render method ...");
		alert("Inside render method ...");
		return (
			<div id="demo-container">
				<h2>Component Lifecycle demo</h2>
			</div>
		);
	}
}

// simulation code
function registerOnClickListener() {
	let removeReactComponent = document.getElementById('demo-container');
	console.log(removeReactComponent);

	removeReactComponent.onclick = function () {
		ReactDOM.unmountComponentAtNode(document.getElementById('root'));
		alert("component is actually unmounted now");
	}
}

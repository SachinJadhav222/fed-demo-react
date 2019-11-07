import React from 'react';
import InnerComponent from './InnerComponent';

export default class App extends React.Component {
    constructor(props) {
		    super(props);
        this.handleTextInput = this.handleTextInput.bind(this);
        this.state = {
          name: "Ram"
        };
    }

    handleTextInput(event) {
      this.setState({name: event.target.value});
    }

    render() {
        return (
            <div>
                <h1>App Component Heading</h1>
                <input type="text" defaultValue={this.state.name} onInput={this.handleTextInput}/><br/><br/>
                <InnerComponent myname={this.state.name}></InnerComponent>
            </div>
        );
    }
}

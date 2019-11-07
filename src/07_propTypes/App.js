import React from 'react';
import PropTypes from 'prop-types';

class UserComponent extends React.Component {
    render() {
        return (
            <>
                <h2>PropTypes Demo</h2>
                <h4>Check the warning messages in the JavaScript console</h4>
                <p>Name : {this.props.name}</p>
                <p>Projects : {this.props.projects}</p>
                <p>Age : {this.props.age}</p>
            </>
        );
    }
}

// propTypes will get removed from production build of the application
// Used only developmental integration testing
UserComponent.propTypes = {
    name: PropTypes.string.isRequired,
    projects: PropTypes.array,
    age(props, propName) {
        if (typeof props[propName] !== "number") {
            return new Error("Age must be a number");
        }
        if (props[propName] > 100) {
            return new Error("Age entered is " + props[propName] + ", it should be less than or equal to 100");
        }
    }
};


UserComponent.defaultProps = {
    name: "Vinay"
};


export default class App extends React.Component {
    render() {
        return (
            <UserComponent projects={"ShoppingCart"} age={201}></UserComponent>
        );
    }
}

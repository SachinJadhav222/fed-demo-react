import React from "react";
import { Link } from "react-router-dom";

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Page NOT Found</h1>
        <p>
          <h2>Request is NOT made</h2>
        </p>
        <p>
          <Link to="/">BACK TO HOMEPAGE</Link>
        </p>
        
      </div>
    );
  }
}

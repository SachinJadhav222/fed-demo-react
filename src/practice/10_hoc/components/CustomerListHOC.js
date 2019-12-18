import React, { Component } from "react";
import commonHOC from "./commonHOC";

class CustomerListHOC extends Component {
  render() {
    const { heading, addItem, itemList } = this.props;

    return (
      <div>
        <h1>{heading + " (Using Higher Order Componant)"}</h1>
        <label>
          Enter Customer Name:
          <input type="text" ref="name" />
        </label>
        <button onClick={() => addItem(this.refs.name.value)}>
          Add Customer (HOC)
        </button>
        <ul>{itemList}</ul>
      </div>
    );
  }
}
export default commonHOC(CustomerListHOC, 0);

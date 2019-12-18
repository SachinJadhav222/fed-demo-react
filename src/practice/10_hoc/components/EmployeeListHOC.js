import React, { Component } from "react";
import commonHOC from "./commonHOC";

class EmployeeListHOC extends Component {
  render() {
    const { heading, addItem, itemList } = this.props;

    return (
      <div>
        <h1>{heading + " (Using Higher Order Componant)"}</h1>
        <label>
          Enter Employee Name:
          <input type="text" ref="name" />
        </label>
        <button onClick={() => addItem(this.refs.name.value)}>
          Add Employee (HOC)
        </button>
        <ul>{itemList}</ul>
      </div>
    );
  }
}
export default commonHOC(EmployeeListHOC, 1);

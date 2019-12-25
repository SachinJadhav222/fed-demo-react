import React, { Component } from "react";
import Item from "./Item";
import EmployeeList from "./EmployeeListRP";
import CustomerList from "./CustomerListRP";

class AppCollection extends Component {
  render() {
    return (
      <div>
        <Item isUpper={true}>
          {(items, addItem) => (
            <EmployeeList
              items={items}
              addItem={addItem}
              heading="Employee List (Using Render Props)"
            />
          )}
        </Item>
        <Item>
          {(items, addItem) => (
            <CustomerList
              items={items}
              addItem={addItem}
              heading="Customer List (Using Render Props)"
            />
          )}
        </Item>
        <Item isUpper={true}>
        {(items, addItem) => (
          <EmployeeList
            items={items}
            addItem={addItem}
            heading="Shopping List (Using Render Props)"
          />
        )}
      </Item>
      </div>
    );
  }
}

export default AppCollection;

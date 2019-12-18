import React from "react";
import Item from "./componants/ItemRP";
import EmployeeList from "./componants/EmployeeListRP";
import CustomerList from "./componants/CustomerListRP";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Item isUpper={true}>
          {(item, addItem) => (
            <EmployeeList
              item={item}
              addItem={addItem}
              heading="Employeed List (Using Render Props)"
            />
          )}
        </Item>

        <Item isUpper={false}>
          {(item, addItem) => (
            <CustomerList
              item={item}
              addItem={addItem}
              heading="Customer List (Using Render Props)"
            />
          )}
        </Item>
      </div>
    );
  }
}

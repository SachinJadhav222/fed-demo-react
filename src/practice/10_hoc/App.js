import React from "react";
//import EmployeeList from "./components/EmployeeListNormal";
//import CustomerList from "./components/CustomerListNormal";
import EmployeeList from "./components/EmployeeListHOC";
import CustomerList from "./components/CustomerListHOC";
import ShoppingList from "./components/ShoppingListHOC";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <EmployeeList heading="Employee List " />
        <ShoppingList heading="Shopping List " />
        <CustomerList heading="Customer List " />
      </div>
    );
  }
}

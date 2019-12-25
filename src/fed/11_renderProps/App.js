import React, { Component } from "react";
// import Item from "./components/Item";
// import EmployeeList from "./components/EmployeeListRP";
// import CustomerList from "./components/CustomerListRP";
import AppCollection from './components/AppCollection'


class App extends Component {
 render(){
     return(
       <div>
  <AppCollection></AppCollection>
       </div>
     )
 }

  // render() {
  //   return (
  //     <div>
  //       <Item isUpper={true}>
  //         {(items, addItem) => (
  //           <EmployeeList
  //             items={items}
  //             addItem={addItem}
  //             heading="Employee List (Using Render Props)"
  //           />
  //         )}
  //       </Item>
  //       <Item>
  //         {(items, addItem) => (
  //           <CustomerList
  //             items={items}
  //             addItem={addItem}
  //             heading="Customer List (Using Render Props)"
  //           />
  //         )}
  //       </Item>
  //     </div>
  //   );
  // }
}

export default App;

import React from "react";

export default class CustomerListNormal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: []
    };
  }
  addCustomer = name => {
    this.setState(prevState => {
      return { customer: [...prevState.customer, name] };
    });
  };

  render() {
    let customer = this.state.customer.map((customer, index) => (
      <li key={index}>{customer}</li>
    ));
    return (
      <div>
        <h1>{this.props.heading+'(Normal Componant)'}</h1>
        <label>
          Enter Employee Name:
          <input type="text" ref="name" />
        </label>
        <button onClick={()=>this.addCustomer(this.refs.name.value)}>Add Customer (Normal)</button>
        <ul>
        {customer}
        </ul>

      </div>
    );
  }
}

import React from "react";

export default class EmployeeListNormal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: []
    };
  }
  addEmployee = name => {
    this.setState(prevState => {
      return { employee: [...prevState.employee, name.toUpperCase()] };
    });
  };

  render() {
    let employee = this.state.employee.map((employee, index) => (
      <li key={index}>{employee}</li>
    ));
    return (
      <div>
        <h1>{this.props.heading+'(Normal Componant)'}</h1>
        <label>
          Enter Employee Name:
          <input type="text" ref="name" />
        </label>
        <button onClick={()=>this.addEmployee(this.refs.name.value)}>Add Employee (Normal)</button>
        <ul>
        {employee}
        </ul>

      </div>
    );
  }
}

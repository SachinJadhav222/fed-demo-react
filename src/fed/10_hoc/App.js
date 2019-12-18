import React, { Component } from 'react'
//import EmployeeList from './components/EmployeeListNormal'
//import CustomerList from './components/CustomerListNormal'
import EmployeeList from './components/EmployeeList'
import CustomerList from './components/CustomerList'

class App extends Component {
    render() {
        return (
            <>
                <EmployeeList heading="Employee List (Using Higher Order Component)"/>
                <CustomerList heading="Customer List (Using Higher Order Component)"/>
            </>
        )
    }
}

export default App

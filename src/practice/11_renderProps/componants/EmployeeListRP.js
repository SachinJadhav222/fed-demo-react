import React from 'react'

export default class EmployeeListRP extends React.Component{
    render() {
       // const { heading, addItem ,itemList} = this.props;
       const { heading,item, addItem } = this.props;
       let itemList = item.map((item, index) => (
           <li key={index}>{item}</li>
       ))
       
        return (
            <div>
                <h2>{heading}</h2>
                <label>
                    Enter employee name:
                    <input type="text" ref="name" />
                </label>
                <button onClick={() => addItem(this.refs.name.value)}>Add Employee (RP)</button>
                <ul>
                    {itemList}
                </ul>
            </div>
        )
    }
}
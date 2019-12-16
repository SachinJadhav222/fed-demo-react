import React from 'react';

export default class App extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            employee: 'Ram',
            isManager: false
        };
    }

    handleInputValue(event){
        this.setState({employee: event.target.value})
    }
    handleCheckBox(){

        this.setState((prevState)=>({isManager:!prevState.isManager}));
        
            
        
    }

    render(){
        let role= this.state.isManager? "Manager" : "Employee";

     return(
         <div>
            <h1>State Demo</h1>
            <div>
              <lable>
              Employee Name: 
              <input type="text" onInput={(event)=> this.handleInputValue(event)} defaultValue={this.state.employee}/>
              </lable>
              <label>
              <input type='checkbox' onChange={()=>{this.handleCheckBox()}} defaultChecked={this.state.isManager}/>
              Manager
              </label>
            </div>
            <p>{this.state.employee} is {role}</p>

         </div>
     ) 



    }

}
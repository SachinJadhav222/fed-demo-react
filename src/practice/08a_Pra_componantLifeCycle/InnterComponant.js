import React from 'react';

export default class InnterComponant extends React.Component{
    constructor(props){
        super(props);
        console.log('Constructor- InnerComp');
      this.handleCheckboxChange=this.handleCheckboxChange.bind(this);
      this.state={
          checked: false,
          nameInCapital: props.myname.toUpperCase(),
      }
      
    }

    componentWillReceiveProps(nextProps){
        console.log('Componant will recieved Props- InnerCompo')
        let myname=nextProps.myname;
        this.setState({nameInCapital:myname.toUpperCase()});
    }
    componentDidMount(){
        console.log('Componendt DID Mount-InnerComp ');
    }
    handleCheckboxChange(){
        this.setState({checked:!this.state.checked})

    }
    
  render(){
    console.log('Render Method InnerComponent')
    let currentstate=this.state.checked ? "checked" : "unchecked";
      return (
          <div>
          <h1> Inner Componant Heading 2</h1>
          <spa><b>PASSED Name:</b></spa> {this.state.nameInCapital} 
          <br/>
          <input type='checkbox' onChange={this.handleCheckboxChange} defaultChecked={this.state.checked}></input>
          <span>{currentstate}state</span>

          </div>
      )
  }




}
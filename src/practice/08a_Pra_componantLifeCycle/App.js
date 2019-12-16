import React from 'react';
import InnerComponant from './InnterComponant'

export default class App extends React.Component{
   constructor(props){
        super(props);
        console.log('Constructor-APP')
        this.handleInputText=this.handleInputText.bind(this);
        this.state={
            name: 'Soham'
        }
   }
   handleInputText(event){
     this.setState({name:event.target.value});
   }
   
    render(){
        console.log('Render -APP')
        return (
            <div>
            <h1>Inner componant Demo</h1>
            <input type="text" defaultValue={this.state.name} onInput={this.handleInputText}/><br/>
            <InnerComponant myname={this.state.name}></InnerComponant>
            </div>
        )
    }
}
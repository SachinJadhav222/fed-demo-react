import React from 'react';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.refName=React.createRef()
    }

    retrive(){
         let name =this.refName.current.value;
         console.log('name--->',name);
         alert('Retrived Name-> ',name);
         this.refName.current.focus();
    }
    render(){
     return(
         <div>
            <h2>Ref Demo</h2>
            <span>Enter name:</span>
            <input type='text' ref={this.refName}/><br/><br/>
            <button onClick= {()=> this.retrive()}>Retrive Name and Display</button>
         </div>
     )
    }

}
import React from 'react';
import './properties.css'

// export default class OSComponent extends React.Component{
//  render(){
//      return (
//          <div>
//          <h1>Operating System : {this.props.os}</h1>
//          <h2>is developed by : {this.props.children}</h2>
//          </div>
//      )
//  }
// }

 const OSComponent =({os,children})=>{
    
        return (
            <div>
            <h1>Operating System : {os}</h1>
            <h2>is developed by : {children}</h2>
            </div>
        )
    
   }
   export default OSComponent
    


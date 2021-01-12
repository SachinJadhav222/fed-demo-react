import React from 'react'
import WelcomeComponent from './WelcomeComponent'
import HelloComponent from './HelloComponent'
import './App.css';

// class WelcomeComponent extends React.Component{
//  render(){
//    return(
//      <h1 id='head1'>Welcome to React</h1>
//    )
  
//  }
// }

function App(){
    return (
        <div id='welcome'>
         <WelcomeComponent/>
         <WelcomeComponent/>
         <HelloComponent/>
         
          
        </div>
      );
}
export default App
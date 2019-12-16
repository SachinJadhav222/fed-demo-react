import React from 'react';
import './App.css';

class WelcomeComponnant extends React.Component{
  render(){
    return (
      <h2 id='head1'>Welcome to React</h2>
    )
  }
}

export default class App extends React.Component{
 render(){
  return (
    <div id='wel1'>
      <WelcomeComponnant/>
      <WelcomeComponnant/>
      <WelcomeComponnant/>
    </div>
  )

 }

}
import React from 'react';
import './App.css';

class WelcomeComponnant extends React.Component{
  render(){
    return (
      <h1>Welcome to React</h1>
    )
  }
}

export default class App extends React.Component{
 render(){
  return (
    <React.Fragment>
      <WelcomeComponnant/>
      <WelcomeComponnant/>
      <WelcomeComponnant/>
    </React.Fragment>
  )

 }

}
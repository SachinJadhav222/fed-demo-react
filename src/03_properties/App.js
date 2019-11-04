import React from 'react';
import OSComponent from './OSComponant'



export default class App extends React.Component{
  render(){
        return (
            <React.Fragment>
                <OSComponent os="Window">Microsoft</OSComponent>
                <OSComponent os="Solaris">Sun</OSComponent>
                <OSComponent os="iOS">Apple</OSComponent>
            </React.Fragment>
        )
    }
}
    


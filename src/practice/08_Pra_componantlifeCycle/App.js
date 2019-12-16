import React from 'react'

export default class App extends React.Component{
    constructor(props){
        super(props)
        console.log('This is Constructor ')

    }
    componentDidMount(){
        console.log('Componant DID Mount')
    }
    UNSAFE_componentWillMount(){
        console.log('Componant WILL Mount')
    }


    render(){
    
        console.log('Inside RENDER ')
        return(
        
            <div>
                <h1>This is COMPONENT DEMO</h1>
            </div>
        )
    }

}
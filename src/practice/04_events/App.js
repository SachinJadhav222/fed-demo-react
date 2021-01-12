import React from 'react'

export default class App extends React.Component{
    add(){
        alert('Add clicked');
    }
   delete(){
       alert("Deleted");
   }


    render(){
        return (
        <div>
            <h1>Events Demo...</h1>
            <button onClick={()=>this.add()}>Add</button>
            <button onClick={()=> this.add()}> Add </button>
            <button onClick={()=> this.delete()}> Delete</button>

        </div>
        )
        

    }

}
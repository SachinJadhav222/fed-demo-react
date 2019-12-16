import React from 'react';

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
      <h2>Event Demo</h2> 
      <button onClick={()=> this.add()}> Add </button>
      <button onClick={()=> this.delete()}> Delete </button>
    
    </div>
)



}




}
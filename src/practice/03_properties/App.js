import React from 'react'
import OSComponant from './OSComponent'
// import './App.css'

// function App(){
//     return (
//         <div id='welcome'>
//           <h1>Welcome99----=8888===-999--</h1>
//           <h2>Welcome999----=8888===-999--</h2>
//         </div>
//       );
// }
// export default App

export default class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <OSComponant os='Window'>Microsoft</OSComponant>
        <OSComponant os='IOS'>Apple</OSComponant>

      </React.Fragment>

    )
    }

}
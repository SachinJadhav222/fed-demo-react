import React from 'react'
import './properties.css'
const OSComponent =({os,children})=>{
  return(
      <div>
          <h1>Operatinh system: {os}</h1>
          <h2>Is developed by: {children}</h2>
      </div>
  )
}

export default OSComponent;
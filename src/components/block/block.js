import React from 'react';
import './block.css';
function word({color , row , col}) {
  return (
    
    <button className = "Block" style={{backgroundColor:color}} key={row+col} onClick={()=>{console.log( "col: " + col + " , row: " + row )}}>  </button>
 
  )
}

export default word
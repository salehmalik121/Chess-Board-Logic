import React from 'react'
import Block from '../block/block'
import './board.css'
function print(){
    let arr = [];
    for(let i=0 ; i<8 ; i++){
      let arrSub = [];
      for(let j=0 ; j<8 ; j++){
         arrSub.push(j);
      }
      arr.push(arrSub);
    }
    return arr.map((value , index)=>{
       let evenWhite ;
       index%2 === 0 ? evenWhite = true : evenWhite = false;
      return(
      <div className = "row">
          {value.map(value2=>{
            let col;
            if(evenWhite){
            value2 % 2 === 0 ? col = "white" : col = "black" ; }
            else{
              value2 %2 === 0 ? col = "black" : col = "white" ;
            }
            return <Block color={col} row={value2} col={index} />
          })}
      </div>
      )
    })
  }
function board() {
  return (
    <div className="board" >
        {print()}
    </div>
  )
}

export default board
import React from 'react'

 const Total = ({total}) => {
  let sum = 0;
  for(let i = 0; i < total.length; i++ ) {
    let currentValue = total[i];
    sum += currentValue.exercises
  }
  return(
 <div>
  <p> Total of {sum} exercises</p>
 </div>

  )
   }

  export default Total
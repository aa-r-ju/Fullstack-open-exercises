import React from 'react'

 const Total = ({parts}) => {
  let sum = 0;
  for(let i = 0; i < parts.length; i++ ) {
    let currentValue = parts[i];
    sum += currentValue.exercises
  }
  return(
 <div>
  <p> Number of exercises {sum}</p>
 </div>

  )
   }

  export default Total
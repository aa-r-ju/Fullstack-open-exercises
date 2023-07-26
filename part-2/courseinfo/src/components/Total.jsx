import React from 'react'

 const Total = ({total}) => {
  console.log(total)
  let val = total.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,0
  );
    return(
 <div>
  <p> <b>Total of {val} exercises</b></p>
 </div>

  )
   }

  export default Total
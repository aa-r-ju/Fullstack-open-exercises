import React from 'react'

 const Total = ({total}) => {
  console.log(total)
  let val = total.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,0
  );
    return(
 <div>
  <p> Total of {val} exercises</p>
 </div>

  )
   }

  export default Total
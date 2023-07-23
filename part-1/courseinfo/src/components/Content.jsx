import React from 'react'
import Part from './Part'

 const Content = ({parts}) => {
return(
  <div>
    {/* <p> {parts.name.}</p> 
    <p> {parts[1].name}</p>
    <p> {parts[2].name}</p> */}
    {parts.map((part,i) => <Part name = {part.name}  exercise = {part.exercises} key = {i}/>)}
  </div>
)
}
export default Content


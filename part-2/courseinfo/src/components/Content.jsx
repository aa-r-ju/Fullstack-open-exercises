import React from 'react'
import Part from './Part'

 const Content = ({content}) => {
  console.log(content,"con")
return(
  <div>
    {/* <p> {parts.name.}</p> 
    <p> {parts[1].name}</p>
    <p> {parts[2].name}</p> */}
    {content.map((part) => <Part name = {part.name}  exercise = {part.exercises} key = {part.id}/>)}
  </div>
)
}
export default Content


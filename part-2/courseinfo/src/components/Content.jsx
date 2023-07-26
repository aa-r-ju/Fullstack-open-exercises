import React from 'react'
import Part from './Part'

 const Content = ({content}) => {
  console.log(content,"con")
return(
  <div>
    {content.map((part) => <Part name = {part.name}  exercise = {part.exercises} key = {part.id}/>)}
  </div>
)
}
export default Content


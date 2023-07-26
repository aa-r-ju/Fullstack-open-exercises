import React from 'react'

 const Header = (props) => {
  console.log(props.name.name)
  return (
    <div><h2>{props.name}</h2></div>
  )
}
export default Header




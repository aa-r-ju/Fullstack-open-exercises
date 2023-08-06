import React from 'react'

const PersonForm = ({handleSubmit,newName,handleNameChange,newNumber,handleNumberChange}) => {
  return (
    <div> <form onSubmit={handleSubmit}>
    <div>
      name: <input type="text" value={newName} onChange={handleNameChange} />
    </div>
    <div>
      number: <input type="text" value={newNumber} onChange={handleNumberChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form></div>
  )
}

export default PersonForm
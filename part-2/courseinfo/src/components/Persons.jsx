import React from 'react'

const Persons = ({filteredPersons}) => {
  return (
    <div><ul>
    {filteredPersons.map((person, index) => (
      <li key={index}>
        {person.name} {person.number}
      </li>
    ))}
  </ul></div>
  )
}

export default Persons
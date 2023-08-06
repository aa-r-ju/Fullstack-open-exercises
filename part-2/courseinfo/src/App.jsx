// import { useState } from 'react';

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas' }
//   ]);
//   const [newName, setNewName] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setPersons([...persons, { name: newName }]);
// setNewName('');
//   };

//   const handleChange = (event) => {
//     setNewName(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           name: <input type="text" value={newName} onChange={handleChange} />
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       <ul>
//         {persons.map((person,index) => (
//           <li key = {index}>{person.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;








// import { useState } from 'react'

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas' }
//   ]) 
//   const [newName, setNewName] = useState('')



//   const handleSubmit = (event) => {
//    event.preventDefault();
//    setPersons([...persons, {name:newName}])
//    setNewName("");
//   }

//   const handleChange = (event) => {
//     setNewName(event.target.value)
//   }

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           name: <input type = "text" value={newName} onChange = {handleChange} />
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       <ul> 
//         {persons.map((person,index) =>(
//           <li key = {index}> {person.name}</li>
//         ))}
//       </ul>
//     </div>
//   )
//         }


// export default App












// import { useState } from 'react';

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas' },
//   ]);
//   const [newName, setNewName] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Check if the newName already exists in the persons array
//     const nameExists = persons.some((person) => person.name === newName);

//     if (nameExists) {
//       alert(`${newName} already exists in the phonebook.`);
//     } else {
//       setPersons([...persons, { name: newName }]);
//       setNewName('');
//     }
//   };

//   const handleChange = (event) => {
//     setNewName(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           name: <input type="text" value={newName} onChange={handleChange} />
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       <ul>
//         {persons.map((person, index) => (
//           <li key={index}> {person.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;





// import { useState } from 'react'

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas' }
//   ]) 
//   const [newName, setNewName] = useState('')

//   const handleSubmit = (event) =>{
//     event.preventDefault();
//     setPersons([...persons,{name:newName}])
//     setNewName('');
//   }


//   const handleChange = (event) => {
//     setNewName(event.target.value)
//   }


//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           name: <input  type = "text" value = {newName}  onChange={handleChange}/>
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//     <ul> 
//       {persons.map((person,index) => (
//         <li key = {index}> {person.name}</li>
//       ))}
//     </ul>
//     </div>
//   )
// }

// export default App




// import { useState } from 'react'

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas' }
//   ]) 
//   const [newName, setNewName] = useState('')

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const nameExists = persons.some((person) => person.name === newName);
//     if(nameExists) {
//       alert(`${newName} is already added to phonebook`);
//     } else {
//       setPersons([...persons,{name:newName}])
//       setNewName("");
//     }
//   }


//   const handleChange = (event) => {
//     setNewName(event.target.value)
//   }

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           name: <input type = "text" value = {newName} onChange={handleChange} />
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//     <ul> 
//       {persons.map((person,index) => (
//         <li key = {index}> {person.name}</li>
//       ))}
//     </ul>
//     </div>
//   )
// }

// export default App 









//2.8 exercise
// import { useState } from 'react'

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas', number: '123-456-7890' }
//   ]) 
//   const [newName, setNewName] = useState('')
//   const [newNumber, setNewNumber] = useState('')

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const nameExists = persons.some((person) => person.name === newName);
//     if(nameExists) {
//       alert(`${newName} is already added to phonebook`);
//     } else {
//       setPersons([...persons, { name: newName, number: newNumber }])
//       setNewName("");
//       setNewNumber("");
//     }
//   }

//   const handleNameChange = (event) => {
//     setNewName(event.target.value);
//   }

//   const handleNumberChange = (event) => {
//     setNewNumber(event.target.value);
//   }

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           name: <input type="text" value={newName} onChange={handleNameChange} />
//         </div>
//         <div>
//           number: <input type="text" value={newNumber} onChange={handleNumberChange} />
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       <ul> 
//         {persons.map((person, index) => (
//           <li key={index}> {person.name}  {person.number}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App;




//2.9 exercise
import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';


const App = () => {
  const initialPersons = [
    { name: 'Arto Hellas', number: '123-456-7890', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ];

  const [persons, setPersons] = useState(initialPersons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameExists = persons.some((person) => person.name === newName);
    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber, id: persons.length + 1 }]);
      setNewName('');
      setNewNumber('');
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter  searchTerm = {searchTerm} handleSearchChange = {handleSearchChange}/>
        <h3> Add a new </h3>
        <PersonForm handleSubmit= {handleSubmit} newName= {newName} handleNameChange = {handleNameChange} newNumber = {newNumber} handleNumberChange = {handleNumberChange}/>
     
      <h3>Numbers</h3>
      <Persons filteredPersons = {filteredPersons} />

    </div>
  );
};

export default App;







import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))
  let val = Math.max(...vote);
 let value = vote.indexOf(val)
  //console.log(vote)

  const  onClick = () => {
    let val = Math.floor(Math.random() * anecdotes.length)
    setSelected(val)

  }
  const click = () => {
    console.log("click")
    let increase = [...vote]

   increase[selected]+=1
   setVote(increase)
console.log(vote)
  }

  
  return (
    <div>
      <h1> Anecdot of the day </h1>
      {anecdotes[selected]}
      <p> has {vote[selected]} votes </p>
      <button onClick={click}>vote</button>
      <button onClick={onClick}> next anecdote</button>
      <h1> Anecdot with most votes </h1>
      <div> {anecdotes[value]} </div>
      <div>  has {val} votes</div>

    </div>
  )
}

export default App
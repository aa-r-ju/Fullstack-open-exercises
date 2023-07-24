import { useState } from 'react'


const Statistics = ({good,neutral,bad}) => {

  return(
    <div>
    <h1> statistics</h1>
   <p> No feedback given </p>
    <p>good  {good} </p> 
    <p>neutral  {neutral} </p>
    <p> bad   {bad}</p>
    <p> all {good + neutral + bad}</p>
    <p> average {(good - bad )/ (good + neutral + bad)}</p>
    <p> positive {(good)/ (good + neutral + bad) * 100} %</p>
    </div> 
  )
}
const App = () => {
  // save clicks of each button to its own state
  const goodClick = () => {
    setGood(good + 1)
  }  
  const neutralClick = () => {
    setNeutral(neutral + 1)
  }  
  const badClick = () => {
    setBad(bad + 1)
  }  
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <div>
    <h1> give feedback</h1>
    <button onClick = {goodClick}> good </button>
    <button onClick = {neutralClick} > neutral </button>
    <button onClick = {badClick}> bad </button>
   {good || neutral || bad ?  <Statistics good = {good} neutral =  {neutral} bad = {bad}/> :   <p> No feedback given </p>}

    </div>
  )
}

export default App
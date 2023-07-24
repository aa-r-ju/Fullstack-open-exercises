import { useState } from 'react'
const StatisticLine = ({good,neutral,bad}) => {
  // const name = {padding:"5px"}
  return(
    <div>
    <h1> statistics</h1>
    <table>
      <tbody>
      <tr>
    <td>good</td>
    <td>{good}</td>
  </tr>
<tr>
  <td>neutral</td>
  <td> {neutral}</td>
</tr>
<tr> 
  <td> bad</td>
  <td> {bad}</td>
</tr>
<tr>
<td> all</td>
<td> {good + neutral + bad}</td>
</tr> 
<tr>
  <td>average</td>
  <td>{(good - bad )/ (good + neutral + bad )}</td>
</tr>
<tr> 
  <td>positive</td>
  <td>{(good) / (good + neutral + bad) * 100}</td>
</tr>
   </tbody>
    </table>
    </div>

  )
}

const Statistics = ({good,neutral,bad}) => {
  return ( <div>
<StatisticLine  good = {good} neutral={neutral} bad = {bad}/>
 </div> )
}
const Button1 = ({goodClick,neutralClick,badClick}) => {
  return (
    <div> 
          <button onClick = {goodClick}> good </button>
          <button onClick = {neutralClick} > neutral </button>
    <button onClick = {badClick}> bad </button>

         
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
    <Button1 goodClick={goodClick} neutralClick={neutralClick} badClick={badClick} />
     {good || neutral || bad ?  <Statistics good = {good} neutral =  {neutral} bad = {bad}/> :   <p> No feedback given </p>}
   

    </div>
  )
}

export default App
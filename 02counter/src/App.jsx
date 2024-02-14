import { useState } from 'react'
import './App.css'

function App() {
let [counter,setCounter]= useState(5)
const addValue = () => {
//  counter = counter + 1
if(counter>=20){
 setCounter(counter)
}
else
{
  setCounter(counter + 5 )}

} 
const removeValue = () =>{
  //counter = counter -1
  if(counter<=0){
    setCounter(counter)
  }
  else{
  setCounter(counter - 5)}
}
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value :{counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br/><br/>
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App

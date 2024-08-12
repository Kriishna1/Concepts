import { useState } from 'react'

import './App.css'

function App() {
  let [counter,setCounter]=useState(10)
  const addValue=()=>{
    if(counter<20){ setCounter(counter+1)}
    else{return 'you are at max limit'}
   
  }

  const removedValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    
  }



  return (
    <>
     <h1 className="text-xl font-bold underline bg-[#0888]">
    Hello world!
  </h1>
    <h2> counterValue:{counter} </h2>
     <button onClick={addValue} >
      addValue:{counter}
     </button>
     <br />
     <button onClick={removedValue} >
      removedValue:{counter}

     </button>

     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>



     <button className="bg-white-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>

     <footer>{counter} </footer>




     
    
    </>
  )
}

export default App

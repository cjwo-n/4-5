import React from 'react';
import { useState } from 'react';
import '../css/App.css';

// const Calculator = ({AddCalculator,RemoveCalculator}) =>{
// return <h1>계산기</h1>

// }
// function Calculator(props) {
//   return <div><h1>계산기</h1>{props.AddCalculator}{props.RemoveCalculator}</div>;
// }

function AddCalculator() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const handleNum1 = (e) =>{
    const newNum1 = parseInt(e.target.value)
    setNum1(newNum1);
  }
  const handleNum2 = (e) =>{
    const newNum2 = parseInt(e.target.value)
    setNum2(newNum2);
  }

  return (
    <div >
      <h2>더하기</h2>
      <input type="number" name="name1" value={num1} onChange={handleNum1}/>
      <input type="number" name="name2" value={num2} onChange={handleNum2}/>
      결과 : {num1 + num2}
    </div>
  );
}
function RemoveCalculator(){
  const [num3, setNum3] = useState(0)
  const [num4, setNum4] = useState(0)

  const handleNum3 = (e) =>{
    const newNum3 = parseInt(e.target.value)
    setNum3(newNum3);
  }
  const handleNum4 = (e) =>{
    const newNum4 = parseInt(e.target.value)
    setNum4(newNum4);
  }

  return (
    <div >
      <h2>빼기</h2>
      <input type="number" name="name3" value={num3} onChange={handleNum3}/>
      <input type="number" name="name4" value={num4} onChange={handleNum4}/>
      결과 : {num3 - num4}
    </div>
  );
}
function App () {
  return (
    <div>
      <h1>
        계산기1
      </h1>
      <AddCalculator/>
      
      <hr/>
      <h1>
        계산기2
      </h1>
      <RemoveCalculator/>
    </div>
    
  )
  
}
export default App;
import React from 'react';
import { useState } from 'react';
import '../css/App.css';

// const Calculator = ({AddCalculator,RemoveCalculator}) =>{
// return <h1>계산기</h1>
// }

//AddCalculator 컴포넌트와 RemoveCalculator 컴포넌트의 공통된 값들을 전 부 props 받도록함 
function AddCalculator(props) {   //덧셈 계산기 컴포넌트 정의
  return(
    <div>
      <h2>더하기</h2>
      {/* props로 num1,num2,handleNum1, handleNum2 전달 */}
      <input type="number" name="name1" value={props.num1} onChange={props.handleNum1}/>
      <input type="number" name="name2" value={props.num2} onChange={props.handleNum2}/>
      결과 : {props.num1 + props.num2}
    </div>
    
  );
}

function RemoveCalculator(props){
  return (
    <div >
      <h2>빼기</h2>
      <input type="number" name="name1" value={props.num1} onChange={props.handleNum1}/>
      <input type="number" name="name2" value={props.num2} onChange={props.handleNum2}/>
      결과 : {props.num1 - props.num2}
    </div>
  );
}


  
// function Calculator() {
//   return (
//   <div>
//     <h1>
//       계산기1
//     </h1>
//     <AddCalculator/>
    
//     <h1>
//       계산기2
//     </h1>
//     <RemoveCalculator/>
//   </div>
//   );
// }

// function App () {
//   return (
//     <Calculator/>
//   )
// }


function App () {

    const [num1,setNum1] = useState(0)
    const [num2,setNum2] = useState(0)
    const handleNum1 =(e) => {
      const newNum1 = parseInt(e.target.value)
      setNum1(newNum1)
      
    }//setNum1 함수를 호출해 상태를 업데이트하여 
    //num1 입력값이 변경될때마다 실행되는 이벤트 핸들러 정의

    const handleNum2 = (e) =>{
      const newNum2 = parseInt(e.target.value)
      setNum2(newNum2)
    }
  //num2 입력값이 변경될 때마다 실행되는 이벤트 핸들러 정의
    return(//App 컴포넌트의 랜더링 결과를 정의
      <div>
        <h1>계산기</h1>
        <AddCalculator num1 ={num1} num2={num2} handleNum1={handleNum1} handleNum2={handleNum2}/>
        <RemoveCalculator num1 ={num1} num2={num2} handleNum1={handleNum1} handleNum2={handleNum2}/>
      </div>
    )
}

export default App;

//빼기가 숙제 props 사용해서 
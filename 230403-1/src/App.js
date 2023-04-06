import React from 'react';
import { useState } from 'react';
import './App.css';

//state 끌어올리기 (lifting-state-up)
function AddCalculator() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  //useState hook 초기값 생략하면 해당 state 초기값은 undefined 됨
  //이떄 컴포넌트가 렌더링될때 해당 state 값이 undefined에서 첫번째 전달인자로
  //지정한 값으로 설정됨
  const handleNum1 = (e) =>{
    const newNum1 = parseInt(e.target.value)
    setNum1(newNum1);
  }
  const handleNum2 = (e) =>{
    const newNum2 = parseInt(e.target.value)
    setNum2(newNum2);
  }
  //두개의 이벤트 핸들러 함수 handleNum1 과 handleNum2를 정의함
  //사용자가 두개의 입력 필드에 입력할 때마다 호출됩니다
  //이 함수들은 입력 값의 문자열을 parseInt를 사용하여 정수로 변환
  //해당 값에 맞는 상태 업데이트 함수(setNum1또는 setNum2)를 사용해
  
  // state 값을 업데이트함
  // javascript 에서 문장의 끝에 세미콜론을 붙이지 않아도 실행이 가능함
  // 따라서 ;을 생량해도 문제 없음
  // 코드의 가독성을 높이기 위해 일관성있게 세미콜론 사용하는 것이 좋다

  return (
    <div >
      <h2>더하기</h2>
      <input type="number" name="name1" value={num1} onChange={handleNum1}/>
      <input type="number" name="name2" value={num2} onChange={handleNum2}/>
      결과 : {num1 + num2}
    </div>

  );
}
function App () {
  return (
    <div>
      <h1>
        계산기
      </h1>
      <AddCalculator/>
    </div>
  )
}

export default App;

//빼기가 숙제 props 사용해서 
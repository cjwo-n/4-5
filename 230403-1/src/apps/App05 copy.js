import React from 'react';
import { useState } from 'react';
import '../css/App.css';

export default function App(props){
  return (
    <div>부모 컴포넌트
      <Child/>
      
    </div>
  );
}
const Child = () => {
  const[count, setCount] = useState(0)
  const increase = () => {
    setCount(count + 1);
  };
  return(
    <div>자식 컴포넌트
      <span>{count}</span>
      <button onClick={increase}>증가</button>
      <GrandChild count={count}/>
      <GrandpaChild count={count}/>
    </div>
  )
}
const GrandChild = ({count}) =>{
  return <div>손자 컴포넌트<span>{count}</span></div>
}
const GrandpaChild = ({count}) =>{
  return <div><span>{count}컴포넌트</span><span>{count}</span></div>
}

//App 컴포넌트는 부모 컴포넌트입니다 여기에서 Child 컴포넌트를 렌더링합니다
// Child 컴포넌트는 자식 컴포넌트 입니다
// 이컴포넌트는 useState를 사용해 count 상태를 관리한다
// 초기값은 0
// increase 함수는 Child 컴포넌트 내에 정의되어 있습니다
// 이함수는 count 상태값을 1증가시킴
// Child 컴포넌트에서 증가 버튼이 렌더링된다
// 이 버튼을 클릭하면 increase 함수가 호출되고 count 상태 값이 증가
// Child 컴포넌트는 또한 GrandChild 컴포넌트를 렌더링함
// 이컴포넌트는 손자 컴포넌트
// GrandChild 컴포넌트는 숫자 변경과 관련된 기능이 없어 상태를 관리하지 않고
// 단순히 손자 컴포넌트라는 택스르 렌더링함


// 해보기 
// 기본적으로 React에서 부모 컴포넌트는 자식 컴포넌트에게 prop을 통해 데이터 전달하며
// 각 컴포넌트는 독립적으로 상태를 관리할수 있음
// 이전 예제에서는 child  컴포넌트에서만 count 상태가 관리되고 있고
// child 컴포넌트의 숫자만 변경되었다

// 만약 부모 컴포넌트의 상태가 자식과 손자 컴포넌트에도 영향을 미치길 원한다
// 상태를 부모 컴포넌트에서 관리하고 자식 및 손자 컴포넌트로 prop 통해전달
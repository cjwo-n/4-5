import React from 'react';
import { useState } from 'react';
import '../css/App.css';

export default function App(){
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
      <GrandChild/>
    </div>
  )
}
const GrandChild =() =>{
  return <div>손자 컴포넌트</div>
}

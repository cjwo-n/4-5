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
    </div>
  )
}
const GrandChild = ({count}) =>{
  return
}
const GrandpaChild = ({count}) =>{
  return
}

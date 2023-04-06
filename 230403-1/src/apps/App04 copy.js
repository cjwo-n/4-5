import React from 'react';
import Hello from './App04.js';

//color와 name 은 React 컴포넌트 간에 데이터를 전달하는데 사용되는 속성
//props(properties)

function App(){
  return (
    <Hello name='react' color="red"/>
  )
}
export default App;


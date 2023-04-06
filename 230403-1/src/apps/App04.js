import React from 'react';
import { useState } from 'react';
import '../css/App.css';

function Hello({color, name}){
  return<div style={{color}}>안녕하세요{name}</div>
}

export default Hello;

//color와 name 은 React 컴포넌트 간에 데이터를 전달하는데 사용되는 속성
//props(properties)


//Hello 컴포넘트에 'react'라는 이름과 'red'라는 색상을 명시적으로 전달
//App.js 가 상위 컴포넌트
// App 컴포넌트내에서 Hello 컴포넌트를 렌더링하고 있으며
// 이때 Hello 컴포넌트에 속성을 전달하고 있습니다
// 이렇게 다른 컴포넌트를 포함하는 컴포넌트를 상위 컴포넌트라고 한다
// 반대로 다른 컴포넌트에 포함되어 있는 컴포넌트를 하위 컴포넌트라 함
// react 에서 컴포넌트 구조는 일반저그올 상위 컴포넌트에서 하위 컴포넌트로 흐름
// 상위 컴포넌트는 하위 컴포넌트를 포함하고 하위 컴포넌트 속성을 전달
// 이러한 방식을 통해 데이터ㄹ와 함수를 컴포넌트 간에 전달 가능함
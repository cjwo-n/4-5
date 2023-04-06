import React from 'react';
import { useState } from 'react';
import '../css/App.css';

function App() {
  let [글제목,b] = useState(['헬스장 맛집', '강서우동 맛집', '파이썬 독학'])
  let posts = '송파 짐';
  let [발행] = useState(['금일',"오전"])


  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
      <div className='list'>
        <h4>{글제목[0]}</h4>
        <p>{posts}</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>{발행[0]}</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>{발행}{발행[2]}</p>
      </div>
    </div>
  );
}


export default App;

//빼기가 숙제 props 사용해서 
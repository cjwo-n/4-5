import React from 'react';
import { useState } from 'react';
// import '../css/App.css';

function Header({title, body}){
  console.log(title, body)
return (
<header>
  <h1><a href='/'>hello</a></h1>
</header>
      )
}
function Nav(){
  return(
  <nav>
    <ol>
      <li><a href='/read/1'>html</a></li>
      <li><a href='/read/2'>css</a></li>
      <li><a href='/read/3'>java</a></li>
    </ol>
  </nav>
  )
}

function Article(props){ 
  return<article>
        <h2>{props.title}</h2>
        hello, web{props.body}
      </article>
}

function App() {
  return(
    <div>
      <Header title='react' body='sds'/>
      <Nav/>
      <Article title='welcome' body='hello, yg'/>
    </div>
  )
}


export default App;


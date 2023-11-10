//  /// <reference path="./main.d.ts"/>
//  파일의 이름과 모듈의 이름이 다를경우
// npm install -D @types/uuid(모듈의 이름)

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { v4 } from 'uuid';

function App() {
  console.log(v4);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

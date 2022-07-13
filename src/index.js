import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root 엘리먼트가 최상위가 된다.

//ReactDOM 이 내부의 컴포넌트들을 'root' 엘리먼트에 렌더한다.

// 1. import 를 이용해 App 컴포넌트를 불러온다.
// 2. <컴포넌트이름/> 을 이용해 컴포넌트를 사용한다.

// root 엘리먼트 아래에 컴포넌트를 추가한다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'


const myName:string =" Nguyễn Văn Trăm";
const myStatus: boolean = true;
const myAge: number = 20;
const product: { id: number, name:string} = {id:1, name:"A"};



ReactDOM.render(
 <div>
      <h1>Hello {myName}</h1>
      <div>{myStatus ? "Nam" : "Nữ"}</div>
      <div>{myAge}</div>
      <div>{product.name}</div>
  </div>,document.querySelector('#root')
);

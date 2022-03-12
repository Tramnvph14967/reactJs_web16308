import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'

function App() {
  return (
    <div className="App">
        <ShowInfo name="Nguyễn Văn Trăm" age={20}/>
    </div>
  )
}

export default App
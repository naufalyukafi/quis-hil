import React from 'react'
import "./App.scss"
import { background, profile } from './images'
 
const App = () => {
    return (
    <div className="container" 
      style={{
        backgroundImage: `url('${background}')`,
      }}>
      <h1 style={{fontSize: 100}}>Hello World!</h1>
      <img src={profile} alt="image" style={{objectFit: 'cover'}} />
    </div>
  )
}

export default App
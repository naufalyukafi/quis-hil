import { IContainerLayout } from '@/helper/types'
import { background } from '@/images'
import React from 'react'
import { Link } from 'react-router-dom'
import './Container.scss'

const Container = ({children}: IContainerLayout) => {
  return (
    <div className="container" 
      style={{
        backgroundImage: `url('${background}')`,
      }}
    >
    <Link to="/" style={{color: '#fff', textDecoration: 'none'}}><h1>Quiz Hil</h1></Link>
      <div className='children'>{children}</div>
    </div>
  )
}

export default Container
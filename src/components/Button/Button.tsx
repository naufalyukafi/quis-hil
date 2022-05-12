import { IButton } from '@/helper/types'
import React from 'react'
import './Button.scss'

const Button = ({type, title, onClick}:IButton) => {
  return (
    <div>
        <button onClick={onClick} className={`button button-${
            type === 'default' ? 'default' : 
            type === 'primary' ? 'primary' : 
            type === 'secondary' && 'secondary'}`}>
            {title}
        </button>
    </div>
  )
}

export default Button
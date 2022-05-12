import { ICard } from '@/helper/types'
import React from 'react'
import 'Card.scss'

const Card = ({title}: ICard) => {
  return (
    <div className='container__card'>
        <h4>{title}</h4>
    </div>
  )
}

export default Card
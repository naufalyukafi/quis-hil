import React from 'react'
import { Container } from '@/components'
import './ListQuiz.scss'
import Card from '@/components/Card/Card'

const ListQuiz = () => {
  return (
    <Container>
      <div className='quiz'>
        <h2>Gass..</h2>
        <div className='quiz__card'>
          <Card title="Al-Waqiah" />
          <Card title="Al-Waqiah" />
        </div>
      </div>
    </Container>
  )
}

export default ListQuiz

import React from 'react'
import { profile } from '@/images'
import { Container } from '@/components'
import Button from '@/components/Button/Button'
import './Home.scss'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className='container__home'>
        <img className='home__image' src={profile} alt="Kuis Hafidz IT Lumajang" />
        <div style={{textAlign: 'center'}}>
          <h2>Kumpulan Latihan Soal</h2>
          <h3>Hafidz IT Lumajang</h3>
          <div className='home__button'>
            <Button onClick={() => navigate('/kuis')} type="primary" title="Mulai" />
            <Button onClick={() => navigate('/contibute-kuis')} type="secondary" title="Kontribusi Soal Kuy" />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home
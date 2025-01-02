import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'


const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [loading, setLoading] = useState(true) // Track loading state

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
      </div>
    </>
  )
}

export default Portfolio

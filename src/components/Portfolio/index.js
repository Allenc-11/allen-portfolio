import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import portfolioData from '../../data/portfolio.json'
const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const title = 'Portfolio'.split('')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Cleanup function
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  console.log(portfolioData);
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={title}
            idx={15}
          />
        </h1>
        <div>{/*renderPortfolio()*/}</div>
      </div>
    </>
  )
}

export default Portfolio

import './index.scss'
import LogoTitle from '../../assets/images/logo-a.png'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import resume from '../../assets/images/Resume.pdf'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'llen'.split('')
  const jobArray = 'software engineer.'.split('')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    // Cleanup function
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Hi,'.split('')}
              idx={10}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"I'm".split('')}
              idx={13}
            />
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h2>Embracing the Journey of Becoming a Software Developer.</h2>
          <div className="button-container">
            <Link to="contact" className="flat-button">
              CONTACT ME
            </Link>
            <a href={resume} target="_blank" className="flat-button">
              RESUME
            </a>
          </div>
        </div>
        <Logo />
      </div>
    </>
  )
}
export default Home

import './index.scss'
import LogoTitle from '../../assets/images/logo-a.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['l', 'l', 'e', 'n']
  const jobArray = "Software Engineer".split("")

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
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={19}
            />
          </h1>
          <h2>Embracing the Journey of Becoming a Software Developer.</h2>
          <Link to="contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
    </>
  )
}
export default Home

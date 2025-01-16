import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  //Title of the page
  const title = 'About me'.split('')

  //Letter loading animation
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Cleanup function
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      {/* Main container for the about page */}
      <div className="container about-page">
        {/*Text container for the body*/}
        <div className="text-zone">
          <h1>
            {/* AnimatedLetters component renders the title */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={title}
              idx={15}
            />
          </h1>
          <p>
            Hi! I’m Allen, a second-year computer science student with a passion
            for software development and problem-solving. I’m currently pursuing
            a minor in mathematics to further strengthen my analytical and
            logical thinking skills.
          </p>
          <p>
            My journey into computer science started with a fascination for how
            technology works and the impact it has on our daily lives. Over the
            past two years, I’ve built a solid foundation in programming
            languages like Java, Python, and C/C++, and I’m now developing my
            expertise in front-end technologies such as HTML/CSS, React.js, and
            Node.js. These skills have allowed me to work on projects that focus
            on creating user-friendly and dynamic web applications.
          </p>
          <p>
            After graduation, I hope to work as a software engineer at a tech
            company, where I can continue to develop my skills and contribute to
            innovative projects.
          </p>
        </div>
        <div className="stage-cube-cont">
          {/* Starry background */}
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          {/* Rotating cube faces with icons */}
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#215732" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4B28" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

import React from 'react'
import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  const handleMouseOver = (e) => {
    const target = e.target

    // Add the "hovered" class to trigger the animation
    target.classList.add('hovered')

    // Remove the "hovered" class once the animation ends
    const handleAnimationEnd = () => {
      target.classList.remove('hovered')
      target.removeEventListener('animationend', handleAnimationEnd)
    }

    target.addEventListener('animationend', handleAnimationEnd)
  }

  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i + idx}`}
          onMouseOver={handleMouseOver}
        >
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters

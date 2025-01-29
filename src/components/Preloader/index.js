import './index.scss'
import preLoaderAnim from './animations'
import React, { useEffect } from 'react'

const Preloader = ({ onAnimationComplete }) => {
  useEffect(() => {
    preLoaderAnim(onAnimationComplete)
  }, [])

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Dream </span>
        <span>It, </span>
        <span>Build </span>
        <span>It </span>
      </div>
    </div>
  )
}

export default Preloader

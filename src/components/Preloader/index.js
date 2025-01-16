import React, { useEffect } from 'react'
import { preLoaderAnim } from './animations'
import './index.scss'

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim()
  }, [])

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Dream </span>
        <span>It, </span>
        <span>and </span>
        <span>Build </span>
        <span>It </span>
      </div>
    </div>
  )
}

export default Preloader

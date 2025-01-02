import React, { useState, useEffect } from 'react'
import Logo from '../../assets/images/logo-a3d.png'
import { preLoaderAnim } from './animations'
import './index.scss'

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim()
  }, [])

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Welcome </span>
        <span>to </span>
        <span>My </span>
        <span>Website </span>
      </div>
    </div>
  )
}

export default Preloader

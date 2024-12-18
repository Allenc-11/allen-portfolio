import React, { useEffect } from 'react'
import './index.scss'

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor')

    const handleMouseMove = (e) => {
      const x = e.pageX
      const y = e.pageY

      if (cursor) {
        cursor.style.top = `${y}px`
        cursor.style.left = `${x}px`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <div className="cursor"></div>
}

export default Cursor

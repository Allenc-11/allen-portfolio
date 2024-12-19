import React, { useEffect } from 'react'
import './index.scss'

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') //Select cursor div

    //get cursor position
    const handleMouseMove = (e) => {
      const x = e.pageX
      const y = e.pageY
      //make the cursor div follow the position
      if (cursor) {
        cursor.style.top = `${y}px`
        cursor.style.left = `${x}px`
      }
    }

    document.addEventListener('mousemove', handleMouseMove) //Add mousemove EventListener

    //clean up the EventListener
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <div className="cursor"></div>
}

export default Cursor

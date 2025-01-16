import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Preloader from './components/Preloader'
import { useEffect, useState } from 'react'

function App() {
  const [isAppVisible, setIsAppVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppVisible(true)
    }, 5250)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader />
      {isAppVisible && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      )}
    </>
  )
}

export default App

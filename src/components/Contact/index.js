import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  useMap,
} from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  const position = [43.65, -79.38]
  const radius = 22000
  const title = 'Contact me'.split('')

  function ZoomToMarker({ position }) {
    const map = useMap()

    const handleClick = () => {
      map.setView(position, 9)
    }

    return (
      <Marker position={position} eventHandlers={{ click: handleClick }}>
        <Popup>
          Allen lives in this area, come over for a cup of coffee :)
        </Popup>
      </Marker>
    )
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    // Cleanup function
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    // Retrieve the last email timestamp from local storage
    const lastEmailTimestamp = localStorage.getItem('lastEmailTimestamp')
    const now = Date.now()

    if (lastEmailTimestamp && now - lastEmailTimestamp < 10 * 60 * 1000) {
      const timeRemaining = Math.ceil(
        (10 * 60 * 1000 - (now - lastEmailTimestamp)) / 1000 / 60
      )
      alert(
        `You can only send one email every 10 minutes. Please wait ${timeRemaining} more minutes.`
      )
      return
    }

    emailjs
      .sendForm(
        'service_8d655fv',
        'contact_form',
        refForm.current,
        'KT7m-dIVgZ7EUKJrx'
      )
      .then(
        () => {
          // Save the current timestamp in local storage
          localStorage.setItem('lastEmailTimestamp', now)
          alert('MESSAGE SUCCESSFULLY SENT!')
          window.location.reload(false)
        },
        () => {
          alert('FAILED TO SEND THE MESSAGE, PLEASE TRY AGAIN')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={title}
              idx={15}
            />
          </h1>
          <p>
            I am open to exploring any opportunities and look forward to
            connecting with you. If you have any requests, questions, or ideas
            to share, please don't hesitate to reach out using the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Allen Chen,
          <br />
          Toronto, Ontario <br />
          Canada
          <br />
          <span>allenjfchen1121@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={position} zoom={9} scrollWheelZoom={true}>
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.carto.com/">CARTO</a>'
            />
            <ZoomToMarker position={position} />
            <Circle
              center={position}
              radius={radius}
              pathOptions={{
                color: 'blue',
                fillColor: 'lightblue',
                fillOpacity: 0.2,
                weight: 0.5,
              }}
            />
          </MapContainer>
        </div>
      </div>
    </>
  )
}

export default Contact

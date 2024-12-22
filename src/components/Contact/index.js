import { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const position = [43.65348991881874, -79.38396132508541]
  const refForm = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
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

    //
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
          alert('MESSAGE SUCCESSFULLY SENT!')
          // Save the current timestamp in local storage
          localStorage.setItem('lastEmailTimestamp', now)
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
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
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
          <MapContainer
            center={position}
            zoom={8}
            scrollWheelZoom={true}
            maxZoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>
                Allen lives in this area, come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

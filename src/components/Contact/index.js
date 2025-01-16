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
  const refForm = useRef()
  const position = [43.65, -79.38]
  const radius = 22000
  const title = 'Contact me'.split('')

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

  //Create a map with with zoom to marker function
  const CreateMap = ({ position }) => {
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

  const sendEmail = (e) => {
    e.preventDefault()

    // Retrieve the last email timestamp from local storage
    const lastEmailTimestamp = localStorage.getItem('lastEmailTimestamp')
    const now = Date.now()

    // Wait 10 minutes before sending the next email
    const time = 10 * 60 * 1000;
    if (lastEmailTimestamp && now - lastEmailTimestamp < time) {
      const timeRemaining = Math.ceil(
        (10 * 60 * 1000 - (now - lastEmailTimestamp)) / 1000 / 60
      )
      showMessage(
        `You can only send one email every 10 minutes. Please wait ${timeRemaining} more minutes.`,
        'error'
      )
      return
    }

    const submitButton = refForm.current.querySelector("input[type='submit']") //Select the button
    submitButton.disabled = true //disable button to avoid email spam
    submitButton.value = 'SENDING...' // Provide feedback to the user

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

          // Clear the form
          refForm.current.reset()

          // Show a success message
          showMessage('MESSAGE SUCCESSFULLY SENT!', 'success')

          // Re-enable the button
          submitButton.disabled = false
          submitButton.value = 'SEND' // Restore the original button text
        },
        () => {
          // Show an error message
          showMessage('FAILED TO SEND THE MESSAGE, PLEASE TRY AGAIN', 'error')

          // Re-enable the button
          submitButton.disabled = false
          submitButton.value = 'SEND' // Restore the original button text
        }
      )
  }

  // Helper function to show messages
  const showMessage = (message, type) => {
    // Create the message element
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageElement.style.padding = '10px'
    messageElement.style.marginTop = '10px'
    messageElement.style.position = 'fixed' // Fixed positioning to avoid conflicts
    messageElement.style.top = '20px' // Adjust placement
    messageElement.style.left = '50%' // Center horizontally
    messageElement.style.transform = 'translateX(-50%)' // Center alignment correction
    messageElement.style.borderRadius = '5px'
    messageElement.style.fontSize = '16px'
    messageElement.style.zIndex = '9999' // Higher z-index for visibility
    messageElement.style.maxWidth = '90%' // Optional: prevent overflow on small screens
    messageElement.style.textAlign = 'center'

    // Apply styles based on the message type
    if (type === 'success') {
      messageElement.style.color = 'white'
      messageElement.style.backgroundColor = 'green'
    } else if (type === 'error') {
      messageElement.style.color = 'white'
      messageElement.style.backgroundColor = 'red'
    }

    // Append the message to the body (or any specific container)
    document.body.appendChild(messageElement)

    // Remove the message automatically after 3 seconds
    setTimeout(() => {
      messageElement.remove()
    }, 3000)
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
          <MapContainer center={position} zoom={9} scrollWheelZoom={false}>
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.carto.com/">CARTO</a>'
            />
            <CreateMap position={position} />
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

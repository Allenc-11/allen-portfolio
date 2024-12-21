import './index.scss'
import LogoTitle from '../../assets/images/logo-a.png'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm 
          <img src={LogoTitle} alt="developer" />
          llen
          <br />
          web developer
        </h1>
        <h2>Seeking Summer 2025 Software Engineer Intership Opportunities</h2>
        <Link to="contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}
export default Home

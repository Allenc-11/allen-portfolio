import { Link } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={Logo} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="Allen" />
    </Link>
  </div>
)

export default Sidebar

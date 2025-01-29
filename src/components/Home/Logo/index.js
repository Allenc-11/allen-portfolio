import './index.scss'
import Photo from '../../../assets/images/photo.png'
import { motion } from 'framer-motion'

const Logo = () => {
  const radius = 250
  return (
    <div className="logo-container">
      <img className="solid-logo" src={Photo} alt="developer photo" />
      <img className="blur-logo" src={Photo} alt="" />
      <motion.svg
        width="506"
        height="506"
        viewBox="0 0 506 506"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r={radius}
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: '24 10 0 0' }}
          animate={{
            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </motion.svg>
    </div>
  )
}

export default Logo

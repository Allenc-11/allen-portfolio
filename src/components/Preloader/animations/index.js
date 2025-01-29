import gsap from 'gsap'

const tl = gsap.timeline()

// Preloader Animation
const preLoaderAnim = (onAnimationComplete) => {
  tl.to('body', {
    duration: 0.1,
    ease: 'power3.inOut',
  })
    .to('.texts-container', {
      duration: 0,
      opacity: 1,
      ease: 'Power3.easeOut',
    })
    /* Text slideup time */
    .from('.texts-container span', {
      duration: 1,
      delay: 1,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: 'Power3.easeOut',
    })
    /* Text slidedown time */
    .to('.texts-container span', {
      duration: 1,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: 'Power3.easeOut',
    })
    /* Screen drop time*/
    .to('body', {
      duration: 1.3,
      ease: 'power3.inOut',
    })
    .to(
      '.preloader',
      {
        duration: 1.5,
        height: '0vh',
        ease: 'Power3.easeOut',
      },
      '-=2'
    )
    .to('.preloader', {
      duration: 0,
      css: { display: 'none' },
      onComplete: () => {
        if (typeof onAnimationComplete === 'function') {
          onAnimationComplete() // Ensure it's only called if it's a function
        }
      },
    })
}

export default preLoaderAnim

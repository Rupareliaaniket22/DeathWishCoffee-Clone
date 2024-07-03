// SlideInComponent.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SlideInComponent = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ y: '30%', opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default SlideInComponent

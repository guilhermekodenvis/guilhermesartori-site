import "./styles.css"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type AnimatedDivProps = {
    children: JSX.Element
}

export const AnimatedDiv: React.FC<AnimatedDivProps> = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

  return (
    <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeInOut" }}
    >
        {children}
    </motion.div>
  )
}
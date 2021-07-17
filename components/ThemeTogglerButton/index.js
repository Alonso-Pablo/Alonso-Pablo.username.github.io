import { motion, useCycle } from 'framer-motion';

export default function ThemeTogglerButton() {


  const [ sun, cycleSun ] = useCycle(0, 48);
  const [ moon, cycleMoon ] = useCycle(0, 56);
  const [ showHidden, cycleShowHidden ] = useCycle(0, 1);

  const handleTap = () => {
    cycleSun();
    cycleMoon();
    cycleShowHidden();  
  };
  
  const Moon = {
    show: {
      x: sun,
      opacity: showHidden,
      transition: {
        duration: 0.8
      }
    }
  }

  const Sun = {
    show: {
      x: moon,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <>
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="77" height="28" viewBox="0 0 77 28" fill="none"
        onTap={handleTap} >
        
        
        <motion.circle cx="15" cy="14" r="9" fill="#777777"
          variants={Moon} animate="show"/>

        <motion.circle  cx="15" cy="14" r="9" fill="white"
          variants={Sun} animate="show" />

        <rect x="76.3333" y="0.5" width="27" height="75" rx="13.5" transform="rotate(90 76.3333 0.5)" stroke="#777777"/>

      </motion.svg>
    </>
  )

}
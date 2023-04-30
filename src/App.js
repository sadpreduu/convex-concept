// import './App.css';
// import { motion } from 'framer-motion';
// import Section1 from './sections/one';
// import Section2 from './sections/two';
// import Section3 from './sections/three';
// // import ScrollHorizontal from 'react-scroll-horizontal';


// function App() {

//   const sectionWidth = window.innerWidth;

//   return (
//     <div style={{ position: "relative", width: "100vw", height: "100vh", overflowX: "hidden" }}>
//       <motion.div
//         style={{ position: "absolute", top: 0, left: 0, width: `${sectionWidth}px`, height: "100%" }}
//         animate={{ x: 0 }}
//         initial={{ x: 0 }}
//         exit={{ x: `-${sectionWidth}px` }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//       >
//         <Section1 />
//       </motion.div>

//       <motion.div
//         style={{ position: "absolute", top: 0, left: `${sectionWidth}px`, width: `${sectionWidth}px`, height: "100%" }}
//         animate={{ x: 0 }}
//         initial={{ x: `${sectionWidth}px` }}
//         exit={{ x: `-${sectionWidth}px` }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//       >
//         <Section2 />
//       </motion.div>

//       <motion.div
//         style={{ position: "absolute", top: 0, left: `${sectionWidth * 2}px`, width: `${sectionWidth}px`, height: "100%" }}
//         animate={{ x: 0 }}
//         initial={{ x: `${sectionWidth}px` }}
//         exit={{ x: `${sectionWidth}px` }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//       >
//         <Section3 />
//       </motion.div>
//     </div>
//   );
// }

// export default App;

import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Section1 from './sections/one';
import Section2 from './sections/two';
import Section3 from './sections/three';

function App() {
  const sectionsRef = useRef([]);

  useLayoutEffect(() => {
    const setHeight = () => {
      sectionsRef.current.forEach((section) => {
        section.style.height = `${window.innerHeight}px`;
      });
    };

    setHeight();
    window.addEventListener('resize', setHeight);
    return () => {
      window.removeEventListener('resize', setHeight);
    };
  }, []);

  return (
    <div className="scroll-container">
      <motion.div className="scroll-content">
        <div className="section" ref={(el) => (sectionsRef.current[0] = el)}>
          <Section1 />
        </div>
        <div className="section" ref={(el) => (sectionsRef.current[1] = el)}>
          <Section2 />
        </div>
        <div className="section" ref={(el) => (sectionsRef.current[2] = el)}>
          <Section3 />
        </div>
      </motion.div>
    </div>
  );
}

export default App;
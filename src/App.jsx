import React from 'react';
import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react'; 
import Section1 from './sections/one';
import Section2 from './sections/two';
import Section3 from './sections/three';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.5,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: { min: 0.1, max: 0.5 },
          delay: 0.1,
        },
      },
    });

    sections.forEach((section, index) => {
      const position = -index * 100;
      timeline.to(container, { xPercent: position, duration: 1 }, index / (sections.length - 1));
    });
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <div className="section" ref={(el) => (sectionsRef.current[0] = el)}>
        <Section1 />
      </div>
      <div className="section" ref={(el) => (sectionsRef.current[1] = el)}>
        <Section2 />
      </div>
      <div className="section" ref={(el) => (sectionsRef.current[2] = el)}>
        <Section3 />
      </div>
    </div>
  );
}

export default App;

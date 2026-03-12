import React, { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animationId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animationId = requestAnimationFrame(animateRing);
    };

    const onMouseDown = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(0.5)';
      ring.style.transform = 'translate(-50%, -50%) scale(1.5)';
    };

    const onMouseUp = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    const onMouseEnterLink = () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1.8)';
      ring.style.opacity = '0.5';
    };

    const onMouseLeaveLink = () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.opacity = '1';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    animationId = requestAnimationFrame(animateRing);

    // Add hover effect on interactive elements
    const addLinkListeners = () => {
      const links = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
      links.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterLink);
        el.addEventListener('mouseleave', onMouseLeaveLink);
      });
    };

    addLinkListeners();

    // Observe DOM changes to add listeners to new elements
    const observer = new MutationObserver(addLinkListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  const color = theme.cursorColor || '#5B78F6';

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          backgroundColor: color,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s ease, background-color 0.3s ease',
          mixBlendMode: 'difference',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: '32px',
          height: '32px',
          border: `2px solid ${color}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.3s ease, opacity 0.3s ease, border-color 0.3s ease',
          opacity: 0.8,
        }}
      />
    </>
  );
};

export default CustomCursor;

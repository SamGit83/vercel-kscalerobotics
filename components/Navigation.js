import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const lastScrollY = useRef(0);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after click
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${!isVisible ? styles.navbarHidden : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Image src="/logo.png" alt="Kscale Robotics Logo" width={60} height={60} className={styles.logo} />
          <span className={styles.companyName}>Kscale Robotics</span>
        </Link>
        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <button onClick={() => scrollToSection('pilot-form')} className={styles.navLink}>About</button>
          <div ref={contactRef} style={{ position: 'relative' }}>
            <button onClick={() => setIsContactOpen(!isContactOpen)} className={styles.navLink}>Contact</button>
            {isContactOpen && (
              <div className={styles.contactDropdown}>
                <a href="https://linkedin.com/company/kscale-robotics" target="_blank" rel="noopener noreferrer" className={styles.dropdownLink} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://x.com/kscalerobotics" target="_blank" rel="noopener noreferrer" className={styles.dropdownLink} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>𝕏 X</a>
              </div>
            )}
          </div>
        </div>
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
    </nav>
  );
}
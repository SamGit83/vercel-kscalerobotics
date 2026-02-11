import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

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
          <span>Kscale robotics</span>
        </Link>
        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <button onClick={() => scrollToSection('pilot-form')} className={styles.navLink}>About</button>
          <button onClick={() => scrollToSection('pilot-form')} className={styles.navLink}>Contact</button>
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
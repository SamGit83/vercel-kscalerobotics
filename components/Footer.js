import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image src="/logo.png" alt="Kscale Robotics Logo" width={60} height={30} className={styles.logo} />
        <nav className={styles.nav}>
          <button onClick={scrollToTop} className={styles.navLink}>Home</button>
          <button onClick={() => scrollToSection('pilot-form')} className={styles.navLink}>About</button>
          <button onClick={() => scrollToSection('pilot-form')} className={styles.navLink}>Contact</button>
        </nav>
        <div className={styles.social}>
          <a href="https://linkedin.com/company/kscale-robotics" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://x.com/kscalerobotics" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">X</a>
        </div>
        <p className={styles.copyright}>© 2025 Kscale Robotics AB</p>
      </div>
    </footer>
  );
}
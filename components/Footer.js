import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image src="/logo.png" alt="Kscale Robotics Logo" width={60} height={30} className={styles.logo} />
        <div className={styles.social}>
          <a href="https://linkedin.com/company/kscale-robotics" target="_blank" rel="noopener noreferrer">in</a>
          <a href="https://x.com/kscalerobotics" target="_blank" rel="noopener noreferrer">𝕏</a>
        </div>
        <p className={styles.copyright}>© 2025 Kscale Robotics AB</p>
      </div>
    </footer>
  );
}
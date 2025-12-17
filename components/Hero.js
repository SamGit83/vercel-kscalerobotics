import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]); // Parallax effect

  const handleExplore = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const handleRequestDemo = () => {
    // Placeholder for modal
    alert('Request Pilot Demo modal placeholder');
  };

  return (
    <motion.section className={styles.hero} style={{ y }}>
      <div className={styles.backgroundSwirl}></div>
      <motion.div
        className={styles.logo}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src="/logo.png" alt="Kscale Robotics Logo" width={150} height={150} />
      </motion.div>
      <motion.h1
        className={styles.tagline}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Boost Guest Satisfaction 20-30% in Less Than a Week
      </motion.h1>
      <motion.h2
        className={styles.subheadline}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        Discover KBot for hotels, airports, and shopping centers: Cut queue wait times 15-20% with 24/7 personalized support—save on staffing and streamline operations.
      </motion.h2>
      <motion.p
        className={styles.valueTeaser}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        Request a Pilot and See the 'Wow' Factor in Action.
      </motion.p>
      <motion.div
        className={styles.robotImage}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.0 }}
      >
        <Image src="/robot.png" alt="Robot illustration in a hotel lobby" width={300} height={500} />
      </motion.div>
      <motion.div
        className={styles.ctaContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <button className={`${styles.ctaButton} ${styles.exploreButton}`} onClick={handleExplore}>
          Explore KBot
        </button>
        <button className={`${styles.ctaButton} ${styles.requestButton}`} onClick={handleRequestDemo}>
          Request Pilot Demo
        </button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
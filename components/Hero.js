import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const handleExplore = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const handleRequestDemo = () => {
    const element = document.getElementById('pilot-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section className={styles.hero} style={{ y }}>
      {/* Full-screen background image */}
      <div className={styles.backgroundImage}>
        <Image
          src="/robot.png"
          alt="KBot robot in a hotel lobby"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
          priority
          quality={90}
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className={styles.overlay}></div>

      {/* Text content centered on top */}
      <div className={styles.content}>
        <motion.h1
          className={styles.tagline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Boost Guest Satisfaction 20-30% in Less Than a Week
        </motion.h1>
        <motion.h2
          className={styles.subheadline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Discover KBot for hotels, airports, and shopping centers: Cut queue wait times 15-20% with 24/7 personalized support. Save on staffing and streamline operations.
        </motion.h2>
        <motion.p
          className={styles.valueTeaser}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Request a Pilot and See the &apos;Wow&apos; Factor in Action.
        </motion.p>
        <motion.div
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <button className={`${styles.ctaButton} ${styles.exploreButton}`} onClick={handleExplore}>
            Explore KBot
          </button>
          <button className={`${styles.ctaButton} ${styles.requestButton}`} onClick={handleRequestDemo}>
            Request Pilot Demo
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;

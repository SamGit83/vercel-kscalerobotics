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
        Kscale Robotics: Scaling Interactions for Smarter Spaces
      </motion.h1>
      <motion.h2
        className={styles.subheadline}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        KBot: Your 24/7 Meet-and-Greet Robot—Boosting Engagement and Revenue in Hotels, Airports, and Shopping Centers
      </motion.h2>
      <motion.p
        className={styles.valueTeaser}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        Solve queue delays and staff gaps with fun, personalized AI—20-30% satisfaction lift. Request a Pilot Today.
      </motion.p>
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
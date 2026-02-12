import React from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './VisionAbout.module.css';

const VisionAbout = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={styles.visionAbout} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.textColumn}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.headline}>Our Vision: Inspired by the Kardashev Scale</h2>
          <p className={styles.body}>
            At Kscale Robotics AB, we harness energy for boundless interactions. Starting with KBot, we transform high-traffic spaces like hotels and airports by solving real pains with AI-driven support and 'wow' moments that keep guests coming back.
          </p>
          <p className={styles.icp}>
            For hotels facing late-night queues, airports with flight delays, and shopping centers with low traffic: We deliver value that scales your business.
          </p>
        </motion.div>
        <motion.div
          className={styles.imageColumn}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.placeholder}>
            {/* Placeholder for timeline of KBot in action */}
            <p>Timeline Placeholder</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionAbout;
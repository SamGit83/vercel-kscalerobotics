import React from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const steps = [
    {
      number: 1,
      title: 'Greet & Engage',
      description: 'AI voice/smile',
    },
    {
      number: 2,
      title: 'Personalize',
      description: 'Guide/display info',
    },
    {
      number: 3,
      title: 'Monetize',
      description: 'Ads/revenue share',
    },
    {
      number: 4,
      title: 'Analyze',
      description: 'Data for ROI',
    },
  ];

  return (
    <section className={styles.howItWorks} ref={ref}>
      <div className={styles.container}>
        <motion.h2
          className={styles.headline}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          KBot in Action: Simple, Powerful Interactions
        </motion.h2>
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className={styles.valueTie}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p>Seamless setup—pilot ready in weeks.</p>
        </motion.div>
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Video embed or GIF placeholder */}
          <div className={styles.videoPlaceholder}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder video
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button className={styles.ctaButton}>See Demo Video</button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
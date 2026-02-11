import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import styles from './SolutionBenefits.module.css';

const SolutionBenefits = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState(0);
  const [expandedDemo, setExpandedDemo] = useState(null);

  const icps = [
    {
      title: 'Hotels',
      description: '24/7 support guides guests to rooms/amenities—boosts satisfaction 20-30%, with ad revenue from partners.',
      demo: 'Interactive demo placeholder for Hotels.',
    },
    {
      title: 'Airports/Lounges',
      description: 'Real-time flight info and gate guidance—reduces delays 15-20%, summonable for personalized help.',
      demo: 'Interactive demo placeholder for Airports/Lounges.',
    },
    {
      title: 'Shopping Centers',
      description: 'Fun interactions and local ads increase traffic 20-30%—creates \'wow\' moments for better retention.',
      demo: 'Interactive demo placeholder for Shopping Centers.',
    },
  ];

  const overallBenefits = [
    {
      title: 'Seamless Integration',
      description: 'with existing systems for enhanced operational efficiency. This allows quick deployment and adaptation to various industrial environments without disrupting workflows.'
    },
    {
      title: 'Interactive Display',
      description: 'Large 15-17 inch interactive screen for clear information display and safety alerts. It provides intuitive navigation and emergency guidance, reducing confusion and improving user safety in busy settings.'
    },
    {
      title: 'Scalable Deployment',
      description: 'options that optimize staffing and boost revenue. By automating routine tasks, it frees up personnel for higher-value activities while generating additional income through targeted advertising.'
    }
  ];

  const toggleDemo = (index) => {
    setExpandedDemo(expandedDemo === index ? null : index);
  };

  return (
    <section className={styles.solutionBenefits} ref={ref}>
      <div className={styles.container}>
        <motion.h2
          className={styles.headline}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          KBot: Your AI-Powered Meet-and-Greet Robot
        </motion.h2>
        <div className={styles.tabs}>
          {icps.map((icp, index) => (
            <div key={index} className={styles.tabContainer}>
              <button
                className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {icp.title}
                <ChevronDown className={styles.chevron} />
              </button>
              <motion.div
                className={styles.content}
                initial={{ height: 0, opacity: 0 }}
                animate={activeTab === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className={styles.description}>{icp.description}</p>
                <button className={styles.demoButton} onClick={() => toggleDemo(index)}>
                  {expandedDemo === index ? 'Hide Demo' : 'View Interactive Demo'}
                  {expandedDemo === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {expandedDemo === index && (
                  <motion.div
                    className={styles.demo}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {icp.demo}
                  </motion.div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
        <motion.div
          className={styles.sectionTitle}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>Overall Benefits</h3>
        </motion.div>
        <div className={styles.benefitsSection}>
          <motion.div
            className={styles.robotImage}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Image src="/robot.png" alt="KBot robot illustration" width={300} height={500} />
          </motion.div>
          <motion.div
            className={styles.benefitsListContainer}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <ul className={styles.benefitsList}>
              {overallBenefits.map((benefit, index) => (
                <li key={index} className={styles.benefitItem}>
                  <Check size={16} className={styles.checkIcon} />
                  <div className={styles.benefitContent}>
                    <strong className={styles.benefitTitle}>{benefit.title}</strong>
                    <span className={styles.benefitDescription}>{benefit.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionBenefits;
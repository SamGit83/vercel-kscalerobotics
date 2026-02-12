import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Users, ShoppingBag, TrendingDown } from 'lucide-react';
import styles from './PainPoints.module.css';

const PainPoints = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const painPoints = [
    {
      icon: <Clock size={48} />,
      title: 'Hotel Pain',
      description: 'Long queues and late-night gaps reduce guest satisfaction. 15-20% time wasted on queries.',
    },
    {
      icon: <Users size={48} />,
      title: 'Airport/Lounge Pain',
      description: 'Flight delays and navigation frustration lead to stressed travelers. 25% time lost in crowds.',
    },
    {
      icon: <ShoppingBag size={48} />,
      title: 'Shopping Center Pain',
      description: 'Declining traffic and bland interactions cut retention. 15-20% post-COVID drops.',
    },
  ];

  return (
    <section className={styles.painPoints} ref={ref}>
      <div className={styles.container}>
        <motion.h2
          className={styles.headline}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          The Challenges We Solve for Your Spaces
        </motion.h2>
        <div className={styles.cards}>
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 123, 255, 0.5)' }}
            >
              <div className={styles.icon}>{point.icon}</div>
              <h3 className={styles.title}>{point.title}</h3>
              <p className={styles.description}>{point.description}</p>
              <div className={styles.chartPlaceholder}>
                {/* Placeholder for metrics chart */}
                <div className={styles.chart}></div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.p
          className={styles.overall}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          These pains cost businesses €50k+ annually in lost revenue. KBot turns them into opportunities.
        </motion.p>
      </div>
    </section>
  );
};

export default PainPoints;
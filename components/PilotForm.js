import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import styles from './PilotForm.module.css';

const PilotForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const onSubmit = async (data) => {
    setIsLoading(true);
    setMessage('');
    setMessageType('');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Form submitted successfully!');
        setMessageType('success');
        reset();
      } else {
        setMessage(result.message || 'An error occurred.');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="pilot-form" className={styles.pilotForm}>
      <div className={styles.container}>
        <motion.h2
          className={styles.headline}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Scale Your Interactions?
        </motion.h2>
        <motion.p
          className={styles.body}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join our pilots for KBot. Get early access and shape the future. Tell us your challenges.
        </motion.p>
        <motion.form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              id="name"
              type="text"
              className={styles.input}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <span className={styles.error}>{errors.name.message}</span>}
          </div>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              id="email"
              type="email"
              className={styles.input}
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
            />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </div>
          <div className={styles.field}>
            <label htmlFor="companyRole" className={styles.label}>Company/Role</label>
            <input
              id="companyRole"
              type="text"
              className={styles.input}
              {...register('companyRole', { required: 'Company/Role is required' })}
            />
            {errors.companyRole && <span className={styles.error}>{errors.companyRole.message}</span>}
          </div>
          <div className={styles.field}>
            <label htmlFor="locationType" className={styles.label}>Location Type</label>
            <select
              id="locationType"
              className={styles.select}
              {...register('locationType', { required: 'Location Type is required' })}
            >
              <option value="">Select...</option>
              <option value="Hotel">Hotel</option>
              <option value="Airport/Lounge">Airport/Lounge</option>
              <option value="Shopping Center">Shopping Center</option>
            </select>
            {errors.locationType && <span className={styles.error}>{errors.locationType.message}</span>}
          </div>
          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              className={styles.textarea}
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <span className={styles.error}>{errors.message.message}</span>}
          </div>
          {message && (
            <div className={`${styles.message} ${styles[messageType]}`}>
              {message}
            </div>
          )}
          <motion.button
            type="submit"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
            transition={{ duration: 0.3 }}
          >
            {isLoading ? 'Submitting...' : 'Request Pilot / Get Insights'}
          </motion.button>
        </motion.form>
        <motion.p
          className={styles.privacy}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          GDPR compliant; we respect your data.
        </motion.p>
      </div>
    </section>
  );
};

export default PilotForm;
import Head from 'next/head';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function About() {
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const isVisionInView = useInView(visionRef, { once: true, margin: "-100px" });
  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" });

  return (
    <>
      <Head>
        <title>About - Kscale Robotics</title>
        <meta name="description" content="Learn about Kscale Robotics AB - Our vision to pioneer intelligent robotics and our mission to free humans for meaningful work." />
        <meta name="keywords" content="Kscale Robotics, about us, robotics company, autonomous robots, vision, mission" />
        <meta property="og:title" content="About - Kscale Robotics" />
        <meta property="og:description" content="Our vision: To pioneer intelligent robotics that liberate human potential." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://kscalerobotics.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://kscalerobotics.com/about" />
      </Head>

      <Navigation />

      <main style={{ 
        minHeight: '100vh', 
        background: '#f8f9fa',
        paddingTop: '80px'
      }}>
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, #073763 0%, #0a4a7f 100%)',
          padding: '80px 20px',
          textAlign: 'center',
          color: '#ffffff'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
              marginBottom: '20px',
              fontFamily: "'Inter', sans-serif"
            }}>
              About Kscale Robotics
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Pioneering the future of autonomous robotics to elevate human potential
            </p>
          </motion.div>
        </section>

        {/* Vision Section */}
        <section 
          ref={visionRef}
          style={{
            padding: '80px 20px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: 'clamp(30px, 5vw, 60px)',
              boxShadow: '0 4px 30px rgba(7, 55, 99, 0.08)',
              border: '1px solid rgba(7, 55, 99, 0.1)'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #073763 0%, #0a4a7f 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '700',
                color: '#073763',
                margin: 0,
                fontFamily: "'Inter', sans-serif"
              }}>
                Our Vision
              </h2>
            </div>
            
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              lineHeight: '1.8',
              color: '#1a1a2e',
              fontFamily: "'Inter', sans-serif",
              fontWeight: '500'
            }}>
              "To pioneer intelligent robotics that liberate human potential, advancing us toward a Kardashev Type 1 future."
            </p>

            <div style={{
              marginTop: '30px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(7, 55, 99, 0.1)'
            }}>
              <p style={{
                fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                lineHeight: '1.7',
                color: '#555555',
                fontFamily: "'Inter', sans-serif"
              }}>
                We envision a world where robotics seamlessly integrates into everyday life, 
                handling the mundane so humans can pursue the extraordinary. Our inspiration 
                comes from the Kardashev Scale — a measure of civilizational advancement based 
                on energy utilization. We're committed to pushing humanity toward Type 1 status 
                by creating intelligent systems that amplify our capabilities.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section 
          ref={missionRef}
          style={{
            padding: '0 20px 80px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: 'clamp(30px, 5vw, 60px)',
              boxShadow: '0 4px 30px rgba(7, 55, 99, 0.08)',
              border: '1px solid rgba(7, 55, 99, 0.1)'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #073763 0%, #0a4a7f 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '700',
                color: '#073763',
                margin: 0,
                fontFamily: "'Inter', sans-serif"
              }}>
                Our Mission
              </h2>
            </div>
            
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              lineHeight: '1.8',
              color: '#1a1a2e',
              fontFamily: "'Inter', sans-serif",
              fontWeight: '500'
            }}>
              "At Kscale Robotics AB, our mission is to develop autonomous robots that perform tasks which are repetitive, physically intensive, and tedious yet essential to the business, thus freeing people to focus on creative, strategic, and meaningful work."
            </p>

            <div style={{
              marginTop: '30px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(7, 55, 99, 0.1)'
            }}>
              <p style={{
                fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                lineHeight: '1.7',
                color: '#555555',
                fontFamily: "'Inter', sans-serif"
              }}>
                We believe that the true value of robotics lies not in replacing humans, but 
                in augmenting human capabilities. By automating repetitive and physically demanding 
                tasks, we enable people to dedicate their time and energy to work that requires 
                creativity, strategic thinking, and human connection—the things that truly matter.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <section style={{
          background: '#ffffff',
          padding: '60px 20px',
          textAlign: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            <h3 style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: '600',
              color: '#073763',
              marginBottom: '16px',
              fontFamily: "'Inter', sans-serif"
            }}>
              Join Us on This Journey
            </h3>
            <p style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
              lineHeight: '1.7',
              color: '#555555',
              marginBottom: '30px',
              fontFamily: "'Inter', sans-serif"
            }}>
              Whether you're a business looking to transform operations or an individual 
              passionate about the future of robotics, we'd love to hear from you.
            </p>
            <a 
              href="mailto:hello@kscalerobotics.com"
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                background: '#073763',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1rem',
                fontFamily: "'Inter', sans-serif",
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 14px rgba(7, 55, 99, 0.25)'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#0a4a7f';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = '#073763';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Get in Touch
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}

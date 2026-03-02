import Head from 'next/head';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TermsOfService() {
  const introRef = useRef(null);
  const acceptanceRef = useRef(null);
  const serviceRef = useRef(null);
  const responsibilitiesRef = useRef(null);
  const propertyRef = useRef(null);
  const liabilityRef = useRef(null);
  const lawRef = useRef(null);
  const changesRef = useRef(null);
  const contactRef = useRef(null);

  const isIntroInView = useInView(introRef, { once: true, margin: "-100px" });
  const isAcceptanceInView = useInView(acceptanceRef, { once: true, margin: "-100px" });
  const isServiceInView = useInView(serviceRef, { once: true, margin: "-100px" });
  const isResponsibilitiesInView = useInView(responsibilitiesRef, { once: true, margin: "-100px" });
  const isPropertyInView = useInView(propertyRef, { once: true, margin: "-100px" });
  const isLiabilityInView = useInView(liabilityRef, { once: true, margin: "-100px" });
  const isLawInView = useInView(lawRef, { once: true, margin: "-100px" });
  const isChangesInView = useInView(changesRef, { once: true, margin: "-100px" });
  const isContactInView = useInView(contactRef, { once: true, margin: "-100px" });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const Section = ({ children, ref, isInView, delay = 0 }) => (
    <section 
      ref={ref}
      style={{
        padding: '60px 20px',
        maxWidth: '900px',
        margin: '0 auto'
      }}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay }}
        variants={sectionVariants}
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          padding: 'clamp(30px, 5vw, 50px)',
          boxShadow: '0 4px 30px rgba(7, 55, 99, 0.08)',
          border: '1px solid rgba(7, 55, 99, 0.1)'
        }}
      >
        {children}
      </motion.div>
    </section>
  );

  return (
    <>
      <Head>
        <title>Terms of Service - Kscale Robotics</title>
        <meta name="description" content="Terms of Service for Kscale Robotics AB. Read our terms and conditions for using our robotics automation services and website." />
        <meta name="keywords" content="Kscale Robotics, terms of service, terms and conditions, robotics company, automation services" />
        <meta property="og:title" content="Terms of Service - Kscale Robotics" />
        <meta property="og:description" content="Terms of Service for Kscale Robotics AB - Pioneering intelligent robotics automation." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://kscalerobotics.com/terms-of-service" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://kscalerobotics.com/terms-of-service" />
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
              Terms of Service
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Please read our terms and conditions carefully before using our services
            </p>
          </motion.div>
        </section>

        {/* Last Updated */}
        <div style={{
          textAlign: 'center',
          padding: '30px 20px',
          color: '#555555',
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(0.9rem, 1.5vw, 1rem)'
        }}>
          <p>Last Updated: March 2026</p>
        </div>

        {/* Introduction Section */}
        <Section ref={introRef} isInView={isIntroInView}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #073763 0%, #0a4a7f 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
              fontWeight: '700',
              color: '#073763',
              margin: 0,
              fontFamily: "'Inter', sans-serif"
            }}>
              1. Introduction
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            Welcome to Kscale Robotics AB ("Kscale Robotics," "we," "our," or "us"). These Terms of Service 
            ("Terms") govern your access to and use of our website located at kscalerobotics.com (the "Website") 
            and our robotics automation services (the "Services"). By accessing or using our Website or Services, 
            you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our 
            Website or Services.
          </p>
        </Section>

        {/* Acceptance of Terms Section */}
        <Section ref={acceptanceRef} isInView={isAcceptanceInView} delay={0.1}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #073763 0%, #0a4a7f 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
              fontWeight: '700',
              color: '#073763',
              margin: 0,
              fontFamily: "'Inter', sans-serif"
            }}>
              2. Acceptance of Terms
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            By creating an account, placing an order, or using any of our Services, you affirm that you are 
            at least 18 years of age and have the legal capacity to enter into a binding contract. You 
            also agree to comply with all applicable laws, regulations, and these Terms. If you are using 
            our Services on behalf of a company or organization, you represent that you have the authority 
            to bind that entity to these Terms.
          </p>
        </Section>

        {/* Description of Service Section */}
        <Section ref={serviceRef} isInView={isServiceInView} delay={0.2}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #073763 0%, #0a4a7f 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
              fontWeight: '700',
              color: '#073763',
              margin: 0,
              fontFamily: "'Inter', sans-serif"
            }}>
              3. Description of Service
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            Kscale Robotics provides autonomous robotics solutions designed to automate repetitive, 
            physically intensive, and essential business tasks. Our Services include but are not 
            limited to:
          </p>
          <ul style={{
            marginTop: '20px',
            paddingLeft: '24px',
            lineHeight: '2',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)'
          }}>
            <li>Deployment of autonomous robotic systems for industrial and commercial applications</li>
            <li>Robotics-as-a-Service (RaaS) subscription models</li>
            <li>Custom robotics integration and consulting services</li>
            <li>Maintenance, support, and software updates for our robotic systems</li>
            <li>Pilot programs and proof-of-concept demonstrations</li>
          </ul>
          <p style={{
            marginTop: '20px',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            We reserve the right to modify, suspend, or discontinue any part of our Services at any time 
            with reasonable notice.
          </p>
        </Section>

        {/* User Responsibilities Section */}
        <Section ref={responsibilitiesRef} isInView={isResponsibilitiesInView} delay={0.3}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #073763 0%, #0a4a7f 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
              fontWeight: '700',
              color: '#073763',
              margin: 0,
              fontFamily: "'Inter', sans-serif"
            }}>
              4. User Responsibilities
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            As a user of our Services, you agree to:
          </p>
          <ul style={{
            marginTop: '20px',
            paddingLeft: '24px',
            lineHeight: '2',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)'
          }}>
            <li>Provide accurate and complete information when registering or placing orders</li>
            <li>Maintain the security of your account credentials and promptly notify us of any unauthorized access</li>
            <li>Use our Services only for lawful purposes and in accordance with these Terms</li>
            <li>Not interfere with or disrupt the integrity or performance of our robotic systems or software</li>
            <li>Not attempt to gain unauthorized access to any part of our systems or Services</li>
            <li>Comply with all applicable safety regulations when operating or interacting with our robotic systems</li>
            <li>Maintain adequate infrastructure and environment for proper operation of our robotic systems as specified in documentation</li>
          </ul>
        </Section>

        {/* Intellectual Property Section */}
        <Section ref={propertyRef} isInView={isPropertyInView} delay={0.4}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #073763 0%, #0a4a7f 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
              fontWeight: '700',
              color: '#073763',
              margin: 0,
              fontFamily: "'Inter', sans-serif"
            }}>
              5. Intellectual Property
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            All content, software, designs, inventions, algorithms, and other materials provided by 
            Kscale Robotics, including but not limited to our Website, robotic systems, and documentation, 
            are protected by intellectual property rights including copyrights, patents, trademarks, and 
            trade secrets.
          </p>
          <p style={{
            marginTop: '20px',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            You may not copy, modify, distribute, sell, lease, or reverse engineer any of our proprietary 
            technology without prior written consent. The Kscale Robotics name, logo, and all related 
            trademarks are property of Kscale Robotics AB. You are granted a limited, non-exclusive, 
            non-transferable license to use our Services as expressly permitted under these Terms.
          </p>
        </Section>

        {/* Limitation of Liability Section */}
        <Section ref={liabilityRef} isInView={isLiabilityInView} delay={0.5}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #073763 0%, #0a4a7f 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
              fontWeight: '700',
              color: '#073763',
              margin: 0,
              fontFamily: "'Inter', sans-serif"
            }}>
              6. Limitation of Liability
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, KSCALE ROBOTICS SHALL NOT BE LIABLE FOR ANY 
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR 
            RELATED TO YOUR USE OF OUR SERVICES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, 
            DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
          </p>
          <p style={{
            marginTop: '20px',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            Our total liability for any claims arising from these Terms or your use of our Services 
            shall not exceed the amount paid by you, if any, for accessing our Services during the 
            twelve (12) months preceding the claim. This limitation applies regardless of the legal 
            theory and applies even if we have been advised of the possibility of such damages.
          </p>
        </Section>

        {/* Governing Law Section */}
        <Section ref={lawRef} isInView={isLawInView} delay={0.6}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #073763 0%, #0a4a7f 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
              fontWeight: '700',
              color: '#073763',
              margin: 0,
              fontFamily: "'Inter', sans-serif"
            }}>
              7. Governing Law
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            These Terms shall be governed by and construed in accordance with the laws of Sweden, 
            without regard to its conflict of law provisions. Any legal action or proceeding arising 
            under these Terms shall be brought exclusively in the courts located in Stockholm, Sweden, 
            and you hereby consent to the personal jurisdiction and venue therein.
          </p>
          <p style={{
            marginTop: '20px',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            Kscale Robotics AB is a company registered in Sweden. Our registered office is located 
            in Stockholm, Sweden.
          </p>
        </Section>

        {/* Changes to Terms Section */}
        <Section ref={changesRef} isInView={isChangesInView} delay={0.7}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #073763 0%, #0a4a7f 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
              fontWeight: '700',
              color: '#073763',
              margin: 0,
              fontFamily: "'Inter', sans-serif"
            }}>
              8. Changes to Terms
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            We reserve the right to modify these Terms at any time. If we make material changes, we 
            will provide notice by posting the updated Terms on our Website and updating the "Last 
            Updated" date above. Your continued use of our Services after such modifications constitutes 
            your acceptance of the revised Terms. We encourage you to review these Terms periodically 
            to stay informed about our practices.
          </p>
        </Section>

        {/* Contact Information Section */}
        <Section ref={contactRef} isInView={isContactInView} delay={0.8}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #073763 0%, #0a4a7f 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
              fontWeight: '700',
              color: '#073763',
              margin: 0,
              fontFamily: "'Inter', sans-serif"
            }}>
              9. Contact Information
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            If you have any questions about these Terms or our Services, please contact us:
          </p>
          <div style={{
            marginTop: '24px',
            padding: '20px',
            background: '#f8f9fa',
            borderRadius: '12px',
            border: '1px solid rgba(7, 55, 99, 0.1)'
          }}>
            <p style={{
              marginBottom: '12px',
              fontSize: 'clamp(0.95rem,vw, 1 1.5.05rem)',
              color: '#1a1a2e',
              fontFamily: "'Inter', sans-serif"
            }}>
              <strong>Kscale Robotics AB</strong>
            </p>
            <p style={{
              marginBottom: '8px',
              fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
              color: '#1a1a2e',
              fontFamily: "'Inter', sans-serif"
            }}>
              Stockholm, Sweden
            </p>
            <p style={{
              marginBottom: '8px',
              fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
              color: '#1a1a2e',
              fontFamily: "'Inter', sans-serif"
            }}>
              Email: <a href="mailto:hello@kscalerobotics.com" style={{ color: '#073763', textDecoration: 'underline' }}>hello@kscalerobotics.com</a>
            </p>
            <p style={{
              margin: 0,
              fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
              color: '#1a1a2e',
              fontFamily: "'Inter', sans-serif"
            }}>
              Website: <a href="https://kscalerobotics.com" style={{ color: '#073763', textDecoration: 'underline' }}>kscalerobotics.com</a>
            </p>
          </div>
        </Section>

        {/* Footer Note */}
        <div style={{
          textAlign: 'center',
          padding: '40px 20px 80px',
          color: '#555555',
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)'
        }}>
          <p>© 2026 Kscale Robotics AB. All rights reserved.</p>
        </div>
      </main>

      <Footer />
    </>
  );
}

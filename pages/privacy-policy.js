import Head from 'next/head';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  const introRef = useRef(null);
  const collectionRef = useRef(null);
  const usageRef = useRef(null);
  const sharingRef = useRef(null);
  const securityRef = useRef(null);
  const rightsRef = useRef(null);
  const cookiesRef = useRef(null);
  const childrenRef = useRef(null);
  const changesRef = useRef(null);
  const contactRef = useRef(null);

  const isIntroInView = useInView(introRef, { once: true, margin: "-100px" });
  const isCollectionInView = useInView(collectionRef, { once: true, margin: "-100px" });
  const isUsageInView = useInView(usageRef, { once: true, margin: "-100px" });
  const isSharingInView = useInView(sharingRef, { once: true, margin: "-100px" });
  const isSecurityInView = useInView(securityRef, { once: true, margin: "-100px" });
  const isRightsInView = useInView(rightsRef, { once: true, margin: "-100px" });
  const isCookiesInView = useInView(cookiesRef, { once: true, margin: "-100px" });
  const isChildrenInView = useInView(childrenRef, { once: true, margin: "-100px" });
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
        <title>Privacy Policy - Kscale Robotics</title>
        <meta name="description" content="Privacy Policy for Kscale Robotics AB. Learn how we collect, use, and protect your personal information." />
        <meta name="keywords" content="Kscale Robotics, privacy policy, data protection, GDPR, robotics company, automation services" />
        <meta property="og:title" content="Privacy Policy - Kscale Robotics" />
        <meta property="og:description" content="Privacy Policy for Kscale Robotics AB - Your data privacy is important to us." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://kscalerobotics.com/privacy-policy" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://kscalerobotics.com/privacy-policy" />
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
              Privacy Policy
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Your privacy is important to us. Learn how we protect and handle your personal information
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
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
            Kscale Robotics AB ("Kscale Robotics," "we," "our," or "us") is committed to protecting your 
            privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website located at kscalerobotics.com (the "Website") or use our robotics 
            automation services (the "Services").
          </p>
          <p style={{
            marginTop: '20px',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            By accessing or using our Website or Services, you consent to the collection and use of information 
            in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please 
            do not access our Website or use our Services.
          </p>
        </Section>

        {/* Information We Collect Section */}
        <Section ref={collectionRef} isInView={isCollectionInView} delay={0.1}>
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
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
              fontWeight: '700',
              color: '#073763',
              margin: 0,
              fontFamily: "'Inter', sans-serif"
            }}>
              2. Information We Collect
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            We collect information to provide better services to all our users. The types of information we collect include:
          </p>
          <h3 style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
            fontWeight: '600',
            color: '#073763',
            marginTop: '24px',
            marginBottom: '12px',
            fontFamily: "'Inter', sans-serif"
          }}>
            Personal Information
          </h3>
          <ul style={{
            marginTop: '12px',
            paddingLeft: '24px',
            lineHeight: '2',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)'
          }}>
            <li>Name and contact information (email address, phone number, physical address)</li>
            <li>Company information (company name, job title, business address)</li>
            <li>Account credentials (username, password)</li>
            <li>Payment information (billing address, payment method details)</li>
            <li>Communications with us (inquiries, feedback, customer support requests)</li>
          </ul>
          <h3 style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
            fontWeight: '600',
            color: '#073763',
            marginTop: '24px',
            marginBottom: '12px',
            fontFamily: "'Inter', sans-serif"
          }}>
            Automatically Collected Information
          </h3>
          <ul style={{
            marginTop: '12px',
            paddingLeft: '24px',
            lineHeight: '2',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)'
          }}>
            <li>Device information (IP address, browser type, operating system)</li>
            <li>Usage data (pages visited, time spent on pages, links clicked)</li>
            <li>Location data (general geographic location based on IP address)</li>
            <li>Robot operational data (performance metrics, diagnostic information from our robotic systems)</li>
          </ul>
        </Section>

        {/* How We Use Your Information Section */}
        <Section ref={usageRef} isInView={isUsageInView} delay={0.2}>
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
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
              fontWeight: '700',
              color: '#073763',
              margin: 0,
              fontFamily: "'Inter', sans-serif"
            }}>
              3. How We Use Your Information
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            We use the information we collect for the following purposes:
          </p>
          <ul style={{
            marginTop: '20px',
            paddingLeft: '24px',
            lineHeight: '2',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)'
          }}>
            <li>Providing and maintaining our Services, including robotic system deployment and support</li>
            <li>Processing transactions and sending related information including purchase confirmations and invoices</li>
            <li>Responding to your comments, questions, and providing customer service</li>
            <li>Improving, personalizing, and expanding our Website and Services based on user feedback and behavior</li>
            <li>Communicating with you about products, services, offers, promotions, and events</li>
            <li>Monitoring and analyzing trends, usage, and activities in connection with our Services</li>
            <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
            <li>Complying with legal obligations and enforcing our terms and policies</li>
          </ul>
        </Section>

        {/* Data Sharing and Disclosure Section */}
        <Section ref={sharingRef} isInView={isSharingInView} delay={0.3}>
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
              4. Data Sharing and Disclosure
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            We may share your information in the following circumstances:
          </p>
          <h3 style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
            fontWeight: '600',
            color: '#073763',
            marginTop: '24px',
            marginBottom: '12px',
            fontFamily: "'Inter', sans-serif"
          }}>
            Service Providers
          </h3>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            We may share your information with third-party service providers who assist us in operating our 
            Website, conducting our business, or providing Services to you. These parties are obligated to 
            maintain the confidentiality of your information.
          </p>
          <h3 style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
            fontWeight: '600',
            color: '#073763',
            marginTop: '24px',
            marginBottom: '12px',
            fontFamily: "'Inter', sans-serif"
          }}>
            Business Transfers
          </h3>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            In the event of a merger, acquisition, or sale of all or a portion of our assets, your information 
            may be transferred as part of that transaction. We will notify you before your personal information 
            becomes subject to a different privacy policy.
          </p>
          <h3 style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
            fontWeight: '600',
            color: '#073763',
            marginTop: '24px',
            marginBottom: '12px',
            fontFamily: "'Inter', sans-serif"
          }}>
            Legal Requirements
          </h3>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            We may disclose your information when required by law or in response to valid requests by public 
            authorities (e.g., court orders, government agencies).
          </p>
        </Section>

        {/* Data Security Section */}
        <Section ref={securityRef} isInView={isSecurityInView} delay={0.4}>
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
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
              fontWeight: '700',
              color: '#073763',
              margin: 0,
              fontFamily: "'Inter', sans-serif"
            }}>
              5. Data Security
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            We implement appropriate technical and organizational security measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul style={{
            marginTop: '20px',
            paddingLeft: '24px',
            lineHeight: '2',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)'
          }}>
            <li>Encryption of sensitive data using industry-standard SSL/TLS protocols</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Access controls limiting employee access to personal information</li>
            <li>Secure data storage with regular backups</li>
            <li>Employee training on data protection and privacy</li>
          </ul>
          <p style={{
            marginTop: '20px',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            While we strive to protect your personal information, no method of transmission over the Internet 
            or electronic storage is 100% secure. We cannot guarantee absolute security, but we are committed 
            to maintaining industry-standard protections.
          </p>
        </Section>

        {/* Your Rights Section */}
        <Section ref={rightsRef} isInView={isRightsInView} delay={0.5}>
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
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
              fontWeight: '700',
              color: '#073763',
              margin: 0,
              fontFamily: "'Inter', sans-serif"
            }}>
              6. Your Rights (GDPR Compliance)
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            If you are located in the European Economic Area (EEA) or United Kingdom (UK), you have certain 
            data protection rights under the General Data Protection Regulation (GDPR) and UK GDPR:
          </p>
          <ul style={{
            marginTop: '20px',
            paddingLeft: '24px',
            lineHeight: '2',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)'
          }}>
            <li><strong>Right to Access:</strong> You have the right to request copies of your personal information</li>
            <li><strong>Right to Rectification:</strong> You can request correction of inaccurate or incomplete data</li>
            <li><strong>Right to Erasure:</strong> You can request deletion of your personal data under certain conditions</li>
            <li><strong>Right to Restrict Processing:</strong> You can request restriction of processing your data</li>
            <li><strong>Right to Data Portability:</strong> You can request transfer of your data to another organization</li>
            <li><strong>Right to Object:</strong> You can object to processing of your personal data under certain circumstances</li>
            <li><strong>Rights Related to Automated Decision-Making:</strong> You have the right not to be subject to decisions based solely on automated processing</li>
          </ul>
          <p style={{
            marginTop: '20px',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            To exercise any of these rights, please contact us using the information provided in the Contact 
            Information section below. We will respond to your request within one month.
          </p>
        </Section>

        {/* Cookies and Tracking Technologies Section */}
        <Section ref={cookiesRef} isInView={isCookiesInView} delay={0.6}>
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
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
              fontWeight: '700',
              color: '#073763',
              margin: 0,
              fontFamily: "'Inter', sans-serif"
            }}>
              7. Cookies and Tracking Technologies
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            We use cookies and similar tracking technologies to track activity on our Website and hold certain 
            information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
          </p>
          <h3 style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
            fontWeight: '600',
            color: '#073763',
            marginTop: '24px',
            marginBottom: '12px',
            fontFamily: "'Inter', sans-serif"
          }}>
            Types of Cookies We Use
          </h3>
          <ul style={{
            marginTop: '12px',
            paddingLeft: '24px',
            lineHeight: '2',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)'
          }}>
            <li><strong>Essential Cookies:</strong> Required for the operation of our Website</li>
            <li><strong>Analytical/Performance Cookies:</strong> Help us understand how visitors interact with our Website</li>
            <li><strong>Functionality Cookies:</strong> Enable enhanced functionality and personalization</li>
            <li><strong>Targeting Cookies:</strong> Used to deliver relevant advertisements</li>
          </ul>
          <p style={{
            marginTop: '20px',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, 
            if you do not accept cookies, you may not be able to use some portions of our Website.
          </p>
        </Section>

        {/* Children's Privacy Section */}
        <Section ref={childrenRef} isInView={isChildrenInView} delay={0.7}>
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
              8. Children's Privacy
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            Our Services are not intended for children under the age of 13. We do not knowingly collect 
            personal information from children under 13. If you are a parent or guardian and you believe 
            your child has provided us with personal information, please contact us immediately. If we become 
            aware that we have collected personal information from a child under 13 without verification of 
            parental consent, we will take steps to remove that information from our servers.
          </p>
        </Section>

        {/* Changes to This Policy Section */}
        <Section ref={changesRef} isInView={isChangesInView} delay={0.8}>
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
              </svg>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
              fontWeight: '700',
              color: '#073763',
              margin: 0,
              fontFamily: "'Inter', sans-serif"
            }}>
              9. Changes to This Policy
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
            the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
          </p>
          <p style={{
            marginTop: '20px',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy 
            Policy are effective when they are posted on this page. Your continued use of the Website or Services 
            after any modifications to this Privacy Policy will constitute your acceptance of such modifications.
          </p>
        </Section>

        {/* Contact Information Section */}
        <Section ref={contactRef} isInView={isContactInView} delay={0.9}>
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
              10. Contact Information
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            lineHeight: '1.8',
            color: '#1a1a2e',
            fontFamily: "'Inter', sans-serif"
          }}>
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div style={{
            marginTop: '24px',
            padding: '20px',
            background: '#f8f9fa',
            borderRadius: '12px',
            border: '1px solid rgba(7, 55, 99, 0.1)'
          }}>
            <p style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
              lineHeight: '1.8',
              color: '#1a1a2e',
              fontFamily: "'Inter', sans-serif",
              marginBottom: '12px'
            }}>
              <strong>Kscale Robotics AB</strong><br />
              Sweden
            </p>
            <p style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
              lineHeight: '1.8',
              color: '#1a1a2e',
              fontFamily: "'Inter', sans-serif",
              marginBottom: '12px'
            }}>
              Email: <a href="mailto:contact@kscalerobotics.com" style={{ color: '#073763', textDecoration: 'underline' }}>contact@kscalerobotics.com</a>
            </p>
            <p style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
              lineHeight: '1.8',
              color: '#1a1a2e',
              fontFamily: "'Inter', sans-serif"
            }}>
              For data protection inquiries, you may also contact our Data Protection Officer at the same email address.
            </p>
          </div>
        </Section>

      </main>

      <Footer />
    </>
  );
}

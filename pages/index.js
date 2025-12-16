import Head from 'next/head';
import Hero from '../components/Hero';
import VisionAbout from '../components/VisionAbout';
import PainPoints from '../components/PainPoints';
import SolutionBenefits from '../components/SolutionBenefits';
import HowItWorks from '../components/HowItWorks';
import PilotForm from '../components/PilotForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kscale Robotics - Scaling Interactions for Smarter Spaces</title>
        <meta name="description" content="Kscale Robotics: KBot, your 24/7 meet-and-greet robot boosting engagement and revenue in hotels, airports, and shopping centers." />
        <meta name="keywords" content="robotics, AI robot, KBot, hotel automation, airport assistance, shopping center engagement" />
        <meta property="og:title" content="Kscale Robotics - Scaling Interactions for Smarter Spaces" />
        <meta property="og:description" content="KBot: Your 24/7 meet-and-greet robot—Boosting engagement and revenue in hotels, airports, and shopping centers." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://kscalerobotics.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://kscalerobotics.com" />
      </Head>
      <Hero />
      <VisionAbout />
      <PainPoints />
      <SolutionBenefits />
      <HowItWorks />
      <PilotForm />
      <Footer />
    </>
  );
}
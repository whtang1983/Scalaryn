import Hero from './components/Hero';
import CurrentClients from './components/CurrentClients';
import About from './components/About';
import Services from './components/Services';
import SelectedWork from './components/SelectedWork';
import SelectedBlueprints from './components/SelectedBlueprints';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
     {/* <CurrentClients /> */}
      <About />
      <Services />
      {/* <SelectedWork /> */}
      <SelectedBlueprints />
      <HowItWorks />
      <FAQ />
      <CTA />
    </>
  );
}
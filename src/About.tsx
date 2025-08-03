import Header from './components/Header';
import IntroTabsSection from './components/IntroTabsSection';
import AboutMeCard from './components/AboutMeCard';

function About() {
  return (
    <>
      <Header toggleSidebar={function (): void {
        throw new Error('Function not implemented.');
      }} />
      <AboutMeCard/>
      {/* <IntroTabsSection /> */}
    </>
  );
}

export default About;

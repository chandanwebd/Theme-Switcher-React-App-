import Header from './components/Header';
import AboutMeCard from './components/AboutMeCard';

function About() {
  return (
    <>
      <Header toggleSidebar={function (): void {
        throw new Error('Function not implemented.');
      }} />
      <AboutMeCard/>
    </>
  );
}

export default About;

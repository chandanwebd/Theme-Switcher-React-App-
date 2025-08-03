import Header from './components/Header';
import ProfileInfo from './components/ProfileInfo';

function Contact() {
  return (
    <>
      <Header toggleSidebar={function (): void {
        throw new Error('Function not implemented.');
      }} />
      <ProfileInfo/>
    </>
  );
}

export default Contact;

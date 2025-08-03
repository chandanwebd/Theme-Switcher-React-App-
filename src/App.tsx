import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import IntroTabsSection from './components/IntroTabsSection';

function App() {
  return (
    <>
      <Header toggleSidebar={function (): void {
        throw new Error('Function not implemented.');
      }} />
      <HeroSection />
      <IntroTabsSection />
      <ProductList />
    </>
  );
}

export default App;

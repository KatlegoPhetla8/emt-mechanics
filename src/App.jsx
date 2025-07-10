import { useRef, useState } from 'react';
import Header from './Header and Footer/Header.jsx';
import Home from './Main Components/Home.jsx';
import Footer from './Header and Footer/Footer.jsx';
import ScrollToTop from './Navigate/useScrollToTop.js';
import { Toaster } from './components/ui/toaster.jsx';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Toaster />
      <ScrollToTop />
      <Header />

      <Home />
      <Footer />
    </>
  );
}

export default App;

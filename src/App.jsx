import { Box, Heading, Text } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import Header from './Header and Footer/Header.jsx';
import Home from './Main Components/Home.jsx';
import Footer from './Header and Footer/Footer.jsx';
import ScrollToTop from './Navigate/useScrollToTop.js';

function App() {
  return (
    <Box pb={'5px'}>
      <Header />
      <ScrollToTop />
      <Home />
      <Footer />
    </Box>
  );
}

export default App;

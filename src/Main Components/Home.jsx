import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import ClientReviews from './ClientReviews.jsx';
import Enquire from './Enquire.jsx';
import ServicesDialog from './ServicesDialog.jsx';
import AddReview from './AddReview.jsx';
import ViewReviews from './ViewReviews.jsx';
import { GlobalStateContext } from '../context/ContextProvider.jsx';

function Home() {
  const { homeRef, servicesRef, aboutRef } = useContext(GlobalStateContext);

  return (
    <Box pb={'8rem'}>
      <Box
        minH={'1000px'}
        overscrollBehavior={'contain'}
        ref={homeRef}
        className="hero-section"
        position={'relative'}
        height={{ base: '100vh', md: '100vh', lg: '100vh', xl: '100vh' }}
        w={'100%'}
        bgImage={`url("/Hero.png")`}
        transition={'filter 0.3s ease'}
        bgSize={'cover'}
        backgroundPosition={'center'}
        display={'flex'}
        alignItems={'center'}
        flexDir={'column'}
        justifyContent={{
          base: 'center',
          md: 'center',
          lg: 'center',
          xl: 'center',
        }}
        pt={{ base: undefined, md: '40px', lg: '60px' }}
        px={'1.5rem'}
        gap={{ base: '1.5rem', md: '1rem', lg: '1rem', xl: '1.5rem' }}
      >
        <Heading
          lineHeight={{ base: '3.5rem', md: '5rem', lg: '6rem', xl: '7rem' }}
          fontSize={{ base: '60px', md: '80px', lg: '100px', xl: '140px' }}
          css={{
            '@media (max-width: 390px)': {
              fontSize: '45px',
              lineHeight: '2.5rem',
            },
          }}
          as={'h1'}
          textAlign={'center'}
          textShadow={' 1px 2px 2px #fa823f'}
        >
          FAST.
          <br />
          HONEST.
          <br />
          LOCAL CAR
          <br />
          REPAIRS.
        </Heading>
        <Enquire />
      </Box>

      <Heading
        ref={servicesRef}
        pt={'12rem'}
        fontSize={{
          base: '24px',
          sm: '30px',
          md: '40px',
          lg: '50px',
          xl: '55px',
        }}
        as={'h2'}
        textAlign={'center'}
        textShadow={' 1px 1px 1px #fa823f'}
      >
        View Our Services
      </Heading>
      {/**DIALIG TO OPEN SERVICES */}
      <ServicesDialog />

      <Box ref={aboutRef} pt={'12rem'}>
        <Heading
          pb={'6rem'}
          pt={'4rem'}
          fontSize={{
            base: '24px',
            sm: '30px',
            md: '40px',
            lg: '50px',
            xl: '55px',
          }}
          as={'h2'}
          textAlign={'center'}
          textShadow={' 1px 1px 1px #fa823f'}
        >
          About Us
        </Heading>
        <Flex
          borderRadius={'2px'}
          backgroundColor={'#fa823f'}
          color={'whiteAlpha.700'}
          padding={'20px'}
          boxShadow={'1px 1px 3px 3px #fa823f'}
          w={'100%'}
        >
          <Text
            fontSize={{ base: '20px', md: '24px', lg: '26px', xl: '26px' }}
            textAlign={'center'}
          >
            EMT Mechanics is led by Aaron, a skilled and passionate mechanic
            with over 10 years of hands-on experience in the motor industry.
            Known for honesty, professionalism, and a straightforward approach,
            EMT Mechanics treats every vehicle with care and every client with
            respect. From general repairs, oil changes, and diagnostics to
            clutch, gearbox, brake, and suspension work, every job is handled
            with attention to detail and a commitment to getting it done right.
            Clients often praise Aaron for his transparency — always discussing
            the problem and quoting clearly before any work begins — and for
            offering some of the most affordable rates around. It’s that blend
            of trust, experience, and quality workmanship that sets EMT
            Mechanics apart. For Aaron, fixing cars isn’t just a job — it’s a
            passion, and it shows in every service delivered.
          </Text>
        </Flex>
      </Box>
      <ClientReviews />
      <ViewReviews />
      <AddReview />
    </Box>
  );
}

export default Home;

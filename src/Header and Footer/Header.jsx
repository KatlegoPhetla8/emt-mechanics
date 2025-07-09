import { Flex, Image, Link, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { GlobalStateContext } from '../context/ContextProvider';
import HamburgerIcon from '../Hamburger/HamburgerIcon';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(0);
  const {
    homeRef,
    servicesRef,
    aboutRef,
    reviewsRef,
    scrollToSection,
    open,
    setOpen,
  } = useContext(GlobalStateContext);

  // FUNCTION FOR SCROLL HEADER(UP AND DOWN)
  function handleScroll() {
    // Whether we are scrolling up or down
    const currentScrollY = window.scrollY;

    setIsScrolled(currentScrollY > 0);

    if (currentScrollY > lastScrollY) {
      //scrolling down (Hide Header)
      setIsVisible(false);
    } else {
      //scrolling up (Show Header)
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const bgColor = !isScrolled ? 'transparent' : 'rgba(255, 255, 255, 0.8)';

  return (
    <>
      <HamburgerIcon isVisible={isVisible} bgColor={bgColor} />
      <Flex
        display={{ base: 'none', md: 'none', lg: 'flex' }}
        pb={'3rem'}
        pt={'3rem'}
        as={'header'}
        position={'fixed'}
        top={isVisible ? '0' : '-120px'}
        bg={bgColor}
        left={0}
        right={0}
        alignItems={'center'}
        justifyContent={'space-between'}
        zIndex={1000}
        height={'40px'}
        transition={'all 0.5s ease-in-out'}
        px={'1rem'}
      >
        <Image pt={'6px'} boxSize={'100px'} src="emt-logo.png" />
        <Text
          display={{ base: 'none', md: 'none', lg: 'flex' }}
          position={'relative'}
          focusRing={'none'}
          textDecor={'none'}
          fontSize={'20px'}
          fontWeight={'bold'}
          textShadow={' 1px 2px 4px #fa823f'}
          cursor={'pointer'}
          _after={{
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '0%',
            height: '0.5px',
            bg: '#fa823f',
            transition: 'width 0.3s ease',
          }}
          _hover={{
            _after: {
              width: '100%',
            },
          }}
          onClick={() => scrollToSection(homeRef)}
        >
          HOME
        </Text>
        <Text
          display={{ base: 'none', md: 'none', lg: 'flex' }}
          position={'relative'}
          focusRing={'none'}
          textDecor={'none'}
          fontSize={'20px'}
          fontWeight={'bold'}
          textShadow={' 1px 2px 4px #fa823f'}
          cursor={'pointer'}
          _after={{
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '0%',
            height: '0.5px',
            bg: '#fa823f',
            transition: 'width 0.3s ease',
          }}
          _hover={{
            _after: {
              width: '100%',
            },
          }}
          onClick={() => scrollToSection(servicesRef)}
        >
          SERVICES
        </Text>
        <Text
          display={{ base: 'none', md: 'none', lg: 'flex' }}
          position={'relative'}
          focusRing={'none'}
          textDecor={'none'}
          fontSize={'20px'}
          fontWeight={'bold'}
          textShadow={' 1px 2px 4px #fa823f'}
          cursor={'pointer'}
          _after={{
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '0%',
            height: '0.5px',
            bg: '#fa823f',
            transition: 'width 0.3s ease',
          }}
          _hover={{
            _after: {
              width: '100%',
            },
          }}
          onClick={() => scrollToSection(aboutRef)}
        >
          ABOUT
        </Text>
        <Text
          display={{ base: 'none', md: 'none', lg: 'flex' }}
          position={'relative'}
          focusRing={'none'}
          textDecor={'none'}
          fontSize={'20px'}
          fontWeight={'bold'}
          textShadow={' 1px 2px 4px #fa823f'}
          cursor={'pointer'}
          _after={{
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '0%',
            height: '0.5px',
            bg: '#fa823f',
            transition: 'width 0.3s ease',
          }}
          _hover={{
            _after: {
              width: '100%',
            },
          }}
          onClick={() => setOpen(!open)}
        >
          ENQUIRE
        </Text>
        <Text
          display={{ base: 'none', md: 'none', lg: 'flex' }}
          position={'relative'}
          focusRing={'none'}
          textDecor={'none'}
          fontSize={'20px'}
          fontWeight={'bold'}
          textShadow={' 1px 2px 4px #fa823f'}
          cursor={'pointer'}
          _after={{
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '0%',
            height: '0.5px',
            bg: '#fa823f',
            transition: 'width 0.3s ease',
          }}
          _hover={{
            _after: {
              width: '100%',
            },
          }}
          onClick={() => scrollToSection(reviewsRef)}
        >
          REVIEWS
        </Text>
      </Flex>
    </>
  );
}

export default Header;

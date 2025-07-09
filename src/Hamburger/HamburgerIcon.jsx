import { Flex, Icon, Image } from '@chakra-ui/react';
import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import HamburgerDrawer from './HamburgerDrawer.jsx';

function HamburgerIcon({ isVisible, bgColor }) {
  return (
    <Flex
      flexDir={{ base: 'row', md: 'row', lg: 'none' }}
      alignItems={'center'}
      justifyContent={'space-between'}
      display={{ base: 'flex', md: 'flex', lg: 'none' }}
      pt={'3rem'}
      pb={'3rem'}
      as={'header'}
      position={'fixed'}
      top={isVisible ? '0' : '-120px'}
      bg={bgColor}
      left={0}
      right={0}
      zIndex={1000}
      height={'80px'}
      transition={'all 0.6s ease-in-out'}
      px={'2rem'}
    >
      <Image boxSize={'80px'} src="emt-logo.png" />
      <HamburgerDrawer />
    </Flex>
  );
}

export default HamburgerIcon;

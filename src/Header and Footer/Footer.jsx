import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

function Footer() {
  return (
    <Flex
      py={'1rem'}
      backgroundColor={'whiteAlpha.100'}
      px={'2rem'}
      alignItems={'center'}
      justifyContent={'space-between'}
      flexDir={'column'}
      gap={'0.5rem'}
    >
      <Image
        boxSize={{ base: '90px', md: '100px', lg: '110px', xl: '120px' }}
        src="emt-logo.png"
      />
      <Text
        color={'#fa823f'}
        fontSize={{ base: '16px', md: '18px', lg: '20px', xl: '22px' }}
      >
        © 2025 EMT Mechanics
      </Text>
    </Flex>
  );
}

export default Footer;

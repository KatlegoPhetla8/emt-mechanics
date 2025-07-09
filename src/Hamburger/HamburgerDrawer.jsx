import {
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerPositioner,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  Flex,
  Icon,
  Image,
  Portal,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GlobalStateContext } from '../context/ContextProvider';

function HamburgerDrawer() {
  const {
    homeRef,
    servicesRef,
    aboutRef,
    reviewsRef,
    scrollToSection,
    open,
    setOpen,
  } = useContext(GlobalStateContext);
  // State for opening and closing draer
  const [openDrawer, setOpenDrawer] = useState(false);

  // Function that handles opening of Text clicks (except Enquire)
  function handleClickSection(e, textRef) {
    setOpenDrawer(e.open);
    scrollToSection(textRef);
    return;
  }

  // Function that handles Enquire text click
  function handleEnquireClick(e) {
    setOpen(!open);
    setOpenDrawer(e.open);
  }
  return (
    <Flex>
      <DrawerRoot
        open={openDrawer}
        onOpenChange={e => setOpenDrawer(e.open)}
        size={'full'}
        motionPreset={'slide-in-bottom'}
      >
        <DrawerTrigger>
          <Icon
            color={'#fa823f'}
            cursor={'pointer'}
            boxSize={'45px'}
            css={{
              '@media (max-width: 340px)': {
                boxSize: '30px',
              },
            }}
            as={RxHamburgerMenu}
          />
        </DrawerTrigger>
        <Portal>
          <DrawerPositioner zIndex={1001}>
            <DrawerContent bgColor={'#fa823f'}>
              <DrawerHeader mx={'auto'}>
                <DrawerTitle>
                  <Image
                    filter="drop-shadow(1px 1px 7px rgba(0, 0, 0, 0.27))"
                    boxSize={'80px'}
                    src="emt-logo.png"
                  />
                </DrawerTitle>
              </DrawerHeader>

              <DrawerBody>
                <VStack
                  pt={'2rem'}
                  flexDir={'column'}
                  textAlign={'center'}
                  gap={'2rem'}
                >
                  {/*TEXT TO SECTIONS */}
                  <Text
                    onClick={e => handleClickSection(e, homeRef)}
                    cursor={'pointer'}
                    position={'relative'}
                    focusRing={'none'}
                    textDecor={'none'}
                    fontSize={{ base: '24px', md: '24px', lg: '26px' }}
                    fontWeight={'500'}
                    color={'whiteAlpha.800'}
                    textShadow={'9px 9px 9px rgba(0, 0, 0, 0.05)'}
                  >
                    HOME
                  </Text>

                  <Text
                    onClick={e => handleClickSection(e, servicesRef)}
                    position={'relative'}
                    cursor={'pointer'}
                    focusRing={'none'}
                    textDecor={'none'}
                    fontSize={{ base: '24px', md: '24px', lg: '26px' }}
                    fontWeight={'500'}
                    color={'whiteAlpha.800'}
                    textShadow={'9px 9px 9px rgba(0, 0, 0, 0.05)'}
                  >
                    SERVICES
                  </Text>

                  <Text
                    onClick={e => handleClickSection(e, aboutRef)}
                    position={'relative'}
                    cursor={'pointer'}
                    focusRing={'none'}
                    textDecor={'none'}
                    fontSize={{ base: '24px', md: '24px', lg: '26px' }}
                    fontWeight={'500'}
                    color={'whiteAlpha.800'}
                    textShadow={'9px 9px 9px rgba(0, 0, 0, 0.05)'}
                  >
                    ABOUT
                  </Text>

                  <Text
                    cursor={'pointer'}
                    position={'relative'}
                    focusRing={'none'}
                    textDecor={'none'}
                    fontSize={{ base: '24px', md: '24px', lg: '26px' }}
                    fontWeight={'500'}
                    color={'whiteAlpha.800'}
                    textShadow={'9px 9px 9px rgba(0, 0, 0, 0.05)'}
                    onClick={e => handleEnquireClick(e)}
                  >
                    ENQUIRE
                  </Text>

                  <Text
                    onClick={e => handleClickSection(e, reviewsRef)}
                    position={'relative'}
                    cursor={'pointer'}
                    focusRing={'none'}
                    textDecor={'none'}
                    fontSize={{ base: '24px', md: '24px', lg: '26px' }}
                    fontWeight={'500'}
                    color={'whiteAlpha.800'}
                    textShadow={'9px 9px 9px rgba(0, 0, 0, 0.05)'}
                  >
                    REVIEWS
                  </Text>
                </VStack>
              </DrawerBody>
              <DrawerCloseTrigger
                pt={'1rem'}
                px={'0.5rem'}
                borderColor={'black'}
                fontSize={{ base: '24px', md: '24px', lg: '26px' }}
                fontWeight={'500'}
                _hover={{ cursor: 'pointer' }}
                color={'whiteAlpha.800'}
                textShadow={'9px 9px 9px rgba(0, 0, 0, 0.05)'}
              >
                X
              </DrawerCloseTrigger>
            </DrawerContent>
          </DrawerPositioner>
        </Portal>
      </DrawerRoot>
    </Flex>
  );
}

export default HamburgerDrawer;

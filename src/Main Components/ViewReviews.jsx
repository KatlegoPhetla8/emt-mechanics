import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  Box,
  Button,
  Container,
  Dialog,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPositioner,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Flex,
  Heading,
  HStack,
  Icon,
  Portal,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaStar, FaTools } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

function ViewReviews() {
  const postedReviews = [
    {
      userName: 'John Doe',
      message: `Aaron was so helpful. He sent me a quote, and once I confirmed, he immediately started the service. 
      Quick and efficient — I’m so happy!`,
      ratingStars: 5,
      photoURL: '/',
    },
    {
      userName: 'Alex Doe',
      message: `Aaron was so helpful. He sent me a quote, and once I confirmed, he immediately started the service. 
      Quick and efficient — I’m so happy!`,
      ratingStars: 3,
      photoURL: '/',
    },
  ];
  // Loop that inserts ratings into an array
  for (const user of postedReviews) {
    let ratingStarsArray = [];
    for (let i = 0; i < user.ratingStars; i++) {
      ratingStarsArray[i] = i + 1;
    }
    user.ratingArray = ratingStarsArray;
  }

  return (
    <Flex justifyContent={'center'}>
      <DialogRoot modal={true} lazyMount placement={'top'} size={'full'}>
        <DialogTrigger asChild>
          <Text
            fontSize={{ base: '20px', md: '24px', lg: '26px', xl: '26px' }}
            color={'#fa823f'}
            _after={{
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '0%',
              height: '1px',
              bg: '#fa823f',
              transition: 'width 0.8s ease',
            }}
            _hover={{
              _after: {
                width: '100%',
                left: 0,
                bottom: 0,
                textAlign: 'center',
              },
            }}
            position={'relative'}
            cursor={'pointer'}
            textAlign={'center'}
            fontWeight={'700'}
          >
            More Reviews
            <span>
              <Icon
                color={'#fa823f'}
                boxSize={{ base: '20px', md: '22px', lg: '24px', xl: '24px' }}
                as={IoIosArrowForward}
              />
            </span>
          </Text>
        </DialogTrigger>

        <Portal>
          <DialogBackdrop bgColor={'#fa823f'} />

          <DialogPositioner zIndex={1000}>
            <DialogContent bgColor={'#fa823f'}>
              {/**CLOSE DIALOG BUTTON */}
              <Flex pt={'1rem'} px={'1rem'} justifyContent={'end'}>
                <DialogCloseTrigger asChild>
                  <Button
                    focusRing={'none'}
                    w={{ base: '6rem', md: '8rem', lg: '10rem', xl: '10rem' }}
                    h={{ base: '2.5rem', md: '3rem', lg: '4rem', xl: '4.5rem' }}
                    borderRadius={{
                      base: '20px',
                      md: '20px',
                      lg: '35px',
                      xl: '35px',
                    }}
                    color={'#fa823f'}
                    bgColor={'black'}
                    borderWidth={'2px'}
                    borderColor={'black'}
                    fontSize={'18px'}
                    cursor={'pointer'}
                    _hover={{
                      color: 'black',
                      bgColor: '#fa823f',
                      borderWidth: '2px',
                      borderColor: 'black',
                    }}
                  >
                    Close
                  </Button>
                </DialogCloseTrigger>
              </Flex>

              <DialogHeader placeContent={'center'} color={'whiteAlpha.700'}>
                {' '}
                <DialogTitle
                  textAlign={'center'}
                  fontSize={{
                    base: '30px',
                    md: '34px',
                    lg: '38px',
                    xl: '40px',
                  }}
                  fontWeight={'700'}
                  pt={'4rem'}
                  color={'black'}
                >
                  Reviews
                </DialogTitle>{' '}
              </DialogHeader>

              <DialogBody justifyContent={'center'} pt={'4rem'}>
                {postedReviews.map((user, index) => (
                  <Flex
                    key={index}
                    px={'2rem'}
                    mx={'auto'}
                    w={{ base: '80%', md: '80%', lg: '50%', xl: '50%' }}
                    mb={'2rem'}
                    backgroundColor={'black'}
                    justifyContent={'center'}
                    pt={'2rem'}
                    borderRadius={'10px'}
                  >
                    <VStack
                      w={{ base: '100%', md: '100%', lg: '50%', xl: '50%' }}
                      pb={'6rem'}
                    >
                      <AvatarRoot shape={'rounded'} colorPalette={'green'}>
                        <AvatarFallback
                          borderColor={'#fa823f'}
                          backgroundColor={'#fa823f'}
                          borderWidth={'4px'}
                          p={'18px'}
                          borderRadius={'90%'}
                          fontSize={{
                            base: '16px',
                            md: '18px',
                            lg: '20px',
                            xl: '20px',
                          }}
                          color="black"
                          name={user.userName}
                        />
                        <AvatarImage src={user.photoURL} />
                      </AvatarRoot>
                      <Text
                        textAlign={'center'}
                        fontWeight={'700'}
                        pb={'1rem'}
                        fontSize={{
                          base: '18px',
                          md: '20px',
                          lg: '22px',
                          xl: '22px',
                        }}
                        as={'h2'}
                        pt={'1rem'}
                      >
                        {user.userName}
                      </Text>
                      <Text
                        textAlign={'center'}
                        fontSize={{ base: '16px', md: '18px', lg: '20px' }}
                      >
                        {user.message}
                      </Text>
                      <HStack>
                        {user.ratingArray?.map((_, index) => (
                          <Box key={index}>
                            <Icon
                              as={FaStar}
                              boxSize={{
                                base: '20px',
                                md: '22px',
                                lg: '24px',
                                xl: '24px',
                              }}
                              color={'#fa823f'}
                            />
                          </Box>
                        ))}
                      </HStack>
                    </VStack>
                  </Flex>
                ))}
              </DialogBody>
            </DialogContent>
          </DialogPositioner>
        </Portal>
      </DialogRoot>
    </Flex>
  );
}

export default ViewReviews;

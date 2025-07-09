import {
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
  Drawer,
  FieldLabel,
  FieldRoot,
  FieldsetContent,
  FieldsetRoot,
  Flex,
  For,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Portal,
  RatingGroup,
  Stack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function AddReview() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <Flex
      pt={'2rem'}
      pb={'3rem'}
      flexDir={'column'}
      backgroundColor={'#fa823f'}
      mt={'12rem'}
      justifyContent={'center'}
    >
      <Heading
        color={'whiteAlpha.700'}
        fontSize={{ base: '20px', md: '24px', lg: '26px', xl: '26px' }}
        textAlign={'center'}
        as={'h3'}
      >
        Please feel free to leave a review.
        <br /> We’d love to hear from you.
      </Heading>

      <DialogRoot modal={true} lazyMount placement={'top'} size={'full'}>
        <DialogTrigger asChild>
          <Button
            mt={'2.5rem'}
            mx={'auto'}
            h={{ base: '4rem', md: '5rem', lg: '6rem', xl: '7rem' }}
            w={{ base: '14rem', md: '16rem', lg: '20rem', xl: '21rem' }}
            bgColor={'whiteAlpha.700'}
            color={'#fa823f'}
            cursor={'pointer'}
            opacity={'0.9'}
            borderRadius={{ base: '40px', md: '40px', lg: '60px', xl: '60px' }}
            boxShadow={'2px 2px 2px 3px #fa823f'}
            transition=" 0.5s ease-out"
            borderColor={'whiteAlpha.700'}
            borderWidth={'3px'}
            _hover={{
              color: ' #fa823f',
              bgColor: 'whiteAlpha.800',
              boxShadow: 'none',
              borderWidth: '2px',
              borderColor: ' #fa823f',
            }}
          >
            Click to Review
          </Button>
        </DialogTrigger>

        <Portal>
          <DialogBackdrop bgColor={'#fa823f'} />

          <DialogPositioner zIndex={1001}>
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

              {/**HEADING FOR LOGGED IN OR LOGGED OUT*/}
              {loggedIn ? (
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
                    ADD A REVIEW
                  </DialogTitle>{' '}
                </DialogHeader>
              ) : (
                <DialogHeader placeContent={'center'}>
                  {' '}
                  <DialogTitle
                    textAlign={'center'}
                    fontSize={{
                      base: '28px',
                      md: '30px',
                      lg: '38px',
                      xl: '40px',
                    }}
                    fontWeight={'700'}
                    pt={'4rem'}
                    color={'black'}
                    lineHeight={'2rem'}
                  >
                    LOGIN TO GOOGLE TO
                    <br /> ADD A REVIEW
                  </DialogTitle>{' '}
                </DialogHeader>
              )}

              {/**Displayed if logged in */}
              {loggedIn ? (
                <DialogBody>
                  <Flex
                    px={'4rem'}
                    mb={'4rem'}
                    mx={'auto'}
                    mt={'4rem'}
                    pt="2rem"
                    pb={'2rem'}
                    borderRadius={'10px'}
                    w={{ base: '94%', md: '90%', lg: '80%', xl: '80%' }}
                    backgroundColor={'black'}
                    justifyContent={'center'}
                  >
                    <FieldsetRoot>
                      <VStack
                        pb={'4rem'}
                        alignItems={{
                          base: 'center',
                          md: 'center',
                          lg: 'start',
                          xl: 'start',
                        }}
                      >
                        <Heading
                          fontSize={{
                            base: '26px',
                            md: '28px',
                            lg: '30px',
                            xl: '32px',
                          }}
                          textAlign={{
                            base: 'center',
                            md: 'center',
                            lg: 'start',
                            xl: 'start',
                          }}
                          color={'#fa823f'}
                        >
                          Review Rating
                        </Heading>
                        <Text
                          fontSize={{
                            base: '16px',
                            md: '18px',
                            lg: '20px',
                            xl: '22px',
                          }}
                          textAlign={{
                            base: 'center',
                            md: 'center',
                            lg: 'start',
                            xl: 'start',
                          }}
                          color={'#fa823f'}
                        >
                          Please enter you details and leave us a review.
                        </Text>
                      </VStack>
                      <FieldsetContent>
                        <FieldRoot
                          pb={'4rem'}
                          alignItems={{
                            base: 'center',
                            md: 'center',
                            lg: 'start',
                            xl: 'start',
                          }}
                        >
                          <FieldLabel
                            pb={'20px'}
                            as={'label'}
                            color={'#fa823f'}
                            fontSize={{
                              base: '16px',
                              md: '18px',
                              lg: '20px',
                              xl: '22px',
                            }}
                          >
                            Rating
                          </FieldLabel>
                          {/**Rating system */}
                          <HStack>
                            {[1, 2, 3, 4, 5].map(star => (
                              <Box
                                key={star}
                                as="button"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                              >
                                <Icon
                                  as={FaStar}
                                  boxSize={{
                                    base: '20px',
                                    md: '22px',
                                    lg: '24px',
                                    xl: '24px',
                                  }}
                                  color={
                                    (hover || rating) >= star
                                      ? '#fa823f'
                                      : '#E0E0E0'
                                  }
                                />
                              </Box>
                            ))}
                          </HStack>
                        </FieldRoot>

                        <FieldRoot
                          pb={'4rem'}
                          alignItems={{
                            base: 'center',
                            md: 'center',
                            lg: 'start',
                            xl: 'start',
                          }}
                        >
                          <FieldLabel
                            pb={'20px'}
                            as={'label'}
                            color={'#fa823f'}
                            fontSize={{
                              base: '16px',
                              md: '18px',
                              lg: '20px',
                              xl: '22px',
                            }}
                          >
                            Message
                          </FieldLabel>
                          <Textarea
                            as={'textarea'}
                            borderWidth={'2px'}
                            color={'white'}
                            borderRadius={'10px'}
                            backgroundColor={'black'}
                            focusRing={'none'}
                            borderColor={'#fa823f'}
                            required
                            h={'10rem'}
                            w={{
                              base: '100%',
                              md: '100%',
                              lg: '100%',
                              xl: '100%',
                            }}
                          />
                        </FieldRoot>
                        <Button
                          alignSelf={{
                            base: 'center',
                            md: 'center',
                            lg: 'start',
                            xl: 'start',
                          }}
                          w={{
                            base: '8rem',
                            md: '8.5rem',
                            lg: '10rem',
                            xl: '10rem',
                          }}
                          h={{
                            base: '3rem',
                            md: '3.5rem',
                            lg: '4rem',
                            xl: '4.5rem',
                          }}
                          borderRadius={{
                            base: '20px',
                            md: '20px',
                            lg: '35px',
                            xl: '35px',
                          }}
                          color={'black'}
                          bgColor={'#fa823f'}
                          borderWidth={'2px'}
                          borderColor={'black'}
                          fontSize={'18px'}
                          cursor={'pointer'}
                          _hover={{
                            color: '#fa823f',
                            bgColor: 'black',
                            borderWidth: '2px',
                            borderColor: '#fa823f',
                          }}
                        >
                          Submit
                        </Button>
                      </FieldsetContent>
                    </FieldsetRoot>
                  </Flex>
                </DialogBody>
              ) : (
                <Flex pt={'2rem'} pb={'3rem'} backgroundColor={'#fa823f'}>
                  <Button
                    mt={'2.5rem'}
                    mx={'auto'}
                    h={{ base: '4rem', md: '4rem', lg: '6rem', xl: '6rem' }}
                    w={{ base: '16rem', md: '16rem', lg: '20rem', xl: '20rem' }}
                    bgColor={'whiteAlpha.700'}
                    color={'#fa823f'}
                    cursor={'pointer'}
                    opacity={'0.9'}
                    borderRadius={'40px'}
                    boxShadow={'2px 2px 2px 3px #fa823f'}
                    transition=" 0.5s ease-out"
                    borderColor={'whiteAlpha.700'}
                    borderWidth={'3px'}
                    _hover={{
                      color: ' #fa823f',
                      bgColor: 'whiteAlpha.800',
                      boxShadow: 'none',
                      borderWidth: '2px',
                      borderColor: ' #fa823f',
                    }}
                    fontWeight={'bold'}
                    fontSize={{
                      base: '32px',
                      md: '36px',
                      lg: '40px',
                      xl: '40px',
                    }}
                  >
                    Login{' '}
                    <span>
                      <Icon boxSize={'50px'} as={FcGoogle} />
                    </span>
                  </Button>
                </Flex>
              )}
            </DialogContent>
          </DialogPositioner>
        </Portal>
      </DialogRoot>
    </Flex>
  );
}

export default AddReview;

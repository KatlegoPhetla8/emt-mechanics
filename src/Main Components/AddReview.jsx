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
  Spinner,
  Stack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import useRatingSubmit from '../hooks/useRatingSubmit';
import useLoginRatingAuth from '../hooks/useLoginRatingAuth';
import useShowToast from '../hooks/useShowToast.js';
import { TbLogout2 } from 'react-icons/tb';

function AddReview() {
  const [loggedIn, setLoggedIn] = useState(true);
  const { user, login, logout, authLoading } = useLoginRatingAuth();
  const { handleRatingSubmit, isLoading } = useRatingSubmit();
  const { successRatingToast, errorRatingToast, infoRatingToast } =
    useShowToast();
  const [userRating, setUserRating] = useState({
    reviewMessage: '',
    rating: 0,
  });

  // Function for submitting data to Rating Hook
  async function handleSubmit(e) {
    e.preventDefault();
    if (userRating.rating === 0 || userRating.reviewMessage.trim() === '') {
      infoRatingToast();
      return;
    }
    await handleRatingSubmit(userRating);
    setUserRating({
      reviewMessage: '',
      rating: 0,
    });
  }

  // If authorising is loading display Spinner
  if (authLoading) {
    return (
      <Box>
        <Spinner color={'black'} size={'xl'} />
      </Box>
    );
  }

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
        {/*Dialog Trigger Button */}
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

          <DialogPositioner>
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
              {user ? (
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
              {user ? (
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
                        <Flex flexDir={'column'}>
                          <Text
                            color={'whiteAlpha.800'}
                            textAlign={'center'}
                            fontSize={{
                              base: '18px',
                              md: '20px',
                              lg: '24px',
                              xl: '24px',
                            }}
                            pb={'1rem'}
                            fontWeight={'bold'}
                          >{`Hello, ${user.displayName}`}</Text>
                          <Button
                            color={'black'}
                            bgColor={'#fa823f'}
                            _hover={{
                              color: '#fa823f',
                              bgColor: 'black',
                              borderColor: '#fa823f',
                            }}
                            mx={'auto'}
                            w={{ base: '70%', md: '30%', lg: '30%', xl: '20%' }}
                            borderRadius={{
                              base: '20px',
                              md: '20px',
                              lg: '60px',
                              xl: '60px',
                            }}
                            mb={'2rem'}
                            gap={2}
                            onClick={logout}
                          >
                            Logout
                            <span>
                              <Icon
                                boxSize={{
                                  base: '20px',
                                  md: '20px',
                                  lg: '30px',
                                  xl: '30px',
                                }}
                                as={TbLogout2}
                              />
                            </span>
                          </Button>
                        </Flex>

                        <form onSubmit={handleSubmit}>
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
                              <RatingGroup.Root
                                colorPalette={'orange'}
                                count={5}
                                size="lg"
                                onValueChange={({ value }) =>
                                  setUserRating({
                                    ...userRating,
                                    rating: value,
                                  })
                                }
                                value={userRating.rating}
                              >
                                <RatingGroup.HiddenInput />
                                <RatingGroup.Control />
                              </RatingGroup.Root>
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
                                lg: '50%',
                                xl: '50%',
                              }}
                              value={userRating.reviewMessage}
                              onChange={e =>
                                setUserRating({
                                  ...userRating,
                                  reviewMessage: e.target.value,
                                })
                              }
                            />
                          </FieldRoot>
                          <Flex
                            justifyContent={{
                              base: 'center',
                              md: 'center',
                              lg: 'flex-start',
                              xl: 'flex-start',
                            }}
                          >
                            <Button
                              w={{
                                base: '100%',
                                md: '50%',
                                lg: '10rem',
                                xl: '20%',
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
                              type="submit"
                              loading={isLoading}
                            >
                              Submit
                            </Button>
                          </Flex>
                        </form>
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
                    onClick={login}
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

import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  Link,
  RatingGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { BsPersonCircle, BsPersonFill } from 'react-icons/bs';
import { IoPersonCircleSharp } from 'react-icons/io5';
import AddReview from './ViewReviews.jsx';
import { GlobalStateContext } from '../context/ContextProvider.jsx';

function ClientReviews() {
  const { reviewsRef } = useContext(GlobalStateContext);
  const reviews = [
    {
      fullName: 'Monica',
      message: `I have nothing to fault with Aaron's service. He was professional and completely honest from the start. 
      Nothing was bought or done without discussing it with me first. Thank you.`,
      stars: 5,
    },
    {
      fullName: 'Zadie',
      message: `I took my car to Aaron as a referral. The work was done well, and after comparing costs, Aaron was by far the most affordable.`,
      stars: 4,
    },
    {
      fullName: 'Bra Mpho',
      message: `I will definitely take my car to Aaron again. He was professional and very approachable`,
      stars: 4,
    },
    {
      fullName: 'Lerato Motle',
      message: `I was having a lot of issues with my car. Aaron checked everything and gave me a full job list along with a detailed quote. 
      It was so cost-effective, and when the car was done — it drove like a dream. So good!`,
      stars: 5,
    },
  ];
  return (
    <Box ref={reviewsRef} mt={'12rem'} backgroundColor={'whiteAlpha.100'}>
      <Heading
        pt={'4rem'}
        color={'#fa823f'}
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
        Our Client Reviews
      </Heading>
      <Grid
        placeItems={'center'}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(2, 1fr)',
        }}
        gap={{ base: '4rem', md: '6rem', lg: '8rem' }}
        pt={'6rem'}
        pb={'2rem'}
      >
        {reviews.map((client, index) => (
          <Box
            key={index}
            position={'relative'}
            display={'flex'}
            paddingX={'10px'}
            alignItems={'center'}
            justifyContent={'center'}
            borderWidth={'2px'}
            backgroundColor={'whiteAlpha.700'}
            borderColor={'#fa823f'}
            borderRadius={'10px'}
            boxSize={{ base: '13rem', md: '16rem', lg: '16rem', xl: '20rem' }}
            css={{
              '@media (min-width: 1024px)': {
                boxSize: '13rem',
              },
              '@media (max-width: 1048px)': {
                boxSize: '19rem',
              },
            }}
          >
            <Icon
              position={'absolute'}
              top="-34px"
              left="40%"
              boxSize={'60px'}
              color={'#fa823f'}
              as={IoPersonCircleSharp}
            />
            <Stack spacing={3} mt={6}>
              <Text
                color={'#fa823f'}
                fontSize={{ base: '14px', md: '16px', lg: '18px', xl: '18px' }}
                fontStyle="italic"
                textAlign="center"
              >
                {client.message}
              </Text>

              <Stack mx={'auto'}>
                <RatingGroup.Root
                  colorPalette={'orange'}
                  readOnly
                  count={client.stars}
                  defaultValue={client.stars}
                  size="md"
                >
                  <RatingGroup.HiddenInput />
                  <RatingGroup.Control />
                </RatingGroup.Root>
              </Stack>

              <Text
                color={'#fa823f'}
                fontSize={{ base: '16px', md: '18px', lg: '22px', xl: '24px' }}
                fontWeight="bold"
                textAlign="center"
              >
                {client.fullName}
              </Text>
            </Stack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default ClientReviews;

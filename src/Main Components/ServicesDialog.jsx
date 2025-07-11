import React, { useContext } from 'react';
import {
  Box,
  Button,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogPositioner,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Flex,
  Heading,
  Icon,
  Image,
  Portal,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaTools } from 'react-icons/fa';
import { RiOilFill } from 'react-icons/ri';
import { FaCarCrash } from 'react-icons/fa';
import { GiCarWheel } from 'react-icons/gi';
import { FaBatteryFull } from 'react-icons/fa';
import { WiDaySunny } from 'react-icons/wi';
import { GiGearStickPattern } from 'react-icons/gi';

function ServicesDialog() {
  return (
    <Flex pt={'4rem'}>
      <DialogRoot modal={true} lazyMount placement={'top'} size={'full'}>
        <DialogTrigger asChild>
          <Image
            loading="lazy"
            filter={'brightness(70%)'}
            cursor={'pointer'}
            boxShadow={'1px 1px 3px 3px rgb(0, 0, 0, 0.3)'}
            borderRadius={'20px'}
            w={{ base: '90%', md: '90%', lg: '80%', xl: '80%' }}
            mx={'auto'}
            h={{ base: '500px', md: '540px', lg: '550px', xl: '580px' }}
            css={{
              '@media (max-width: 335px)': {
                w: '94%',
              },
            }}
            alt="services image"
            src="services.png"
            transition="transform 0.5s ease-out"
            _hover={{
              transform: 'scale(1.1)',
              boxShadow: '1px 1px 3px 3px #fa823f',
              filter: 'brightness(80%)',
            }}
          />
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
                    fontSize={{
                      basease: '14px',
                      md: '16px',
                      lg: '18px',
                      xl: '20px',
                    }}
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
                  OUR SERVICES
                </DialogTitle>{' '}
              </DialogHeader>

              <DialogBody px={'4rem'} pt={'4rem'}>
                <VStack
                  alignItems={{
                    base: 'center',
                    md: 'center',
                    lg: 'self-start',
                    xl: 'self-start',
                  }}
                  pb={'2rem'}
                >
                  {/**GENERAL CAR REPAIRS SECTION */}
                  <Flex
                    px={'2rem'}
                    w={{ base: '125%', md: '80%', lg: '50%', xl: '50%' }}
                    css={{
                      '@media (max-width: 345px)': {
                        w: '140%',
                      },
                    }}
                    backgroundColor={'black'}
                    justifyContent={{
                      base: 'center',
                      md: 'center',
                      lg: 'left',
                      xl: 'left',
                    }}
                    pt={'2rem'}
                    borderRadius={'10px'}
                    alignItems={'center'}
                  >
                    <Box
                      w={{ base: '80%', md: '50%', lg: '70%', xl: '50%' }}
                      pb={'6rem'}
                    >
                      <Icon
                        as={FaTools}
                        boxSize={{
                          base: '36px',
                          md: '38px',
                          lg: '40px',
                          xl: '42px',
                        }}
                        color={'#fa823f'}
                      />
                      <Heading
                        fontWeight={'700'}
                        pb={'1rem'}
                        fontSize={{
                          base: '26px',
                          md: '28px',
                          lg: '30px',
                          xl: '32px',
                        }}
                        css={{
                          '@media (max-width: 345px)': {
                            fontSize: '24px',
                          },
                        }}
                        as={'h2'}
                        pt={'1rem'}
                      >
                        General Car Repairs
                      </Heading>
                      <Text
                        fontSize={{
                          base: '16px',
                          md: '18px',
                          lg: '20px',
                          xl: '22px',
                        }}
                        css={{
                          '@media (max-width: 345px)': {
                            fontSize: '14px',
                          },
                        }}
                      >
                        We handle all common mechanical issues — from rattling
                        noises to faulty components. If it needs fixing, we’ve
                        got you covered.
                      </Text>
                    </Box>
                  </Flex>

                  {/**OIL CHANGES SECTION */}
                  <Flex
                    px={'2rem'}
                    w={{ base: '125%', md: '80%', lg: '50%', xl: '50%' }}
                    css={{
                      '@media (max-width: 345px)': {
                        w: '140%',
                      },
                    }}
                    alignSelf={{
                      base: 'center',
                      md: 'center',
                      lg: 'flex-end',
                      xl: 'flex-end',
                    }}
                    backgroundColor={'black'}
                    justifyContent={{
                      base: 'center',
                      md: 'center',
                      lg: 'flex-end',
                      xl: 'flex-end',
                    }}
                    pt={'2rem'}
                    borderRadius={'10px'}
                  >
                    <Box
                      w={{ base: '80%', md: '50%', lg: '70%', xl: '50%' }}
                      pb={'6rem'}
                    >
                      <Icon
                        as={RiOilFill}
                        boxSize={{
                          base: '36px',
                          md: '38px',
                          lg: '40px',
                          xl: '42px',
                        }}
                        color={'#fa823f'}
                      />
                      <Heading
                        fontWeight={'700'}
                        pb={'1rem'}
                        fontSize={{
                          base: '26px',
                          md: '28px',
                          lg: '30px',
                          xl: '32px',
                        }}
                        css={{
                          '@media (max-width: 345px)': {
                            fontSize: '24px',
                          },
                        }}
                        as={'h2'}
                        pt={'1rem'}
                      >
                        Oil Changes & Routine Maintenance
                      </Heading>
                      <Text
                        fontSize={{
                          base: '16px',
                          md: '18px',
                          lg: '20px',
                          xl: '22px',
                        }}
                        css={{
                          '@media (max-width: 345px)': {
                            fontSize: '14px',
                          },
                        }}
                      >
                        Keep your engine running smoothly with regular oil
                        changes, filter replacements, and maintenance checks
                        that extend your car’s lifespan.
                      </Text>
                    </Box>
                  </Flex>

                  {/**ENGINE DIAGNOSTICS SECTION */}
                  <Flex
                    px={'2rem'}
                    w={{ base: '125%', md: '80%', lg: '50%', xl: '50%' }}
                    css={{
                      '@media (max-width: 345px)': {
                        w: '140%',
                      },
                    }}
                    alignSelf={{
                      base: 'center',
                      md: 'center',
                      lg: 'flex-start',
                      xl: 'flex-start',
                    }}
                    backgroundColor={'black'}
                    justifyContent={{
                      base: 'center',
                      md: 'center',
                      lg: 'flex-start',
                      xl: 'flex-start',
                    }}
                    pt={'2rem'}
                    borderRadius={'10px'}
                  >
                    <Box
                      w={{ base: '80%', md: '50%', lg: '70%', xl: '50%' }}
                      pb={'6rem'}
                    >
                      <Icon
                        as={FaCarCrash}
                        boxSize={{
                          base: '36px',
                          md: '38px',
                          lg: '40px',
                          xl: '42px',
                        }}
                        color={'#fa823f'}
                      />
                      <Heading
                        fontWeight={'700'}
                        pb={'1rem'}
                        fontSize={{
                          base: '26px',
                          md: '28px',
                          lg: '30px',
                          xl: '32px',
                        }}
                        css={{
                          '@media (max-width: 345px)': {
                            fontSize: '24px',
                          },
                        }}
                        as={'h2'}
                        pt={'1rem'}
                      >
                        Engine Diagnostics & Warning Lights
                      </Heading>
                      <Text
                        fontSize={{
                          base: '16px',
                          md: '18px',
                          lg: '20px',
                          xl: '22px',
                        }}
                        css={{
                          '@media (max-width: 345px)': {
                            fontSize: '14px',
                          },
                        }}
                      >
                        Check engine light on? We use advanced diagnostic tools
                        to quickly identify and fix engine issues before they
                        become serious problems.
                      </Text>
                    </Box>
                  </Flex>

                  {/**BRAKE AND SUSPENSION SECTION */}
                  <Flex
                    px={'2rem'}
                    w={{ base: '125%', md: '80%', lg: '50%', xl: '50%' }}
                    css={{
                      '@media (max-width: 345px)': {
                        w: '140%',
                      },
                    }}
                    alignSelf={{
                      base: 'center',
                      md: 'center',
                      lg: 'flex-end',
                      xl: 'flex-end',
                    }}
                    backgroundColor={'black'}
                    justifyContent={{
                      base: 'center',
                      md: 'center',
                      lg: 'flex-end',
                      xl: 'flex-end',
                    }}
                    pt={'2rem'}
                    borderRadius={'10px'}
                  >
                    <Box
                      w={{ base: '80%', md: '50%', lg: '70%', xl: '50%' }}
                      pb={'6rem'}
                    >
                      <Icon
                        as={GiCarWheel}
                        boxSize={{
                          base: '36px',
                          md: '38px',
                          lg: '40px',
                          xl: '42px',
                        }}
                        color={'#fa823f'}
                      />
                      <Heading
                        fontWeight={'700'}
                        pb={'1rem'}
                        fontSize={{
                          base: '26px',
                          md: '28px',
                          lg: '30px',
                          xl: '32px',
                        }}
                        css={{
                          '@media (max-width: 345px)': {
                            fontSize: '24px',
                          },
                        }}
                        as={'h2'}
                        pt={'1rem'}
                      >
                        Brake Repairs & Suspension
                      </Heading>
                      <Text
                        fontSize={{
                          base: '16px',
                          md: '18px',
                          lg: '20px',
                          xl: '22px',
                        }}
                        css={{
                          '@media (max-width: 345px)': {
                            fontSize: '14px',
                          },
                        }}
                      >
                        Whether it’s worn brake pads or a shaky suspension,
                        we’ll make sure your car stops safely and drives
                        smoothly on any road.
                      </Text>
                    </Box>
                  </Flex>

                  {/**BATTERY AND ELECTRICAL SECTION */}
                  <Flex
                    px={'2rem'}
                    w={{ base: '125%', md: '80%', lg: '50%', xl: '50%' }}
                    css={{
                      '@media (max-width: 345px)': {
                        w: '140%',
                      },
                    }}
                    alignSelf={{
                      base: 'center',
                      md: 'center',
                      lg: 'flex-start',
                      xl: 'self-start',
                    }}
                    backgroundColor={'black'}
                    justifyContent={{
                      base: 'center',
                      md: 'center',
                      lg: 'flex-start',
                      xl: 'self-start',
                    }}
                    pt={'2rem'}
                    borderRadius={'10px'}
                  >
                    <Box
                      w={{ base: '80%', md: '50%', lg: '70%', xl: '50%' }}
                      pb={'6rem'}
                    >
                      <Icon
                        as={FaBatteryFull}
                        boxSize={'40px'}
                        color={'#fa823f'}
                      />
                      <Heading
                        fontWeight={'700'}
                        pb={'1rem'}
                        fontSize={{
                          base: '26px',
                          md: '28px',
                          lg: '30px',
                          xl: '32px',
                        }}
                        css={{
                          '@media (max-width: 345px)': {
                            fontSize: '24px',
                          },
                        }}
                        as={'h2'}
                        pt={'1rem'}
                      >
                        Battery & Electrical Systems
                      </Heading>
                      <Text
                        fontSize={{
                          base: '16px',
                          md: '18px',
                          lg: '20px',
                          xl: '22px',
                        }}
                        css={{
                          '@media (max-width: 345px)': {
                            fontSize: '14px',
                          },
                        }}
                      >
                        Struggling to start your car? We test, replace, and
                        repair batteries, alternators, and full electrical
                        systems to get you back on the road.
                      </Text>
                    </Box>
                  </Flex>

                  {/**AIR CONDITIONING AND HEATING SECTION */}
                  <Flex
                    px={'2rem'}
                    w={{ base: '125%', md: '80%', lg: '50%', xl: '50%' }}
                    css={{
                      '@media (max-width: 345px)': {
                        w: '140%',
                      },
                    }}
                    alignSelf={{
                      base: 'center',
                      md: 'center',
                      lg: 'flex-end',
                      xl: 'flex-end',
                    }}
                    backgroundColor={'black'}
                    justifyContent={{
                      base: 'center',
                      md: 'center',
                      lg: 'flex-end',
                      xl: 'flex-end',
                    }}
                    pt={'2rem'}
                    borderRadius={'10px'}
                  >
                    <Box
                      w={{ base: '80%', md: '50%', lg: '70%', xl: '50%' }}
                      pb={'6rem'}
                    >
                      <Icon
                        as={WiDaySunny}
                        boxSize={{
                          base: '36px',
                          md: '38px',
                          lg: '40px',
                          xl: '42px',
                        }}
                        color={'#fa823f'}
                      />
                      <Heading
                        fontWeight={'700'}
                        pb={'1rem'}
                        fontSize={{
                          base: '26px',
                          md: '28px',
                          lg: '30px',
                          xl: '32px',
                        }}
                        css={{
                          '@media (max-width: 345px)': {
                            fontSize: '24px',
                          },
                        }}
                        as={'h2'}
                        pt={'1rem'}
                      >
                        Air Conditioning & Heating
                      </Heading>
                      <Text
                        fontSize={{
                          base: '16px',
                          md: '18px',
                          lg: '20px',
                          xl: '22px',
                        }}
                        css={{
                          '@media (max-width: 345px)': {
                            fontSize: '14px',
                          },
                        }}
                      >
                        Stay comfortable in any season. We repair and recharge
                        vehicle A/C systems so you can enjoy cool air in summer
                        and warmth in winter.
                      </Text>
                    </Box>
                  </Flex>

                  {/**CLUTCH AND GEARBOX SECTION */}
                  <Flex
                    px={'2rem'}
                    w={{ base: '125%', md: '80%', lg: '50%', xl: '50%' }}
                    css={{
                      '@media (max-width: 345px)': {
                        w: '140%',
                      },
                    }}
                    alignSelf={{
                      base: 'center',
                      md: 'center',
                      lg: 'flex-start',
                      xl: 'flex-start',
                    }}
                    backgroundColor={'black'}
                    justifyContent={{
                      base: 'center',
                      md: 'center',
                      lg: 'flex-start',
                      xl: 'flex-start',
                    }}
                    pt={'2rem'}
                    borderRadius={'10px'}
                  >
                    <Box
                      w={{ base: '80%', md: '50%', lg: '70%', xl: '50%' }}
                      pb={'6rem'}
                    >
                      <Icon
                        as={GiGearStickPattern}
                        boxSize={{
                          base: '36px',
                          md: '38px',
                          lg: '40px',
                          xl: '42px',
                        }}
                        color={'#fa823f'}
                      />
                      <Heading
                        fontWeight={'700'}
                        pb={'1rem'}
                        fontSize={{
                          base: '26px',
                          md: '28px',
                          lg: '30px',
                          xl: '32px',
                        }}
                        css={{
                          '@media (max-width: 345px)': {
                            fontSize: '24px',
                          },
                        }}
                        as={'h2'}
                        pt={'1rem'}
                      >
                        Clutch & Gearbox Repairs
                      </Heading>
                      <Text
                        fontSize={{
                          base: '16px',
                          md: '18px',
                          lg: '20px',
                          xl: '22px',
                        }}
                        css={{
                          '@media (max-width: 345px)': {
                            fontSize: '14px',
                          },
                        }}
                      >
                        We diagnose and repair clutch issues, gear slipping, and
                        transmission problems to ensure smooth shifting and
                        better drivability.
                      </Text>
                    </Box>
                  </Flex>
                </VStack>
              </DialogBody>
            </DialogContent>
          </DialogPositioner>
        </Portal>
      </DialogRoot>
    </Flex>
  );
}

export default ServicesDialog;

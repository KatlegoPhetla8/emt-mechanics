import {
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
  Field,
  FieldLabel,
  FieldRoot,
  Fieldset,
  FieldsetContent,
  FieldsetRoot,
  Flex,
  Heading,
  Icon,
  Input,
  Portal,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { MdOutlineAddIcCall } from 'react-icons/md';

import React, { useContext, useState } from 'react';
import { GlobalStateContext } from '../context/ContextProvider';
import { object } from 'framer-motion/client';
import useShowToast from '../hooks/useShowToast.js';

function Enquire() {
  const { successEnquireToast, errorEnquireToast, infoEnquireToast } =
    useShowToast();
  const { open, setOpen } = useContext(GlobalStateContext);
  const [enquireInputs, setEnquireInputs] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    subject: '',
    message: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    const enquireValues = Object.values(enquireInputs);

    for (const value of enquireValues) {
      if (value === '') {
        infoEnquireToast();
        console.log('Info toast');
        return;
      } else {
        successEnquireToast();

        console.log('Success');
        setEnquireInputs({
          fullName: '',
          email: '',
          contactNumber: '',
          subject: '',
          message: '',
        });
      }
    }
  }

  return (
    <Flex>
      <DialogRoot
        modal={true}
        lazyMount
        placement={'top'}
        size={'full'}
        open={open}
        onOpenChange={e => setOpen(e.open)}
      >
        <DialogTrigger asChild>
          <Button
            focusRing={'none'}
            h={{ base: '3rem', md: '4rem', lg: '6rem', xl: '8rem' }}
            w={{ base: '13.5rem', md: '20rem', lg: '24rem', xl: '26rem' }}
            opacity={'0.9'}
            borderRadius={{
              base: '40px',
              md: '40px',
              lg: '50px',
              xl: '60px',
            }}
            boxShadow={'2px 2px 2px 3px #fa823f'}
            cursor={'pointer'}
            backgroundColor={'#fa823f'}
            color={'whiteAlpha.700'}
            transition=" 0.5s ease-out"
            _hover={{
              color: '#fa823f',
              bgColor: 'whiteAlpha.700',
              boxShadow: 'none',
              borderWidth: '2px',
              borderColor: ' #fa823f',
            }}
            fontWeight={'bold'}
            fontSize={{ base: '20px', md: '24', lg: '30px', xl: '34px' }}
            css={{
              '@media (max-width: 390px)': {
                w: '11rem',
                h: '3rem',
              },
            }}
          >
            ENQUIRE
          </Button>
        </DialogTrigger>
        <Portal>
          <DialogBackdrop bgColor={'#fa823f'} />

          <DialogPositioner zIndex={1000}>
            <DialogContent bgColor={'#fa823f'}>
              {/**CLOSE DIALOG BUTTON */}
              <Flex pt={'1rem'} px={'1rem'} justifyContent={'end'}>
                <DialogCloseTrigger asChild>
                  <Button
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
                    focusRing={'none'}
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
                  ENQUIRE
                </DialogTitle>{' '}
              </DialogHeader>

              <DialogBody pt={'4rem'}>
                <Flex
                  flexDir={{
                    base: 'column',
                    md: 'column',
                    lg: 'row',
                    xl: 'row',
                  }}
                  gap={'10rem'}
                  px={'4rem'}
                  mb={'4rem'}
                  mx={'auto'}
                  mt={'2rem'}
                  pt="2rem"
                  pb={'2rem'}
                  borderRadius={'10px'}
                  w={{ base: '96%', md: '90%', lg: '90%', xl: '90%' }}
                  backgroundColor={'black'}
                  justifyContent={'space-evenly'}
                >
                  <FieldsetRoot>
                    <VStack
                      pb={'4rem'}
                      textAlign={{
                        base: 'center',
                        md: 'center',
                        lg: 'start',
                        xl: 'start',
                      }}
                      alignItems={{
                        base: 'center',
                        md: 'center',
                        lg: 'start',
                        xl: 'start',
                      }}
                    >
                      <Heading
                        as={'h2'}
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
                        Contact Us
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
                        Please fill out the form below and we’ll be in touch
                        soon.
                      </Text>
                    </VStack>

                    <form onSubmit={handleSubmit}>
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
                            Full Name
                          </FieldLabel>
                          <Input
                            onChange={e =>
                              setEnquireInputs({
                                ...enquireInputs,
                                fullName: e.target.value,
                              })
                            }
                            required
                            as={'input'}
                            w={{
                              base: '100%',
                              md: '80%',
                              lg: '100%',
                              xl: '100%',
                            }}
                            h={'3rem'}
                            borderWidth={'2px'}
                            color={'white'}
                            borderRadius={'10px'}
                            backgroundColor={'black'}
                            focusRing={'none'}
                            borderColor={'#fa823f'}
                            type="text"
                            value={enquireInputs.fullName}
                          />
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
                            as="label"
                            color={'#fa823f'}
                            fontSize={{ base: '16px', md: '18px', lg: '20px' }}
                          >
                            Email
                          </FieldLabel>
                          <Input
                            required
                            as={'input'}
                            w={{
                              base: '100%',
                              md: '80%',
                              lg: '100%',
                              xl: '100%',
                            }}
                            onChange={e =>
                              setEnquireInputs({
                                ...enquireInputs,
                                email: e.target.value,
                              })
                            }
                            value={enquireInputs.email}
                            h={'3rem'}
                            borderWidth={'2px'}
                            color={'white'}
                            borderRadius={'10px'}
                            backgroundColor={'black'}
                            focusRing={'none'}
                            borderColor={'#fa823f'}
                            type="email"
                          />
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
                            fontSize={{ base: '16px', md: '18px', lg: '20px' }}
                          >
                            Contact Number
                          </FieldLabel>
                          <Input
                            required
                            as={'input'}
                            w={{
                              base: '100%',
                              md: '80%',
                              lg: '100%',
                              xl: '100%',
                            }}
                            h={'3rem'}
                            onChange={e =>
                              setEnquireInputs({
                                ...enquireInputs,
                                contactNumber: e.target.value,
                              })
                            }
                            value={enquireInputs.contactNumber}
                            borderWidth={'2px'}
                            color={'white'}
                            borderRadius={'10px'}
                            backgroundColor={'black'}
                            focusRing={'none'}
                            borderColor={'#fa823f'}
                            type="tel"
                          />
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
                            fontSize={{ base: '16px', md: '18px', lg: '20px' }}
                          >
                            Subject
                          </FieldLabel>
                          <Input
                            required
                            as={'input'}
                            w={{
                              base: '100%',
                              md: '80%',
                              lg: '100%',
                              xl: '100%',
                            }}
                            onChange={e =>
                              setEnquireInputs({
                                ...enquireInputs,
                                subject: e.target.value,
                              })
                            }
                            value={enquireInputs.subject}
                            h={'3rem'}
                            borderWidth={'2px'}
                            color={'white'}
                            borderRadius={'10px'}
                            backgroundColor={'black'}
                            focusRing={'none'}
                            borderColor={'#fa823f'}
                            type="text"
                          />
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
                            fontSize={{ base: '16px', md: '18px', lg: '20px' }}
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
                              md: '80%',
                              lg: '100%',
                              xl: '100%',
                            }}
                            onChange={e =>
                              setEnquireInputs({
                                ...enquireInputs,
                                message: e.target.value,
                              })
                            }
                            value={enquireInputs.message}
                            type="text"
                          />
                        </FieldRoot>
                        <Button
                          w={{
                            base: '8rem',
                            md: '8rem',
                            lg: '10rem',
                            xl: '10rem',
                          }}
                          h={{
                            base: '2.8rem',
                            md: '3rem',
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
                          alignSelf={{
                            base: 'center',
                            md: 'center',
                            lg: 'start',
                            xl: 'start',
                          }}
                          type="submit"
                        >
                          Submit
                        </Button>
                      </FieldsetContent>
                    </form>
                  </FieldsetRoot>

                  <VStack
                    h={'fit-content'}
                    pb={'2rem'}
                    color={'black'}
                    alignItems={{
                      base: 'center',
                      md: 'center',
                      lg: 'start',
                      xl: 'start',
                    }}
                    borderRadius={'10px'}
                    px={'2rem'}
                    backgroundColor={'#fa823f'}
                    boxShadow={'1px 5px 10px 5px #fa823f'}
                    w={{ base: '128%', md: '100%', lg: '60%', xl: '35%' }}
                    maxW={{
                      base: undefined,
                      md: undefined,
                      lg: undefined,
                      xl: '35%',
                    }}
                    alignSelf={{
                      base: 'center',
                      md: 'center',
                      lg: 'start',
                      xl: 'start',
                    }}
                    css={{
                      '@media (max-width: 343px)': {
                        w: '145%',
                      },
                    }}
                  >
                    <Flex
                      alignItems={'center'}
                      gap={{
                        base: '0.5rem',
                        md: '1rem',
                        lg: '1rem',
                        xl: '1rem',
                      }}
                      pt={'2rem'}
                    >
                      <Icon
                        color={'black'}
                        boxSize={{
                          base: '24px',
                          md: '26px',
                          lg: '28px',
                          xl: '28px',
                        }}
                        as={MdOutlineAddIcCall}
                      />

                      <Text
                        fontSize={{
                          base: '16px',
                          md: '18px',
                          lg: '18px',
                          xl: '18px',
                        }}
                        fontWeight={'500'}
                      >
                        (+27) 81 469 9391
                      </Text>
                    </Flex>

                    <Flex
                      alignItems={{
                        base: 'center',
                        md: 'center',
                        lg: 'start',
                        xl: 'start',
                      }}
                      textAlign={{
                        base: 'center',
                        md: 'center',
                        lg: 'start',
                        xl: 'start',
                      }}
                      pt={'2rem'}
                      pb={'2rem'}
                      gap={{
                        base: '0.5rem',
                        md: '1rem',
                        lg: '1rem',
                        xl: '1rem',
                      }}
                      flexDir={'column'}
                    >
                      <Heading
                        fontSize={{
                          base: '16px',
                          md: '18px',
                          lg: '24px',
                          xl: '26px',
                        }}
                        as={'h4'}
                      >
                        Operating Hours
                      </Heading>
                      <Text
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '18px',
                          xl: '20px',
                        }}
                      >
                        Mon-Fri: 08:30-17:00
                      </Text>
                      <Text
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '18px',
                          xl: '20px',
                        }}
                      >
                        Sun & Sun: 09:30-14:00
                      </Text>
                    </Flex>
                    <Flex
                      alignItems={{
                        base: 'center',
                        md: 'center',
                        lg: 'start',
                        xl: 'start',
                      }}
                      textAlign={{
                        base: 'center',
                        md: 'center',
                        lg: 'start',
                        xl: 'start',
                      }}
                      flexDir={'column'}
                    >
                      <Heading
                        fontSize={{
                          base: '16px',
                          md: '18px',
                          lg: '24px',
                          xl: '26px',
                        }}
                        as={'h4'}
                      >
                        Address
                      </Heading>
                      <Text
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '18px',
                          xl: '20px',
                        }}
                      >
                        Stanger Avenue
                        <br /> Eldoraigne
                        <br /> Centrion
                        <br /> 0157
                      </Text>
                    </Flex>
                  </VStack>
                </Flex>
              </DialogBody>
            </DialogContent>
          </DialogPositioner>
        </Portal>
      </DialogRoot>
    </Flex>
  );
}

export default Enquire;

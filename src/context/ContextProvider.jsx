import React, { createContext, useRef, useState } from 'react';

export const GlobalStateContext = createContext();

function ContextProvider({ children }) {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const enquireRef = useRef(null);
  const reviewsRef = useRef(null);
  const [open, setOpen] = useState(false); // UseState for Dialog open and close for Enquire
  //Scroll into click section function
  const scrollToSection = ref => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  //   // Functions for opening and closing Enquire dialog.
  //   const handleOpenDialog = () => setOpenDialog(true);
  //   const handleCloseFunction = () => setOpenDialog(false);

  return (
    <GlobalStateContext.Provider
      value={{
        homeRef,
        servicesRef,
        aboutRef,
        enquireRef,
        reviewsRef,
        scrollToSection,
        open,
        setOpen,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}

export default ContextProvider;

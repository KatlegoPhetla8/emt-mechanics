import React from 'react';
import { toaster } from '../components/ui/toaster';

function useShowToast() {
  //Enquiry Toasts
  const successEnquireToast = () =>
    toaster.create({
      type: 'success',
      title: 'Enquiry sent successfully.',
    });

  const errorEnquireToast = () =>
    toaster.create({
      type: 'error',
      title: 'Failed to send enquiry, please try again.',
    });

  const infoEnquireToast = () =>
    toaster.create({
      type: 'info',
      title: 'Please fill in all the fields.',
    });

  return { successEnquireToast, errorEnquireToast, infoEnquireToast };
}

export default useShowToast;

'use client';

import React from 'react';
import { toaster } from '../components/ui/toaster';

function useShowToast() {
  //Enquiry Toasts
  const successEnquireToast = () =>
    toaster.create({
      type: 'success',
      description: 'Enquiry sent successfully.',
    });

  const errorEnquireToast = () =>
    toaster.create({
      type: 'error',

      title: 'Failed to send enquiry, please try again.',
      closable: 'true',
    });

  const infoEnquireToast = () =>
    toaster.create({
      type: 'info',
      title: 'Please fill in all the fields.',
    });

  // Rating Toasts
  const successRatingToast = () =>
    toaster.create({
      type: 'success',
      title: 'Thank you for your rating!',
    });

  const errorRatingToast = () =>
    toaster.create({
      type: 'error',
      title: 'Failed rating, please try again.',
    });

  const infoRatingToast = () =>
    toaster.create({
      type: 'info',
      title: 'Please fill in all the rating fields.',
    });

  return {
    successEnquireToast,
    errorEnquireToast,
    infoEnquireToast,
    successRatingToast,
    errorRatingToast,
    infoRatingToast,
  };
}

export default useShowToast;

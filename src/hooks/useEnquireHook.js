import React, { useState } from 'react';
import useShowToast from './useShowToast';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebase';

function useEnquireHook() {
  const { successEnquireToast, errorEnquireToast, infoEnquireToast } =
    useShowToast();
  const [isLoading, setIsLoading] = useState(false);

  async function handleEnquireSubmit(enquireInputs) {
    const enquireValues = Object.values(enquireInputs);
    for (const value of enquireValues) {
      if (value === '') {
        infoEnquireToast();
        return;
      }
    }

    setIsLoading(true);

    try {
      // Storing data from enquire into Enquire firestore collection
      const docEnquireRef = await addDoc(collection(db, 'enquire'), {
        fullName: enquireInputs.fullName,
        email: enquireInputs.email,
        contactNumber: enquireInputs.contactNumber,
        subject: enquireInputs.subject,
        message: enquireInputs.message,
        createdAt: serverTimestamp(),
      });
      successEnquireToast();
      return docEnquireRef;
    } catch (error) {
      console.error(error);
      errorEnquireToast();
    } finally {
      setIsLoading(false);
    }
  }
  return { handleEnquireSubmit, isLoading };
}

export default useEnquireHook;

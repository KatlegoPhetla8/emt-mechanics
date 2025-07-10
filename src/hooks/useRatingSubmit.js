import React, { useState } from 'react';
import useShowToast from './useShowToast';
import useLoginRatingAuth from './useLoginRatingAuth';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';

function useRatingSubmit() {
  const { successRatingToast, errorRatingToast, infoRatingToast } =
    useShowToast();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useLoginRatingAuth();

  async function handleRatingSubmit(userRating) {
    if (userRating.rating === 0 || userRating.reviewMessage.trim() === '') {
      infoRatingToast();
      return;
    }

    setIsLoading(true);
    // Storing data from review into Reviews firestore collection
    try {
      const docRef = await addDoc(collection(db, 'reviews'), {
        uid: user.uid,
        userName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        rating: userRating.rating,
        reviewMessage: userRating.reviewMessage,
        createdAt: serverTimestamp(),
      });
      successRatingToast();
      return docRef;
    } catch (error) {
      console.error;
      errorRatingToast();
      return;
    } finally {
      setIsLoading(false);
    }
  }

  return { handleRatingSubmit, isLoading };
}

export default useRatingSubmit;

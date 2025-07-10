import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase.js';

function useDisplayReviews() {
  const [reviews, setReviews] = useState([]); // State that stores reviews
  const [loading, setLoading] = useState(true);

  //Data fetching useEffect. Getting data from firestore collection
  useEffect(() => {
    // Async function that gets data from firestore
    async function fetchReviews() {
      try {
        // Create a reference to the 'reviews' and order by createdAt
        const queryData = query(
          collection(db, 'reviews'),
          orderBy('createdAt', 'desc')
        );
        // Get all docs from the query reference
        const querySnapShot = await getDocs(queryData);

        // Map over the documents and convert them into array of objects
        const reviewsListed = querySnapShot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Storing reviews in the state
        setReviews(reviewsListed);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      }
    }
    // Call fetchReviews(); on component mount
    fetchReviews();
  }, []);
  return { reviews, loading };
}

export default useDisplayReviews;

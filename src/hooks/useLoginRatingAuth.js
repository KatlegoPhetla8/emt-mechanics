import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {
  provider,
  auth,
  signInWithPopup,
  signOut as firebaseSignOut,
} from '../firebase/firebase';

function useLoginRatingAuth() {
  const [user, setUser] = useState(null); // User currently logged in.
  const [authLoading, setAuthLoading] = useState(true);

  // Track sign in state
  useEffect(() => {
    const userSignInState = onAuthStateChanged(auth, loginUser => {
      setUser(loginUser);
      setAuthLoading(false);
    });
    return () => userSignInState();
  }, []);

  //Login function
  async function login() {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error;
      throw error;
    }
  }

  // Logout function
  const logout = () => firebaseSignOut(auth);

  return { user, authLoading, logout, login };
}

export default useLoginRatingAuth;

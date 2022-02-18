import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);

  };

  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateInfo = (name, photoUrl) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        window.location.reload();
        // const newUser = { ...user, displayName: name };
        // setUser(newUser);
        alert("Profile Created Successfully!");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //!observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  return {
    user,
    error,
    signInUsingGoogle,
    logOut,
    isLoading,
    userRegister,
    userSignIn,
    setUser,
    setError,
    setIsLoading,
    forgetPassword,
    updateInfo,
  };
};

export default useFirebase;

import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");
  //   Observe User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // console.log(currentUser);
      //  Get and Set token
    //   if (currentUser) {
    //     axios
    //       .post(`${import.meta.env.VITE_LOCALHOST_KEY}/jwt`, {
    //         email: currentUser?.email,
    //       })
    //       .then((data) => {
    //         localStorage.setItem("access-token", data.data.token);
    //       });
    //   } else {
    //     localStorage.removeItem("access-token");
    //   }
      setLoading(false);
    });
    return () => {
      return unsubscribe;
    };
  }, []);
  // Create New user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
    // exiting user sing in
    const singIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  // Value pass
  const authInfo = {
    user,
    setLoading,
    createUser,
    singIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

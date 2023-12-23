import React, { useRef, useState } from "react";
import styles from "./SignIn.module.css";
import Logo from "../../../assets/Logo.png";
import Modal from "./Modal/Modal";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../../Firebase/Firebase";

const SignIn = () => {
  const [isModalOpen, setModalOpen] = useState(true);
  const [isLoading, setLoading] = useState(false); 
  const emailRef = useRef();
  const passRef = useRef();

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passRef.current.value
    )
      .then((authUser) => {
        emailRef.current.value = "";
        passRef.current.value = "";
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    setLoading(true); 

    signInWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
      .then((authUser) => {
        emailRef.current.value = "";
        passRef.current.value = "";
        setLoading(false); // Set loading to false on successful sign in
      })
      .catch((error) => {
        setLoading(false); 
        alert(error.message);
      });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className={styles.header}>
        <img className={styles.brandLogo} src={Logo} alt="" />
      </div>
      <div className={styles.main}>
        <div className={styles.bg_clr}>
          <form action="" onSubmit={signIn} className={styles.form}>
            <h2>Sign In</h2>
            <input
              className={styles.input}
              type="text"
              placeholder="Eg : anyName.gmail.com"
              required
              ref={emailRef}
            />
            <div className={styles.icon}>
              <input
                className={styles.input}
                type="password"
                placeholder="Password"
                required
                ref={passRef}
              />
            </div>
            <button className={styles.signIn} onClick={signIn} disabled={isLoading}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
          <p className={styles.des}>
            New to Netflix?
            <span className={styles.signUp} onClick={register}>
              Sign Up Now
            </span>
          </p>
        </div>
      </div>
      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
};

export default SignIn;

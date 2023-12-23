import React, { useState } from "react";
import styles from "./AuthenticationPage.module.css";
import Logo from "../../../assets/Logo.png";
import SignIn from "../SignIn/SignIn";
import { IoIosArrowForward } from "react-icons/io";

const AuthenticationPage = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className={styles.cover_img}>
      {signIn ? (
        <SignIn />
      ) : (
        <>
          <div className={styles.header}>
            <img className={styles.brandLogo} src={Logo} alt="" />
            <button
              className={styles.button_signIn}
              onClick={() => setSignIn(true)}
            >
              Sign In
            </button>
          </div>

          <div className={styles.content}>
            <p className={styles.subTitle}>Welcome back!</p>
            <h2>
              Enjoy big movies, hit series and more from <span> ₹149.</span>
            </h2>
            <p className={styles.subTitle}>Join today. Cancel anytime.</p>
            <button
              className={styles.button_main}
              onClick={() => setSignIn(true)}
            >
              Get Started{" "}
              <span className={styles.icon}>
                <IoIosArrowForward size={20} />
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthenticationPage;

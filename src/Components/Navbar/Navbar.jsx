import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/Logo.png";
import { useDispatch } from "react-redux";
import { userSlice } from "../../Store/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase";

const Navbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logOut } = userSlice.actions;

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsScrollingUp(Boolean(prevScrollPos > currentScrollPos));
    setPrevScrollPos(currentScrollPos);
    setIsScrolled(Boolean(currentScrollPos > 0));
  };

  const handleClick = () => {
    dispatch(logOut());
    navigate("/");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <div
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}  ${
        isScrollingUp ? styles.visible : styles.hidden
      }`}
    >
      <div className={styles.nav_content}>
        <img className={styles.logo} src={Logo} alt="Logo" />
        <div className={styles.right_nav}>
          <button className={styles.signOut} onClick={() => auth.signOut()}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

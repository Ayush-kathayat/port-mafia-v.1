import styles from "./nvabar.module.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import pdf from "/resume.pdf";
import clsx from "clsx";

const Navbar = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);
  const [navColor, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 5) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <nav
        className={clsx(styles.navbar, { [styles.active]: showMobMenu })}
        id={navColor ? "blurry" : "trans"}
      >
        <Link className={styles.logo} to="/">
          <h1 className={styles.navbar__logo}>AK.</h1>
        </Link>

        <ul className={styles.links}>
          <li className={styles.links__item_wrapper}>
            <div className={styles.main_link}>
              <span className={styles.links__item}>Home</span>
              <Link className={styles.l2} to="/">
                Home
              </Link>
            </div>
          </li>
          <li className={styles.links__item_wrapper}>
            <div className={styles.main_link}>
              <span className={styles.links__item}>About</span>
              <Link className={styles.l2} to="/about">
                About
              </Link>
            </div>
          </li>
          <li className={styles.links__item_wrapper}>
            <div className={styles.main_link}>
              <span className={styles.links__item}>Projects</span>
              <Link className={styles.l2} to="/projects">
                Projects
              </Link>
            </div>
          </li>
          <li className={styles.links__item_wrapper}>
            <div className={styles.main_link}>
              <a
                className={styles.resume_btn}
                href={pdf}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </li>
        </ul>

        <div
          className={styles.mobile_navbar_btn}
          onClick={() => {
            setShowMobMenu(!showMobMenu);
          }}
        >
          <svg
            className={styles.open_menu}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 26"
            width="26px"
            height="26px"
          >
            <path
              d="M 0 4 L 0 6 L 26 6 L 26 4 Z M 0 12 L 0 14 L 26 14 L 26 12 Z M 0 20 L 0 22 L 26 22 L 26 20 Z"
              fill="#ffffff"
            />
          </svg>

          <svg
            className={styles.close_menu}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="28px"
            height="28px"
          >
            <path
              d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

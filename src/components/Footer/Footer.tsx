import React from "react";
import styles from "./Footer.module.scss";
import FacebookSvg from "../Icons/FacebookSvg";
import TwitterSvg from "../Icons/TwitterSvg";
import BookmarkSvg from "../Icons/BookmarkSvg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <a href="#" className={styles.footer__logo}>
          <BookmarkSvg />
        </a>

        <ul className={styles.footer__links}>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className={styles.footer__socials}>
        <a href="#" className={styles.footer__icon}>
          <FacebookSvg />
        </a>
        <a href="#" className={styles.footer__icon}>
          <TwitterSvg />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

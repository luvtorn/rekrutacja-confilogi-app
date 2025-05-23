import React from "react";
import styles from "./BookmarkIntro.module.scss";
import Button from "../ui/Button/Button";

const BookmarkIntro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.intro__text}>
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className={styles.intro__buttons}>
          <Button variant="blue-solid">Get it on Chrome</Button>
          <Button variant="gray-outline">Get it on Firefox</Button>
        </div>
      </div>
      <div className={styles.intro__image}>
        <img src="../../../images/illustration-hero.svg" alt="" />
      </div>
    </section>
  );
};

export default BookmarkIntro;

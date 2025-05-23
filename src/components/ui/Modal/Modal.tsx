import { useEffect, useState } from "react";
import styles from "./Modal.module.scss";

const Modal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Блокируем скролл при открытом модальном окне
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  // Таймер на 30 секунд
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!hasInteracted) setIsVisible(true);
    }, 30000);
    return () => clearTimeout(timeout);
  }, [hasInteracted]);

  // Наведение курсора в верхнюю часть
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 100 && !hasInteracted) {
        setIsVisible(true);
        setHasInteracted(true);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hasInteracted]);

  const handleClose = () => {
    setIsVisible(false);
    setHasInteracted(true);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={handleClose}>
          ✕
        </button>
        <div className={styles.content}>
          <img
            src="../../../../images/illustration-features-tab-2.svg"
            alt="Zakładka 2"
          />
          <div className={styles.text}>
            <h1>Intelligent Searching</h1>
            <p>
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

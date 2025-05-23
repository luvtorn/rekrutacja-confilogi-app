import { useEffect, useState } from "react";
import styles from "../Contact/Contact.module.scss";

const JoinCounter = () => {
  const startValue = 35000;
  const duration = 20000;
  const interval = 50;
  const steps = duration / interval;
  const decrement = startValue / steps;

  const [count, setCount] = useState(startValue);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev - decrement;
        return next > 0 ? next : 0;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <p className={styles.contact__text}>
      {Math.floor(count).toLocaleString()}+ already joined
    </p>
  );
};

export default JoinCounter;
